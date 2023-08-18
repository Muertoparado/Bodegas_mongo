import { Productos } from "../collection/productos";

const agregarProductos = async (nombre, descripcion, estado, created_by) => {
    const producto = new Productos();
    producto.nombre = nombre;
    producto.descripcion = descripcion;
    producto.estado = estado;
    producto.created_by = created_by;
    const { insertedId } = await producto.agregarProductos();
   // const inventario = await agregarInventario(insertedId, created_by);
   // if (inventario.insertedId) {
   //   return `El producto ${insertedId} fue agregado correctamente a la bodega 10 con inventario ${inventario.insertedId}`;
   // }
};

export {agregarProductos};