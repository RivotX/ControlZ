// set up
import express from "express";
import mysql from "mysql";
import cors from "cors";
import bcrypt from "bcrypt";
import Mongoose from "mongoose";
import session from "express-session";

//hash para contraseña
const salt = 10;

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(
  session({
    key: "tu_clave_personalizada",
    secret: "secreto",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 día en milisegundos
      httpOnly: true,
      secure: false, // Establece a true si estás usando HTTPS
    },
    resave: true,
    saveUninitialized: true,
  })
);

//Mongoose mongodb base de datos rutina

Mongoose.connect("mongodb://127.0.0.1:27017/rutina")
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
  })
  .catch((error) => {
    console.error("Error de conexión a MongoDB:", error);
  });

const mongodb = Mongoose.connection;

const diasSchema = new Mongoose.Schema({
  ejercicio: {
    id: Number,
    series: Number,
    repeticiones: Number,
  },
});

const rutinaSchema = new Mongoose.Schema({
  id: String,
  lunes: [diasSchema],
  martes: [diasSchema],
  miercoles: [diasSchema],
  jueves: [diasSchema],
  viernes: [diasSchema],
  sabado: [diasSchema],
  domingo: [diasSchema],
});

const CreaRutina = Mongoose.model("rutina", rutinaSchema);

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "controlz",
});

app.listen(8081, () => {
  console.log("servidor corriendo...");
});

//Endpoint /logout

app.get("/logout", (req, res) => {
  // Destruir la sesión actual

  req.session.destroy((err) => {
    if (err) {
      console.error("Error al cerrar sesión:", err);
    } else {
      console.log("Sesión cerrada exitosamente");
    }
  });
});

//Endpoint /getSession

app.get("/getSession", (req, res) => {
  console.log(req.session);

  res.json(req.session);
});


// Endpoint /registro

app.post("/registro", (req, res) => {
  const consulta =
    "INSERT INTO usuarios (`usuario`, `password`,`nombre`,`email` ,`telefono` ,`direccion` ) VALUES (?,?,?,?,?,?)";
  //hasheo de la contraseña, (error,hash) es el ultimo parametro que recibe la funcion de bcrypt, llamado funcion de callback.
  bcrypt.hash(req.body.password.toString(), salt, (error, hash) => {
    if (error) {
      return res.json({ Error: "error for hashing password" });
    } else {
      const values = [
        req.body.usuario,
        hash,
        req.body.nombre,
        req.body.email,
        req.body.telefono,
        req.body.direccion,
        // req.body.sexo
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

      rutina
        .save()
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
            .json({ Error: "Error al insertar en la base de datos =====" });
        } else {
          return res.json({ Status: "success" });
        }
      });
    }
  });
});

//Endpoint / ExisteRegistro
app.post("/existeregistro", async (req, res) => {
  const consultaUsuario = "SELECT * FROM USUARIOS WHERE USUARIO=?";
  const consultaEmail = "SELECT * FROM USUARIOS WHERE EMAIL=?";

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
});

//SESSION Y LOGIN MEJORADO --las sessiones inician al logearse¡¡¡¡
app.post("/login", async (req, res) => {
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
});
