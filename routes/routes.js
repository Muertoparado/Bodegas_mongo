import express from "express";
import { limitQuery } from "../limit/config.js";
import { deleteUser, getUserId, getUsers, postUsers } from "../controller/user.js";


function configurarApp() {
    const app = express();
    app.use(express.json());
    return app;
}

const appUsers = configurarApp();
//const appInfraestructura = configurarApp();

appUsers.get("/users",limitQuery(),getUsers);
appUsers.get("/users/:id",limitQuery(),getUserId);
appUsers.post("/users",limitQuery(),postUsers);
appUsers.delete("/users/:id",limitQuery(),deleteUser);

export {
    appUsers
}
