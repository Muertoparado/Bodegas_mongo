import {con} from "../db/atlas.js";

class Productos {
  id;
  nombre;
  descripcion;
  estado;

  constructor() {}
  async connect() {
    try {
      const db = await con();
      const result = db.collection("producto")
      return result;
    } catch (error) {
      throw error;
    }
  }
  async agregarProductos() {
    try {
      const con = await this.connectconnect();
      const resultado = await con.insertOne({
        id: this.id,
        nombre: this.nombre,
        descripcion: this.descripcion,
        estado: this.estado,
        created_by: this.created_by,
        created_at: new Date(),
        updated_at: null,
        deleted_at: null,
      });
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}

export { Productos };