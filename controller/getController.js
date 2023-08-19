import {getProductosAll} from '../services/getServices.js';

const productosGet = async (req,res,next)=>{
    try{
        const productos = await getProductosAll();
        res.status(200).json(productos);
    }catch(error){
    res.status(500).json(error);
}
}

export {productosGet}
