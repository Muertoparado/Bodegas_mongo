import express from "express";
import { limitQuery } from "../limit/config.js";
import { postProduct} from "../routes/Productos.js";
import {getUsers,postUsers} from '../routes/User.js';
import { appValidateData, middlewareProduc, DTOData } from "../middleware/productos.js";
import {appValidateUsers,middlewareUsers,DTOUsers} from '../middleware/user.js'

const appProductos = express();
const appUsers=express();
appUsers.use(express.json());
appProductos.use(express.json());


appProductos.post("/produ",  limitQuery(), appValidateData, middlewareProduc, DTOData, postProduct)
appUsers.get("/userg", limitQuery(),getUsers);
appUsers.post("/useradd",limitQuery(),appValidateUsers,middlewareUsers,DTOUsers,postUsers);

 
export { appProductos,appUsers};