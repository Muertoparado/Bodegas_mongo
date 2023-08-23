import {con} from "../db/atlas.js";
import { ObjectId } from "mongodb";

/* export async function getUsers(req, res) {
    try {
        let db = await con();
        console.log(db);
        let colleccion = db.collection("users");
        let results = await colleccion.find({}).sort({ nombre: 1 }).toArray();
        results.length > 0 ? res.send(results).status(200) : res.status(404).send({ status: 404, message: "Found But Without Contain :(" })
    } catch (error) {
        res.status(404).send({ status:404, message: "Query Not Found :(" })
    }
};
 */

export async function getUsers(req, res) {
    let success = false;
    try {
        let db = await con();
        console.log(db);
        let colleccion = db.collection("users");
        let results = await colleccion.find({}).sort({ nombre: 1 }).toArray();
        if (results.length > 0) {
            success = true;
            res.send(results).status(200);
        } else {
            res.status(404).send({ status: 404, message: "Found But Without Contain :(" });
        }
    } catch (error) {
        res.status(404).send({ status: 404, message: "Query Not Found :(" });
    } finally {
        if (success) {
            console.log('Request successful');
        } else {
            console.log('Request failed');
        }
    }
};
export async function postUsers(req, res){
   /*  if(!req.rateLimit) return;

   try {
      const client = await con(); // Obtén la conexión a la base de datos
     // const db = await client.db(); // Obtiene la instancia de la base de datos

    const collection = client.collection("users");
    const myobj = req.body;
    const result = await collection.insertOne(myobj);
    console.log("users insertado");
    console.log(req.rateLimit);;
    return res.json({
        status: "success",
        message: "users insertado",
        document: result.ops 
    });
    } catch (error) {
        console.log("Error al insertar users:", error);
        return res.status(500).json({ message: 'Error al insertar users' });
}
}; */

try{
    let db = await con();
    let colleccion = db.collection("users");
    let data = req.body;
    const newUser = {
        _id: new ObjectId(),
        ...data,
    };
    await colleccion.insertOne(newUser);
    res.status(201).send({ status:201, message: "Created :)" });
} catch (error) {
    console.error(error);
    res.status(500).send({ status:500, message: "Internal Server Error :(" });
}
};