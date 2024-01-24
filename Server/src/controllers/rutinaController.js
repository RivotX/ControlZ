// controllers/rutinaController.js
import { CreaRutina } from "../models/rutinaModel.js";

const getRutina = async (req, res) => {
  const user = req.body.usuario;

  try {
    const datos = await CreaRutina.find({ id: user });
    console.log(datos);
    res.json(datos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "Error al obtener datos" });
  }
};

export { getRutina };
