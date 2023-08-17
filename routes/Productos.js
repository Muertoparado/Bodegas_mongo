import { Router } from 'express';
import { con } from "../db/atlas.js";
import { limitProduct } from '../limit/config.js';
import { plainToClass } from 'class-transformer';
import { DTO } from '../limit/tokenProd.js';
import expressQueryBoolean from 'express-query-boolean';
import {middlewareProduc, DTOData, appDTOParamProductos} from '../middleware/productos.js';
import { processErrors } from '../common/Function.js';
import { Productos } from '../dtocontroller/productosdto.js';
import { ObjectId } from 'mongodb';
let storageProductos = Router();

let db = await con();
let productos = db.collection("productos");

storageProductos.use(expressQueryBoolean());


storageProductos.get("/", limitProduct() ,middlewareProduc ,async(req, res)=>{
    try{
        const {id} = req.query;
        if(id){
            const data = await getProductosById(id);
            res.send(data)
        } else {
            const data = await getProductosAll();
            res.send(data);
        }
    }catch(err){
        console.error("Ocurrió un error al procesar la solicitud", err.message);
        res.sendStatus(500);
    }
});

storageProductos.post('/', limitProduct(), middlewareProduc, DTOData , async(req, res) => {
    if(!req.rateLimit) return;
    try{
        let result = await productos.insertOne(req.body);
        res.status(201).send(result);
    } catch (error){
        const err = plainToClass(DTO("mongo").class, error.errInfo.details.schemaRulesNotSatisfied)

        const errorList = processErrors(err, Productos);

        res.send(err);
    }
});
/* storageProductos.put("/:id?", limitProduct(), middlewareProduc, DTOData , appDTOParamProductos, async(req, res)=>{
    if(!req.rateLimit) return;
    if(!req.params.id){
        res.send({message: "Para realizar el método update es necesario ingresar el id del producto a modificar."})
    }else{
        try{
            let result = await users.updateOne(
                { "_id": parseInt(req.params.id)},
                { $set: req.body }
            );
            res.send(result)
        } catch (error){
            res.status(422).send(error)
        }
    }
});
storageProductos.delete("/:id?", limitProduct(), middlewareProduc, appDTOParamProductos, async(req, res)=>{
    if(!req.rateLimit) return;
    if(!req.params.id){
        res.status(404).send({message: "Para realizar el método delete es necesario ingresar el id del producto a eliminar."})
    } else {
        try{
            let result = await bodegas.deleteOne(
                { "_id": parseInt(req.params.id) }
            );
            res.status(200).send(result)
        } catch (error){
            res.status(422).send(error)
        }
    }
});  */
export default storageProductos;    