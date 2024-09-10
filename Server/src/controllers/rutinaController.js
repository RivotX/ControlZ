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

const ActualizarRutina = async (req, res) => {
  const id = req.body.id;
  const rutinaNueva = req.body.rutinaNueva;
  try {
    // Buscar la rutina del usuario por su ID
    let rutina = await CreaRutina.findOne({ id });

    if (rutina) {



      const rutinacambiar = {
        id: rutina.id,
        lunes: rutinaNueva[0],
        martes: rutinaNueva[1],
        miercoles: rutinaNueva[2],
        jueves: rutinaNueva[3],
        viernes: rutinaNueva[4],
        sabado: rutinaNueva[5],
        domingo: rutinaNueva[6],

      };

      console.log("RUTINA NUEVAAAAAA", rutinacambiar)

      // Actualizar la rutina con los nuevos datos
      rutina.set(rutinacambiar);
      await rutina.save();

      res.status(200).json({ mensaje: "Rutina actualizada exitosamente" });
    } else {
      res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error al actualizar la rutina: ", error);
    res.status(500).json({ mensaje: "Error al actualizar la rutina" });
  }
}


export { getRutina, ActualizarRutina };