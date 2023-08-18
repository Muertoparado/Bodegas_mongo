import {agregarProductos} from '../services/postServices.js'

const agregarProductos = async (req, res, next) => {
    try {
      const { nombre, descripcion, estado, creador } = req.body;
      const producto = await agregarProductos(
        nombre,
        descripcion,
        estado,
        creador
      );
      res.status(200).json(producto);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };