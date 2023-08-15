import connection from "../db/atlas.js";

class productos {
  id;
  nombre;
  descripcion;
  estado;
  created_by;

  constructor() {}
  async con() {
    try {
      const result = await connection("productos");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async agregarProductos() {
    try {
      const connection = await this.con();
      const resultado = await connection.insertOne({
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

export { productos };