// set up
import express from "express";
import cors from "cors";
import Mongoose from "mongoose";
import session from "express-session";
import { registro } from "./controllers/registroController.js";
import { existeRegistro } from "./controllers/registroController.js";
import { ActualizarRutina, getRutina } from "./controllers/rutinaController.js";
import { login } from "./controllers/loginController.js";
import { obtenerInformacionProductos } from "./controllers/obtenerAlimento.js";
import { virtualAssistant } from "./controllers/Assistant.js";
import { addAlimento, getDieta, RemoveFood } from "./controllers/DietaController.js";
import { modificar } from "./controllers/ModifyDatos.js";
import { db } from "./config/db.js";
import { addToCart, removetoCart } from "./controllers/shopcar.js";




const app = express()
app.use(express.json());
app.use(
  cors({
    origin: "https://controlz.onrender.com",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);
app.use(
  session({
    key: "tu_clave_personalizada",
    secret: "ÑLKJHGFDSAMNBVCXZPOIUYTREWQ",
    resave: true,
    saveUninitialized: true,
    proxy: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 día en milisegundos
      httpOnly: true,
      secure: true, // Establece a true si estás usando HTTPS
      sameSite: 'none'
    },
  })
);

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8081");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});




// var consultaDbCreate= "CREATE TABLE IF NOT EXISTS usuarios ( \
//   usuario VARCHAR(50), \
//   password VARCHAR(1000), \
//   nombre VARCHAR(100), \
// email VARCHAR(100), \
//   telefono VARCHAR(50), \
//   direccion VARCHAR(50), \
//   sexo TINYINT, \
//   edad INT, \
//   peso FLOAT, \
//   altura FLOAT, \
//   actividadfisica INT, \
//   objetivo INT \
// )";
// var drop= "DROP TABLE usuarios"

// db.query(consultaDbCreate, (error, results, fields) => {
// if (error) {
//   console.error('Error al ejecutar la consulta SQL:', error);
// } else {
//   console.log('Tabla Usada correctamente');
// }
// });

//Mongoose mongodb base de datos rutina

Mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log("Conexión exitosa a MongoDB");
  })
  .catch((error) => {
    console.error("Error de conexión a MongoDB:", error);
  });

app.listen(process.env.PORT, () => {
  console.log("servidor corriendo... en el puerto", process.env.PORT);
});

//Asistente virtual

app.post("/assistant", async (req, res) => {
  const { question } = req.body;
  console.log(`Recibida pregunta: ${question}`);
  const answer = await virtualAssistant(question);
  console.log(`Respuesta generada: ${answer}`);
  res.json({ answer });
});

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

app.get("/getSession", (req, res) => {
  console.log(req.session);

  res.json(req.session);
});
app.use("/getrutina", getRutina);

app.post("/saveRutina", async (req, res) => {
  const { user, lunes, martes, miercoles, jueves, viernes, sabado, domingo } =
    req.body;
});

app.post("/registro", registro);


app.post("/modificar", modificar);

app.post("/ActualizarRutina", ActualizarRutina);

app.post("/addToCart", addToCart);

app.post("/removeToCart", removetoCart);


app.post("/existeregistro", existeRegistro);

app.post("/login", login);



app.post("/obtenerAlimento", async (req, res) => {
  try {
    const { userInput } = req.body;
    const offset = req.body.offset || 0;
    console.log(
      `Recibida solicitud para obtener alimento con userInput: ${userInput}`
    );
    const datosBusqueda = await obtenerInformacionProductos(userInput, offset);
    console.log(`Información de productos obtenida:`, datosBusqueda);

    res.json(datosBusqueda);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
});

app.post("/AddAlimento", addAlimento);

app.post("/getDieta", getDieta);
app.post("/RemoveFood", RemoveFood);

app.listen(8081, () => {
  console.log("Servidor corriendo en el puerto 8081");
});

