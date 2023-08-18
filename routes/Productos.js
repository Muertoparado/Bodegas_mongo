import { Router } from 'express';
import { productosGet } from '../controller/getController.js';
import { productosPost } from '../controller/postController.js'

const getInitRoute =()=>{
    const router = Router();
    router.get("/productos", productosGet);
    router.get("/productos", productosPost);
        return router;
}
