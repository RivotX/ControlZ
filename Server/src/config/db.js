// config/db.js
import mysql from "mysql";
import Mongoose from "mongoose";

const db = mysql.createConnection({
  host: "fr4.riotnodes.co.uk",
  port: 3306,
  user: "u276_UrL3zRx649",
  password: "=gLxPRUrTIC=BegwC8y9rGtD",
  database: "s276_controlz",
});

const uri = process.env.DB_URI;
const connectMongoDB = async () => {
  try {
    await Mongoose.connect(uri);
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error de conexión a MongoDB:", error);
  }
};

export { db, connectMongoDB };
