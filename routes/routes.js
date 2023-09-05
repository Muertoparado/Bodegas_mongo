import express from "express";
import { limitQuery } from "../limit/config.js";
import { deleteUser, getUserId, getUsers, postUsers } from "../controller/user.js";
import { deleteBodega, getBodegas, getBodegasId, postBodegas } from "../controller/bodegas.js";


function configurarApp() {
    const app = express();
    app.use(express.json());
    return app;
}

const appUsers = configurarApp();
const appBodegas= configurarApp();
//const appInfraestructura = configurarApp();

appUsers.get("/users",limitQuery(),getUsers);
appUsers.get("/users/:id",limitQuery(),getUserId);
appUsers.post("/users",limitQuery(),postUsers);
appUsers.delete("/users/:id",limitQuery(),deleteUser);

appBodegas.get("/bodegas",limitQuery(),getBodegas);
appBodegas.get("/bodegas/:id",limitQuery(),getBodegasId);
appBodegas.post("/bodegas",limitQuery(),postBodegas);
appBodegas.delete("/bodegas/:id",limitQuery(),deleteBodega);

export {
    appUsers,
    appBodegas
}
