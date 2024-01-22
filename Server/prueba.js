import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  product_name: String,
  image_url: String,
  "energy-kcal_100g": Number,
  proteins_100g: Number,
  fat_100g: Number,
  "saturated-fat_100g": Number,
  carbohydrates_100g: Number,
  sugars_100g: Number,
});

const Food = mongoose.model("food", foodSchema);

async function realizarConsulta() {
  const consulta = { product_name: { $regex: "pollo", $options: "i" } };

  try {
    await mongoose.connect("mongodb://localhost:27017/openfood");

    console.log(
      "Conexión exitosa a MongoDB. Conectado a:",
      mongoose.connection.name
    );
    console.log("Realizando consulta...");

    // const resultados = await Food.find({
    //   product_name: { $regex: "pollo", $options: "i" },
    // });

    const resultados = await Food.find(consulta).catch((error) => {
      console.error("Error al realizar la consulta:", error);
    });
    console.log(resultados);

    const resultadosTodos = await Food.find({}).exec();
    console.log(resultadosTodos);

    if (resultados.length > 0) {
      resultados.forEach((resultado) => {
        console.log(resultado);
      });
    } else {
      console.log("No se encontraron resultados para la consulta.");
    }

    console.log(
      "-------------------------------------------------------------"
    );
  } catch (error) {
    console.error("Error al realizar la consulta:", error);
    console.error(error.stack);
  } finally {
    mongoose.disconnect(); // Cierra la conexión después de realizar la consulta
    console.log("conexion cerrada")
  }
}
realizarConsulta();
