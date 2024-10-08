// models/rutinaModel.js
import Mongoose from "mongoose";

const diasSchema = new Mongoose.Schema({
  nombre: String,
  series: Number,
  repeticiones: Number,
  kg: Number,
  id: Object,
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

const carritoCompraSchema = new Mongoose.Schema({
  id: String,
  productos: [
    {
      id: String,
      name: String,
      quantity: Number,
      price: Number,
      imageSrc: String,
    },
  ],
});


// Dieta schema
const DietaSchema = new Mongoose.Schema({
  id: String,
  dias: {
    type: Map,
    of: {
      fecha: Date,
      desayuno: [
        {
          comida: String,
          calorias: Number,
          proteinas: Number,
          grasas: Number,
          carbohidratos: Number,
          azucar: Number,
          imagenUrl: String,
          id: String,
          cantidad: Number,
        },
      ],
      almuerzo: [
        {
          comida: String,
          calorias: Number,
          proteinas: Number,
          grasas: Number,
          carbohidratos: Number,
          azucar: Number,
          imagenUrl: String,
          id: String,
          cantidad: Number,

        },
      ],
      cena: [
        {
          comida: String,
          calorias: Number,
          proteinas: Number,
          grasas: Number,
          carbohidratos: Number,
          azucar: Number,
          imagenUrl: String,
          id: String,
          cantidad: Number,
        },
      ],
      extra: [
        {
          comida: String,
          calorias: Number,
          proteinas: Number,
          grasas: Number,
          carbohidratos: Number,
          azucar: Number,
          imagenUrl: String,
          id: String,
          cantidad: Number,
        },
      ],
    },
  },
});

const CreaRutina = Mongoose.model("rutinas", rutinaSchema); // Changed "rutina" to "rutinas"

const CreaDieta = Mongoose.model("dieta", DietaSchema); // Created a new model for "dieta"

const creaCarritoCompra = Mongoose.model("carritoCompra", carritoCompraSchema); // Created a new model for "carritoCompra"

export { CreaRutina, CreaDieta, creaCarritoCompra }; // Export both models