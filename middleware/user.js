import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import { validate } from 'class-validator';
import { DTO } from "../limit/token.js";
import { Router } from "express";
import express from 'express'
import { users } from '../routers/storage/users.js';

const middlewareUsers = Router();
const DTOUsers = Router();

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
const appValidateUsers = express();

appValidateUsers.use(async (req, res, next) => {
  
  try {
    console.log("validate");
    const data = plainToClass(users, req.body, { excludeExtraneousValues: true });
    const validateData = await validate(data);
    const validation = validateData.length > 0 ? validateData.flatMap(err => Object.values(err.constraints)): (req.body = JSON.parse(JSON.stringify(data)), []);
    validation.length > 0 ? res.status(400).json({ status: 400, message: "Validation error", errors: validation}) : (req.body = JSON.parse(JSON.stringify(data)), next());
  } catch (error) {
    res.status(500).json({ status: 500, message: "Internal server error", error: error.message});
  }
});
middlewareUsers.use((req, res, next) => {
  console.log("middleware");
  if(!req.rateLimit) return; 
    let {payload} = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    let Clone = JSON.stringify(classToPlain(plainToClass(DTO("users").class, {}, { ignoreDecorators: true })));
    let Verify = Clone === JSON.stringify(payload);
    req.data = undefined;
  !Verify ? res.status(406).send({ status: 406, message: "Not Acceptable" }): next();
  /* if (!req.rateLimit) return;
let { payload } = req.data;
// let { payload } = req.body;
  const { iat, exp, ...newPayload } = payload;
  payload = newPayload;
  /* const convertDateProperties = payload => ({
    ...payload
  });
  const payloadDateObjects = convertDateProperties(payload); 
  const Clone = convertDateProperties(payload);
  const Verify = JSON.stringify(Clone).replace(/\s+/g, '') === JSON.stringify(payloadDateObjects).replace(/\s+/g, '');
 // req.data = undefined; 
  let Clone= JSON.stringify(classToPlain(plainToClass(users,{},{ignoreDecorators:true})));
  let Verify= Clone===JSON.stringify(payloadayload);*/
  //!Verify ? res.status(406).send({ status: 406, message: "Not Acceptable" }): next();
   
});

DTOUsers.use( async(req,res,next) => {
    try {
        let data = plainToClass(DTO("users").class, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (err) {
        res.status(err.status).send(err)
    }
});

export {
    appValidateUsers,
    middlewareUsers,
    DTOUsers
};