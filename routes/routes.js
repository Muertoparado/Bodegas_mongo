import express from "express";
import { limitQuery } from "../limit/config.js";
import { postProduct} from "../routes/Productos.js";
import { appValidateData, middlewareProduc, DTOData } from "../middleware/productos.js";

const appProductos = express();
appProductos.use(express.json());


appProductos.post("/produ",  limitQuery(), appValidateData, middlewareProduc, DTOData, postProduct)

export default appProductos;