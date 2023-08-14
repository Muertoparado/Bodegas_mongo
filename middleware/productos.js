import 'reflect-metadata';
import { plainToClass, classToPlain } from 'class-transformer';
import { validate } from 'class-validator';
import { DTO } from "../limit/tokenProd.js";
import { Router } from "express";

const middlewareProduc = Router();
const DTOData = Router();

middlewareProduc.use((req,res,next) => {
    if(!req.rateLimit) return; 
    let {payload} = req.data;
    const { iat, exp, ...newPayload } = payload;
    payload = newPayload;
    let Clone = JSON.stringify(classToPlain(plainToClass(DTO("productos").class, {}, { ignoreDecorators: true })));
    let Verify = Clone === JSON.stringify(payload);
    req.data = undefined;
    (!Verify) ? res.status(406).send({status: 406, message: "No Autorizado"}) : next();  
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
    middlewareProduc,
    DTOData
};