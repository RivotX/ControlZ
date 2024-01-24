// models/rutinaModel.js
import Mongoose from "mongoose";

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

export { CreaRutina };
