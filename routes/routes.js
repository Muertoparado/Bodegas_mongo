import express from "express";
import { limitQuery } from "../limit/config.js";
import { deleteUser, getUserId, getUsers, postUsers } from "../controller/user.js";
import { deleteBodega, getBodegas, getBodegasId, postBodegas } from "../controller/bodegas.js";
import { deleteProducto, getProductos, getProductosId, postProductos, putProducto } from "../controller/productos.js";
import { deleteHistoriales, getHistoriales, getHistorialesId, postHistoriales } from "../controller/historiales.js";


function configurarApp() {
    const app = express();
    app.use(express.json());
    return app;
}

const appUsers = configurarApp();
const appBodegas= configurarApp();
const appProductos = configurarApp();
const appHistoriales= configurarApp();

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
appProductos.put("/productos/:id",limitQuery(),putProducto)
appProductos.delete("/productos/:id",limitQuery(),deleteProducto);

appHistoriales.get("/historiales",limitQuery(),getHistoriales),
appHistoriales.get("/historiales/:id",limitQuery(),getHistorialesId);
appHistoriales.post("/histporiales",limitQuery(),postHistoriales),
appHistoriales.delete("/historiales/:id",limitQuery(),deleteHistoriales);

export {
    appUsers,
    appBodegas,
    appProductos,
    appHistoriales
}
