import { con} from "../db/atlas.js";
import { ObjectId } from "mongodb";

export async function getHistoriales(req, res) {
    try {
        let db = await con();
        let colleccion = db.collection("historiales");
        let results = await colleccion.find({}).sort({ created_at: -1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "No Encontrado" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}

export async function getHistorialesId(req, res) {
    try {
        const db = await con();
        const collection = db.collection("historiales");
        const historialId = parseInt(req.params.id);
        const historial = await collection.findOne({ id:historialId });

        if (!historial) {
            return res.status(404).send({ status: 404, message: "historial no encontrada" });
        }

        res.status(200).json(historial);
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Error interno del servidor" });
    }
};

export async function postHistoriales(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("historiales");
        let data = req.body;
        const newhistorial = {
            _id: new ObjectId(),
            ...data,
            created_at: new Date(req.body.created_at),
        };
        
        await colleccion.insertOne(newhistorial);
        res.status(201).send({ status:201, message: "Created" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};

export async function deleteHistoriales(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("historiales");
        const historialId = parseInt(req.params.id);
        const historial = await colleccion.findOne({ id: historialId });

        if (!historial) {
            return res.status(404).send({ status: 404, message: "historial no encontrado" });
        }
        const deletionResult = await colleccion.deleteOne({ id: historialId });
        console.log(deletionResult);
        res.status(200).send({ status:200, message: "Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};
