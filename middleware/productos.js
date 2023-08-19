import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import { validate } from 'class-validator';
import { DTO } from "../limit/token.js";
import { Router } from "express";
import express from 'express'
import { productos } from '../routers/storage/productos.js';

const middlewareProduc = Router();
const DTOData = Router();

/* middlewareProduc.use((req,res,next) => {
    if(!req.rateLimit) return; 
    let {payload} = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    let Clone = JSON.stringify(classToPlain(plainToClass(DTO("productos").class, {}, { ignoreDecorators: true })));
    let Verify = Clone === JSON.stringify(payload);
    req.data = undefined;
    (!Verify) ? res.status(406).send({status: 406, message: "No Autorizado"}) : next();  
}); */
const appValidateData = express();

appValidateData.use(async (req, res, next) => {
  try {
    const data = plainToClass(productos, req.body, { excludeExtraneousValues: true });
    const validateData = await validate(data);
    const validation = validateData.length > 0 ? validateData.flatMap(err => Object.values(err.constraints)): (req.body = JSON.parse(JSON.stringify(data)), []);
    validation.length > 0 ? res.status(400).json({ status: 400, message: "Validation error", errors: validation}) : (req.body = JSON.parse(JSON.stringify(data)), next());
  } catch (error) {
    res.status(500).json({ status: 500, message: "Internal server error", error: error.message});
  }
});
middlewareProduc.use((req, res, next) => {
  if (!req.rateLimit) return;
 // let { payload } = req.data;
 let { payload } = req.body;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  const convertDateProperties = payload => ({
    ...payload,
    created_at: new Date(payload.created_at),
    updated_at: new Date(payload.updated_at),
    deleted_at: new Date(payload.deletd_at)
  });
  const payloadDateObjects = convertDateProperties(payload);
  const Clone = convertDateProperties(payload);
  const Verify = JSON.stringify(Clone).replace(/\s+/g, '') === JSON.stringify(payloadDateObjects).replace(/\s+/g, '');
 // req.data = undefined;
  !Verify ? res.status(406).send({ status: 406, message: "Not Acceptable" }): next();
});

DTOData.use( async(req,res,next) => {
    try {
        let data = plainToClass(DTO("productos").class, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (err) {
        res.status(err.status).send(err)
    }
});

export {
    appValidateData,
    middlewareProduc,
    DTOData
};