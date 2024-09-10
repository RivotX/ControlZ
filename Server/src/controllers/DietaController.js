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
    Fecha: req.body.Fecha
  };
  const dia = producto.Fecha;

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
    if (!req.body.id) {
      console.log("ID is required")
      return res.status(400).json({ error: 'ID is required' });

    }
    if (!dieta) {
      // Create a new CreaDieta document if it doesn't exist
      dieta = new CreaDieta({ id: producto.id, dias: new Map() });
      await dieta.save();// Save the new document immediately
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
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
};

const RemoveFood = async (req, res) => {
  console.log("Producto a eliminar BACK:", req.body);
  const { id, Horavalor, comida, Fecha } = req.body; // Ensure Fecha is extracted here
  console.log("zFecha: ", Fecha)
  try {
    console.log("Buscando dieta con id:", id);
    let dieta = await CreaDieta.findOne({ id });
    if (!dieta) {
      console.log("Dieta no encontrada");
      return res.status(404).json({ error: 'Dieta not found' });
    }

    console.log("Dieta encontrada:", dieta);
    console.log("Estructura de dieta.dias:", dieta.dias);

    // Ensure the date format matches the format used in the `dias` map
    const formattedFecha = new Date(Fecha).toISOString().split('T')[0];
    console.log("Fecha formateada:", formattedFecha);

    const dia = dieta.dias.get(formattedFecha);
    if (!dia) {
      console.log("Día no encontrado:", formattedFecha);
      console.log("Fechas disponibles en dieta.dias:", Array.from(dieta.dias.keys()));
      return res.status(404).json({ error: 'Day not found' });
    }

    console.log("Día encontrado:", dia);
    let mealTime;
    switch (Horavalor) {
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
      default:
        console.log("Hora de comida no válida:", Horavalor);
        return res.status(400).json({ error: 'Invalid meal time' });
    }

    console.log("Hora de comida:", mealTime);
    const mealArray = dia[mealTime];
    if (!mealArray) {
      console.log("Array de comida no encontrado para:", mealTime);
      return res.status(404).json({ error: 'Meal array not found' });
    }

    const index = mealArray.findIndex(item => item.comida === comida);
    if (index === -1) {
      console.log("Elemento de comida no encontrado:", comida);
      return res.status(404).json({ error: 'Food item not found' });
    }

    console.log("Elemento de comida encontrado en el índice:", index);
    mealArray.splice(index, 1);

    console.log("Elemento de comida eliminado, guardando dieta...");
    const savedDieta = await dieta.save();

    console.log("Dieta guardada:", savedDieta);
    res.json(savedDieta);
  } catch (error) {
    console.log("Error al eliminar el producto:", error);
    res.status(500).json({ error: error.toString() });
  }

  console.log("Producto eliminado:", comida);
};

export { addAlimento, getDieta, RemoveFood };