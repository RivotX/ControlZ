async function buscarProductosPorNombre(nombreProducto) {
  try {
    const response = await fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${nombreProducto}&search_simple=1&action=process&json=1`
    );

    if (!response.ok) {
      throw new Error(`Error al realizar la búsqueda: ${response.statusText}`);
    }

    return response.json();
  } catch (error) {
    throw new Error(`Error de red: ${error.message}`);
  }
}

async function obtenerInformacionProductos(nombreProducto, offset) {

  function formatNumber(value) {
    if (typeof value === 'number') {
      const roundedValue = Math.round(value * 10) / 10; //ponemos a value con 1 decimal siempre (5.0 sigue siendo int)
      return Number.isInteger(roundedValue) ? roundedValue.toFixed(0) : roundedValue.toFixed(1); //si es entero se muestra sin decimales, si no, muestra un decimal
    } else {
      return value; // Si el valor no es un número, devolvemos tal cual
    }
  }

  try {
    const datosBusqueda = await buscarProductosPorNombre(nombreProducto);

    if (datosBusqueda && "products" in datosBusqueda) {
      const productos = datosBusqueda.products.slice(offset, offset + 5);


      const informacionProductos = productos.map((producto) => {
        const nombre = producto.product_name || "Nombre no disponible";
        const calorias = formatNumber(producto.nutriments?.["energy-kcal_100g"]) || "No disponible";
        const proteinas = formatNumber(producto.nutriments?.["proteins_100g"]) || "No disponible";
        const grasas = formatNumber(producto.nutriments?.["fat_100g"]) || "No disponible";
        const grasasSaturadas = formatNumber(producto.nutriments?.["saturated-fat_100g"]) || "No disponible";
        const carbohidratos = formatNumber(producto.nutriments?.["carbohydrates_100g"]) || "No disponible";
        const azucar = formatNumber(producto.nutriments?.["sugars_100g"]) || "No disponible";
        const imagenUrl = producto.image_url || "URL de imagen no disponible";
        const id = producto.code || "ID no disponible";

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


      return informacionProductos;
    }

    return null;
  } catch (error) {
    throw new Error(`Error de red: ${error.message}`);
  }
}

export { obtenerInformacionProductos, buscarProductosPorNombre };
