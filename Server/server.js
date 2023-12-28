// set up
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bcrypt from 'bcrypt';
const salt = 10;

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "controlz",
});

app.listen(8081, () => {
  console.log("servidor corriendo...");
});

// Endpoint /registro 
app.post('/registro', (req, res) => {
  const consulta = "INSERT INTO usuarios (`usuario`, `password`,`nombre`,`email` ,`telefono` ,`direccion` ) VALUES (?,?,?,?,?,?)";
  //hasheo de la contraseña, (error,hash) es el ultimo parametro que recibe la funcion de bcrypt, llamado funcion de callback.
  bcrypt.hash(req.body.password.toString(), salt, (error, hash) => {
    if (error) {
      return res.json({ Error: "error for hashing password" })
    } else {
      const values = [
        req.body.usuario,
        hash,
        req.body.nombre,
        req.body.email,
        req.body.telefono,
        req.body.direccion,
        // req.body.sexo       
      ]
      db.query(consulta, values, (err, result) => {
        if (err) {
          console.error("Error al insertar en la base de datos:", err);
          return res.status(500).json({ Error: "Error al insertar en la base de datos =====" });
        } else {
          return res.json({ Status: "success" });
        }
      });
    }
  })
})

// Endpoint /login 
app.post('/login', async (req, res) => {
  const consulta = 'SELECT password FROM usuarios WHERE usuario = ?';
  const values = [req.body.usuario, req.body.password];

  try {
    const promesaDB = await new Promise((resolve, reject) => {
      db.query(consulta, values[0], (err, result) => {
        if (err) {
          console.log("Error en la consulta:", err);
          reject("Error en la consulta a la base de datos");
        } else {
          resolve(result);
        }
      });
    });
    console.log("Valor de promesaDB:", promesaDB); // Agregar esta línea para imprimir promesaDB

    if (promesaDB.length > 0) {
      const passwordFromDB = promesaDB[0].password;
      const IsCorrect = await bcrypt.compare(values[1], passwordFromDB);

      console.log("IsCorrect:", IsCorrect);            
      return res.json(IsCorrect ? { Status: "success", redirectTo: "/gym" } : { Error: "Contraseña incorrecta" }); //le paso la url al cliente
    } else {
      return res.json({ Error: "No existe el usuario" });
    }
  } catch (error) {
    console.error("Error general:", error);
    return res.status(500).json({ Error: "Error interno del servidor" });
  }
});

// Endpoint ExisteUsuario (vaamo yeison vamo jason)


