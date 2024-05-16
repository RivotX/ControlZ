// config/db.js
import mysql from "mysql";
import Mongoose from "mongoose";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "controlz",
});

const connectMongoDB = async () => {
  try {
    await Mongoose.connect("mongodb://127.0.0.1:27017/rutina");
    console.log("Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("Error de conexión a MongoDB:", error);
  }
};

export { db, connectMongoDB };
