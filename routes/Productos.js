import { Router } from 'express';
import { productosGet } from '../controller/getController.js';
import { agregarProductoscontroller } from '../controller/postController.js'

const initRoute =()=>{
    const router = Router();
    router.get("/productos", productosGet);
    router.get("/productosadd", agregarProductoscontroller);
        return router;
}

export{initRoute};

