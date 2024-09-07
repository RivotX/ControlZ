import bcrypt from "bcrypt";
import { CreaRutina } from "../models/rutinaModel.js";
import { db } from "../config/db.js";

// /registro
const registro = async (req, res) => {

  const consulta =
    "INSERT INTO usuarios (`usuario`, `password`,`nombre`,`email` ,`telefono` ,`direccion`,`sexo`, actividadfisica, objetivo, ObjProteinas, ObjCalorias ) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
  //hasheo de la contraseña, (error,hash) es el ultimo parametro que recibe la funcion de bcrypt, llamado funcion de callback.

  const salt = 10;

  bcrypt.hash(req.body.password.toString(), salt, (error, hash) => {
    if (error) {
      return res.json({ Error: "Error al hashear la contraseña" });
    } else {
      const values = [
        req.body.usuario,
        hash,
        req.body.nombre,
        req.body.email,
        req.body.telefono,
        req.body.direccion,
        req.body.sexo,
        req.body.actividadfisica,
        req.body.objetivo,
        req.body.ObjProteinas,
        req.body.ObjCalorias,
      ];

      const rutina = new CreaRutina({
        id: req.body.usuario,
        lunes: [],
        martes: [],
        miercoles: [],
        jueves: [],
        viernes: [],
        sabado: [],
        domingo: [],
      });

      rutina.save()
        .then((resultado) => {
          console.log(resultado);
        })
        .catch((err) => {
          console.error(err);
        });

      db.query(consulta, values, (err, result) => {
        if (err) {
          console.error("Error al insertar en la base de datos:", err);
          return res
            .status(500)
            .json({ Error: "Error al insertar en la base de datos" });
        } else {
          return res.json({ Status: "success" });
        }
      });
    }
  });
};

//existe registro
const existeRegistro = async (req, res) => {

  const consultaUsuario = "SELECT * FROM usuarios WHERE usuario=?";
  const consultaEmail = "SELECT * FROM usuarios WHERE email=?";

  const usuario = req.body.usuario;
  const email = req.body.email;

  let existeUsuario = false;
  let existeEmail = false;

  function consultarDB(consulta, parametro) {
    return new Promise((resolve, reject) => {
      db.query(consulta, parametro, (err, result, campos) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  try {
    const usuarioResult = await consultarDB(consultaUsuario, usuario);
    if (usuarioResult.length > 0) {
      existeUsuario = true;
    }

    const emailResult = await consultarDB(consultaEmail, email);
    if (emailResult.length > 0) {
      existeEmail = true;
    }

    if (existeUsuario) {
      return res.status(201).json({ Status: "Existe el usuario" });
    } else if (existeEmail) {
      return res.status(201).json({ Status: "Existe el email" });
    } else {
      return res.json({ Status: "Success" });
    }
  } catch (error) {
    console.error("Error en la base de datos:", error);
    return res
      .status(500)
      .json({ Error: "Error al comprobar existencia del registro" });
  }
};

export { existeRegistro };

export { registro };
