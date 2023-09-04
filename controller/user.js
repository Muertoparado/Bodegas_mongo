import { con} from "../db/atlas.js";
import { ObjectId } from "mongodb";

export async function getUsers(req, res) {
    try {
        let db = await con();
        let colleccion = db.collection("users");
        let results = await colleccion.find({}).sort({ created_at: -1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "No Encontrado" })
    } catch (error) {
        console.log(error); // Agregar este console.log para imprimir detalles del error
        res.status(500).send({ status: 500, message: "Internal Server Error" });
    }
}

export async function getUserId(req, res) {
    try {
        const db = await con();
        const collection = db.collection("users");
        const userId = parseInt(req.params.id);

        const user = await collection.findOne({ id:userId });

        if (!user) {
            return res.status(404).send({ status: 404, message: "user no encontrado" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).send({ status: 500, message: "Error interno del servidor" });
    }
};

export async function postUsers(req, res){
    try{
        let db = await con();
        let colleccion = db.collection("users");
        let data = req.body;
        const newuser = {
            _id: new ObjectId(),
            ...data,
            created_at: new Date(req.body.created_at),
        };
        await colleccion.insertOne(newuser);
        res.status(201).send({ status:201, message: "Created" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};

export async function deleteUser(req, res){
    try{
        let db = await con();
        console.log("connect delete");
        let colleccion = db.collection("users");
        const userId = parseInt(req.params.id);

        const user = await colleccion.findOne({ id: userId });

        if (!user) {
            return res.status(404).send({ status: 404, message: "user no encontrado" });
        }

        const deletionResult = await colleccion.deleteOne({ id: userId });
        //console.log(deletionResult);
        res.status(200).send({ status:200, message: "Deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ status:500, message: "Internal Server Error" });
    }
};
