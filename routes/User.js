import {con} from "../db/atlas.js";
import { ObjectId } from "mongodb";

export async function getUsers(req, res) {
    try {
        let db = await con();
        let colleccion = db.collection("users");
        let results = await colleccion.find({}).sort({ nombre: 1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        res.status(404).send({ status:404, message: "Query Not Found :(" })
    }
};

export async function postUsers(req, res){
    try{
        const db = await con();
        const collection = db.collection('users');
        await collection.insertOne({
            _id: new ObjectId(),
            ...req.body
        });
        res.status(201).json({
            satus: 201,
            message: "Inserted Data :)"
        });
    } catch (e) {
        res.status(500).json({
            satus: 500,
            message: "Internal Server Error",
            error: e.message
        });
    }
};