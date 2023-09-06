import express from "express";
import { limitQuery } from "../limit/config.js";
import { deleteUser, getUserId, getUsers, postUsers } from "../controller/user.js";
import { deleteBodega, getBodegas, getBodegasId, postBodegas } from "../controller/bodegas.js";
import { deleteProducto, getProductos, getProductosId, postProductos } from "../controller/productos.js";


function configurarApp() {
    const app = express();
    app.use(express.json());
    return app;
}

const appUsers = configurarApp();
const appBodegas= configurarApp();
const appProductos = configurarApp();

appUsers.get("/users",limitQuery(),getUsers);
appUsers.get("/users/:id",limitQuery(),getUserId);
appUsers.post("/users",limitQuery(),postUsers);
appUsers.delete("/users/:id",limitQuery(),deleteUser);

appBodegas.get("/bodegas",limitQuery(),getBodegas);
appBodegas.get("/bodegas/:id",limitQuery(),getBodegasId);
appBodegas.post("/bodegas",limitQuery(),postBodegas);
appBodegas.delete("/bodegas/:id",limitQuery(),deleteBodega);

appProductos.get("/productos",limitQuery(),getProductos);
appProductos.get("/productos/:id", limitQuery(),getProductosId);
appProductos.post("/productos",limitQuery(),postProductos);
appProductos.delete("/productos/:id",limitQuery(),deleteProducto);


export {
    appUsers,
    appBodegas,
    appProductos
}
