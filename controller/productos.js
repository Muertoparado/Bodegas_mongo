import { con} from "../db/atlas.js";
import { ObjectId } from "mongodb";

export async function getProductos(req, res) {
    try {
        let db = await con();
        let colleccion = db.collection("productos");
        let results = await colleccion.find({}).sort({ created_at: -1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "No Encontrado" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}

export async function getProductosId(req, res) {
    try {
        const db = await con();
        const collection = db.collection("productos");
        const productoId = parseInt(req.params.id);
        const producto = await collection.findOne({ id:productoId });

        if (!producto) {
            return res.status(404).send({ status: 404, message: "producto no encontrado" });
        }
        res.status(200).json(producto);
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Error interno del servidor" });
    }
};

export async function postProductos(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("productos");
        let data = req.body;
        const newproducto = {
            _id: new ObjectId(),
            ...data,
            created_at: new Date(req.body.created_at),
        };
        await colleccion.insertOne(newproducto);
        res.status(201).send({ status:201, message: "Created" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};

export async function deleteProducto(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("productos");
        const productoId = parseInt(req.params.id);
        const producto = await colleccion.findOne({ id: productoId });

        if (!producto) {
            return res.status(404).send({ status: 404, message: "producto no encontrado" });
        }
        const deletionResult = await colleccion.deleteOne({ id: productoId });
 //       console.log(deletionResult);
        res.status(200).send({ status:200, message: "Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};
