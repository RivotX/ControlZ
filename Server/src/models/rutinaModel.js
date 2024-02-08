// models/rutinaModel.js
import Mongoose from "mongoose";

const diasSchema = new Mongoose.Schema({
  
    id: Number,
    nombre:String, 
    series: Number,
    repeticiones: Number,
    kg:Number,
    id:Object
  
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
