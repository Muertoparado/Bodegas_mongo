import {Productos} from '../collection/productos.js';

const getProductosAll= async ()=>{
    const productos= new Productos();
    return await productos.getProductosAll();
}

export {getProductosAll}