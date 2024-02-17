// controllers/authController.js
import bcrypt from "bcrypt";
import { db } from "../config/db.js";

const login = async (req, res) => {
  const consulta = "SELECT * FROM usuarios WHERE usuario = ?";
  const values = [req.body.usuario];

  try {
    const result = await new Promise((resolve, reject) => {
      db.query(consulta, values, (err, result) => {
        if (err) {
          console.log("Error en la consulta:", err);
          reject("Error en la consulta a la base de datos");
        } else {
          resolve(result);
        }
      });
    });

    if (result.length > 0) {
      const passwordFromDB = result[0].password;
      const IsCorrect = await bcrypt.compare(req.body.password, passwordFromDB);

      if (IsCorrect) {
        req.session.usuario = result[0].usuario;
        req.session.nombre = result[0].nombre;
        req.session.email = result[0].email;
        req.session.telefono = result[0].telefono;
        req.session.direccion = result[0].direccion;
        req.session.sexo = result[0].sexo;
        req.session.numberItems = 0;

        console.log(req.session);
        return res.send({ status: "correcto", redirectTo: "/principal" });
      } else {
        return res.json({ Error: "Contraseña incorrecta" });
      }
    } else {
      return res.status(201).json({ Error: "No existe el usuario" });
    }
  } catch (error) {
    console.error("Error general:", error);
    return res.status(500).json({ Error: "Error interno del servidor" });
  }
};

export { login };
