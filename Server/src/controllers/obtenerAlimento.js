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
      const roundedValue = Math.round(value * 10) / 10;
      return Number.isInteger(roundedValue) ? roundedValue.toFixed(0) : roundedValue.toFixed(1);
    } else {
      return value;
    }
  }

  let attempts = 0;
  const maxAttempts = 1;
  let informacionProductos = [];
  try {
    while (informacionProductos.length < 6 && attempts < maxAttempts) {
      attempts++;
      console.log(`Attempt ${attempts}: Fetching products with offset ${offset}`);
      const datosBusqueda = await buscarProductosPorNombre(nombreProducto);

      if (datosBusqueda && "products" in datosBusqueda) {
        if (datosBusqueda.products.length <= offset) {
          console.log('No more products available for the given offset');
          break; // si no hay mas productos para hacer fetch, sale del loop
        }
        const productos = datosBusqueda.products.slice(offset, offset + 6);
        offset += productos.length; // Actualiza el offset antes de filtrar

        const newProducts = productos.map((producto) => {
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
        }).filter((producto) => {
          return producto.nombre !== "Nombre no disponible" && producto.calorias !== "No disponible" && producto.proteinas !== "No disponible";
        });

        informacionProductos = [...informacionProductos, ...newProducts];
      } else {
        console.log('No products found in the search results');
        break;
      }
    }

    console.log('Final productos:', informacionProductos);
    return informacionProductos.slice(0, 6);
  } catch (error) {
    console.error(`Error al obtener información de productos: ${error.message}`);
    throw new Error(`Error al obtener información de productos: ${error.message}`);
  }
}

export { obtenerInformacionProductos, buscarProductosPorNombre };