import dotenv from 'dotenv';
import express from 'express';
import { appBodegas, appProductos, appUsers} from './routes/routes.js';
import { appToken, appVerify} from './limit/token.js';
//import { initRoutes} from './routes/routes.js'
dotenv.config();

let app = express();

app.use(express.json());
app.use("/token", appToken);
app.use("/users",appVerify,appUsers);
app.use("/bodegas",appVerify,appBodegas);
app.use("/productos",appVerify,appProductos);


let config = JSON.parse(process.env.MY_SERVER);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});