import { Productos } from "../collection/productos.js";

const agregarProductos = async (id, nombre, descripcion, estado, created_by) => {
    const producto = new Productos();
    producto.id= id;
    producto.nombre = nombre;
    producto.descripcion = descripcion;
    producto.estado = estado;
    producto.created_by = created_by;
    const result = await producto.insertOne(producto);
   // const inventario = await agregarInventario(insertedId, created_by);
   // if (inventario.insertedId) {
   //   return `El producto ${insertedId} fue agregado correctamente a la bodega 10 con inventario ${inventario.insertedId}`;
   // }
   return result;
};

export {agregarProductos};      