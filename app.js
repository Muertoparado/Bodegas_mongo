import dotenv from 'dotenv';
import express from 'express';
import appBodegas from './routes/Post.js';
import { appToken, appVerify} from './limit/tokenProd.js';
dotenv.config();

let app = express();

app.use(express.json());
app.use("/app",appVerify, appBodegas);
app.use("/token", appToken);

let config = JSON.parse(process.env.MY_SERVER);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});