import dotenv from 'dotenv';
import express from 'express';
import appProductos from './routes/routes.js';
import { appToken, appVerify} from './limit/token.js';
//import { initRoutes} from './routes/routes.js'
dotenv.config();

let app = express();

app.use(express.json());
//app.use("/productos",appVerify, appBodegas);
app.use("/token", appToken);
app.use("/prueba",appProductos,appVerify);

let config = JSON.parse(process.env.MY_SERVER);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});