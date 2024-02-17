import { CreaDieta } from "../models/rutinaModel.js";

const addAlimento = async (req, res) => {
  const producto = {
    comida: req.body.nombre,
    calorias: req.body.calorias,
    proteinas: req.body.proteinas,
    grasas: req.body.grasas,
    grasasSaturadas: req.body.grasasSaturadas,
    carbohidratos: req.body.carbohidratos,
    azucar: req.body.azucar,
    imagenUrl: req.body.imagenUrl,
    cantidad: req.body.cantidad,
    id: req.body.id,
  };
  const date = new Date();
  const dia = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

  // Determine the meal time based on the "HoraValor" value
  let mealTime;
  switch (req.body.Horavalor) {
    case "desayuno":
      mealTime = "desayuno";
      break;
    case "almuerzo":
      mealTime = "almuerzo";
      break;
    case "cena":
      mealTime = "cena";
      break;
    case "extra":
      mealTime = "extra";
      break;
  }

  try {
    let dieta = await CreaDieta.findOne({ id: producto.id });

    if (!dieta) {
      // Create a new CreaDieta document if it doesn't exist
      dieta = new CreaDieta({ id: producto.id, dias: new Map() });
      await dieta.save();// Save the new document immediately
      console.log(producto.id) 
    }

    if (!dieta.dias.get(dia)) {
      dieta.dias.set(dia, {
        fecha: new Date(dia),
        desayuno: [],
        almuerzo: [],
        cena: [],
        extra: [],
      });
    }

    dieta.dias.get(dia)[mealTime].push(producto);

    const savedDieta = await dieta.save();

    res.json(savedDieta);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }

  console.log("Producto recibido:", producto);
};

const getDieta = async (req, res) => {
  try {
    const dieta = await CreaDieta.findOne({ id: req.body.id });
    res.json(dieta);
    console.log("Dieta obtenida:", dieta);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};
export { addAlimento, getDieta };
