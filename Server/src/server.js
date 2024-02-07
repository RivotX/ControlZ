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

// const CreaRutina = Mongoose.model("rutina", rutinaSchema);

app.listen(8081, () => {
  console.log("servidor corriendo...");
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

app.post("/ActualizarRutina",ActualizarRutina);

app.post("/existeregistro", existeRegistro);

app.post("/login", login);

app.post("/obtenerAlimento", async (req, res) => {
  try {
    const { userInput } = req.body;
    console.log(
      `Recibida solicitud para obtener alimento con userInput: ${userInput}`
    );
    const datosBusqueda = await obtenerInformacionProductos(userInput);
    console.log(`Información de productos obtenida:`, datosBusqueda);

    res.json(datosBusqueda);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error interno del servidor");
  }
});
