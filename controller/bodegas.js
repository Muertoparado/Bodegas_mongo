import { con} from "../db/atlas.js";
import { ObjectId } from "mongodb";

export async function getBodegas(req, res) {
    try {
        let db = await con();
        let colleccion = db.collection("bodegas");
        let results = await colleccion.find({}).sort({ created_at: -1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "No Encontrado" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}

export async function getBodegasId(req, res) {
    try {
        const db = await con();
        const collection = db.collection("bodegas");
        const bodegaId = parseInt(req.params.id);

        const bodega = await collection.findOne({ id:bodegaId });

        if (!bodega) {
            return res.status(404).send({ status: 404, message: "bodega no encontrada" });
        }

        res.status(200).json(bodega);
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Error interno del servidor" });
    }
};

export async function postBodegas(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("bodegas");
        let data = req.body;
        const newbodega = {
            _id: new ObjectId(),
            ...data,
            created_at: new Date(req.body.created_at),
        };
        await colleccion.insertOne(newbodega);
        res.status(201).send({ status:201, message: "Created" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};

export async function deleteBodega(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("bodegas");
        const bodegaId = parseInt(req.params.id);

        const bodega = await colleccion.findOne({ id: bodegaId });

        if (!bodega) {
            return res.status(404).send({ status: 404, message: "bodega no encontrado" });
        }

        const deletionResult = await colleccion.deleteOne({ id: bodegaId });
        console.log(deletionResult);
        res.status(200).send({ status:200, message: "Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};
