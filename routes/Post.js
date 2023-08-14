import { plainToClass } from 'class-transformer';
import { con } from "../db/atlas.js";
import { limitProduct } from "../limit/config.js";
import { middlewareProduc, DTOData } from "../middleware/productos.js";
import { DTO } from "../limit/tokenProd.js";
import { Router } from "express";

const appBodegas = Router();  


//let db = await con();
//let productos = db.collection("productos")

appBodegas.get("/", limitProduct(), middlewareProduc, async(req, res) => {
    if(!req.rateLimit) return; 
    let db = await con();
    let productos = db.collection("productos");
    let result = await productos.find({}).toArray();
    res.send(result);
});

appBodegas.post("/", limitProduct(), middlewareProduc, DTOData, async(req, res) => {
    let resul;
    try {
        resul = await productos.insertOne(req.body);
        res.status(201).send(resul);
    } catch (error) {
        console.log(plainToClass(DTO("mongo").class, error.errInfo.details.schemaRulesNotSatisfied));
        // console.log(error.errInfo.details.schemaRulesNotSatisfied);
        res.send();
    }
});
export default appBodegas;