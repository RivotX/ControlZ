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

app.post('/', (req, res) => {

  const sql = "INSERT INTO usuarios (`usuario`, `password`,`nombre`,`email` ,`telefono` ,`direccion` ) VALUES (?,?,?,?,?,?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
      if (err) {
          return res.json({ Error: "error for hashing password" })
      }

      const values = [
          req.body.usuario,
          hash,
          req.body.nombre,
          req.body.email,
          req.body.telefono,
          req.body.direccion,
          // req.body.sexo       
      ]

      db.query(sql, values, (err, result) => {
          if (err) {
              console.error("Error al insertar en la base de datos:", err);
              return res.status(500).json({ Error: "Error al insertar en la base de datos =====" });
          }
          return res.json({ Status: "success" });
      });
  })

})
