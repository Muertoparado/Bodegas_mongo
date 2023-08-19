import { con } from "../db/atlas.js";
import {ObjectId} from 'mongodb';
export async function postProduct(req, res){
    try {
        const data = req.body;
        const defaultQuantity = 100;

        let db = await con();
        let productosColleccion = db.collection("productos");
        const dataProduct = {
            _id: new ObjectId(),
            ...data,
            created_at: new Date(req.body.created_at),
            updated_at: new Date(req.body.updated_at)
        };
        await productosColleccion.insertOne(dataProduct);

        let inventariosColleccion = db.collection("inventarios");
        const inventoryEntry = {
            id: data.id,
            id_bodega: 1,
            id_producto: data.id,
            cantidad: defaultQuantity,
            created_by: data.created_by,
            updated_by: data.updated_by,
            created_at: new Date(req.body.created_at),
            updated_at: new Date(req.body.updated_at)
        };
        await inventariosColleccion.insertOne(inventoryEntry);
        res.send({ status: 200, message: "Product inserted and inventory updated successfully :)" });
    } catch (e) {
        console.log(e);
        res.status(500).send({ status: 500, message: "Internal Server Error :(", error: e.errInfo });
    }
};

/* const appBodegas = Router();  
import { Router } from 'express';
import { productosGet } from '../controller/getController.js';
import { productosPost } from '../controller/postController.js'

const getInitRoute =()=>{
    const router = Router();
    router.get("/productos", productosGet);
    router.get("/productos", productosPost);
        return router;
}

export{initRoute};


export {getRoute} */