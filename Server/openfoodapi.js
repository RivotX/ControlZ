import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Función para buscar productos en Open Food Facts por nombre, devuelve producto en forma de json
function buscarProductosPorNombre(nombreProducto) {
  return fetch(
    `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${nombreProducto}&search_simple=1&action=process&json=1`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Error al realizar la búsqueda: ${response.statusText}`
        );
      }
      return response.json();
    })
    .catch((error) => {
      throw new Error(`Error de red: ${error.message}`);
    });
}

// Función para obtener información detallada de los productos
function obtenerInformacionProductos(nombreProducto) {
  return buscarProductosPorNombre(nombreProducto).then((datosBusqueda) => {
    if (datosBusqueda && "products" in datosBusqueda) {
      // Extraer los primeros 5 productos de la búsqueda
      const productos = datosBusqueda.products.slice(0, 5); //.slice(0,5) toma los 5 primeros elementos del array sin modificarlo, crea una copia

      // Mapear la información de cada producto
      const informacionProductos = productos.map((producto) => {
        // Extraer información específica de cada producto
        const nombre = producto.product_name || "Nombre no disponible";
        const calorias =
          producto.nutriments?.["energy-kcal_100g"] || "No disponible"; //las interrogaciones son para que si profucto.nutriments es null o undefined la espuesta sea undefined en vez de un error
        const proteinas =
          producto.nutriments?.["proteins_100g"] || "No disponible";
        const grasas = producto.nutriments?.["fat_100g"] || "No disponible";
        const grasasSaturadas =
          producto.nutriments?.["saturated-fat_100g"] || "No disponible";
        const carbohidratos =
          producto.nutriments?.["carbohydrates_100g"] || "No disponible";
        const azucar = producto.nutriments?.["sugars_100g"] || "No disponible";
        const imagenUrl = producto.image_url || "URL de imagen no disponible";
        const id = producto.code || "ID no disponible";

        // Devolver un objeto con la información del producto
        return {
          nombre,
          calorias,
          proteinas,
          grasas,
          grasasSaturadas,
          carbohidratos,
          azucar,
          imagenUrl,
          id,
        };
      });

      // Devolver la lista de información de productos
      return informacionProductos;
    }

    // Devolver null si no hay datos o la propiedad "products" no está presente
    return null;
  });
}

// Solicitar al usuario que ingrese el nombre del producto
rl.question("Ingrese el nombre del producto: ", (nombreProducto) => {
  obtenerInformacionProductos(nombreProducto)
    .then((informacionProductos) => {
      if (informacionProductos) {
        console.log("Información de los 5 primeros productos:");
        informacionProductos.forEach((producto, index) => {
          console.log(`Producto ${index + 1}:`);
          console.log(`Nombre: ${producto.nombre}`);
          console.log(`Calorías por 100g: ${producto.calorias} kcal`);
          console.log(`Proteínas por 100g: ${producto.proteinas} g`);
          console.log(`Grasas por 100g: ${producto.grasas} g`);
          console.log(
            `Grasas Saturadas por 100g: ${producto.grasasSaturadas} g`
          );
          console.log(`Carbohidratos por 100g: ${producto.carbohidratos} g`);
          console.log(`Azúcar por 100g: ${producto.azucar} g`);
          console.log(`URL de la imagen: ${producto.imagenUrl}`);
          console.log(`ID: ${producto.id}`);
          console.log("-------------------------");
        });
      } else {
        console.log(
          `No se encontró información de productos para ${nombreProducto}`
        );
      }
      rl.close();
    })
    .catch((error) => {
      console.error("Error:", error.message);
      rl.close();
    });
});
