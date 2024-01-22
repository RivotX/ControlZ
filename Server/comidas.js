import readline from 'readline';
import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017')
    .then(() => {
        console.log("Conexión exitosa a MongoDB");
        startConsoleInterface();
    })
    .catch((error) => {
        console.error("Error de conexión a MongoDB:", error);
    });


// Define el esquema del modelo
const foodSchema = new mongoose.Schema({
    product_name: String,
    image_url: String,
    "energy-kcal_100g": Number,
    proteins_100g: Number,
    fat_100g: Number,
    "saturated-fat_100g": Number,
    carbohydrates_100g: Number,
    sugars_100g: Number
});

// Crea el modelo a partir del esquema
const Food = mongoose.model('food', foodSchema);

function powerset(iterable) {
    const s = [...iterable];
    const result = [];
    for (let r = 1; r <= s.length; r++) {
        const combinations = combinationsOfLength(s, r);
        result.push(...combinations);
    }
    return result;
}
function* combinationsOfLength(arr, length) {
    for (let i = 0; i < arr.length; i++) {
        if (length === 1) {
            yield [arr[i]];
        } else {
            const remaining = arr.slice(i + 1);
            for (const combo of combinationsOfLength(remaining, length - 1)) {
                yield [arr[i], ...combo];
            }
        }
    }
}
function permutations(arr) {
    if (arr.length <= 1) {
        return [arr];
    }

    const result = [];
    for (let i = 0; i < arr.length; i++) {
        const rest = [...arr.slice(0, i), ...arr.slice(i + 1)];
        const permutationsOfRest = permutations(rest);
        for (const perm of permutationsOfRest) {
            result.push([arr[i], ...perm]);
        }
    }

    return result;
}


async function realizarConsulta() {
    const consulta = { "product_name": { "$regex": "pollo", "$options": "i" } };

    const proyeccion = {
        "product_name": 1,
        "image_url": 1,
        "energy-kcal_100g": 1,
        "proteins_100g": 1,
        "fat_100g": 1,
        "saturated-fat_100g": 1,
        "carbohydrates_100g": 1,
        "sugars_100g": 1,
        "_id": 0
    };

    try {
        console.log("Realizando consulta...");

        const resultados = await Food.find(consulta, proyeccion);

        let suma = 0;
        resultados.forEach(resultado => {
            console.log(resultado);
            suma++;
        });

        console.log("-------------------------------------------------------------");
        console.log(`query para nombre = \nse han encontrado ${suma} resultados`);
    } catch (error) {
        console.error("Error al realizar la consulta:", error);
        console.error(error.stack);
    }
}
realizarConsulta();



// async function realizarConsulta(valorRegex) {

//     const todasPalabras = valorRegex.split(/\s+/);

//     const palabrasNoDeseadas = ["el", "la", "los", "las", "un", "una", "unos", "unas", "del", "de la", "de los", "de el", "al", "con", "por", "de"];
//     const palabras = todasPalabras.filter(palabra => !palabrasNoDeseadas.includes(palabra.toLowerCase()));

//     const todasCombinaciones = powerset(palabras);
//     const todasPermutaciones = permutations(palabras);

//     const regexQueries = todasPermutaciones.map(permutacion => `.*${permutacion.join('.*')}.*`);
//     const regexQuery = regexQueries.join("|");

//     const consulta = { "product_name": { "$regex": regexQuery, "$options": "i" } };

//     console.log("palabras: ", palabras)
//     console.log("todasCombinaciones: ", todasCombinaciones)

//     // Mostrar la consulta antes de ejecutarla
//     console.log("Consulta MongoDB:", JSON.stringify(consulta));

//     const proyeccion = {
//         "product_name": 1,
//         "image_url": 1,
//         "energy-kcal_100g": 1,
//         "proteins_100g": 1,
//         "fat_100g": 1,
//         "saturated-fat_100g": 1,
//         "carbohydrates_100g": 1,
//         "sugars_100g": 1,
//         "_id": 0
//     };

//     try {
//         const resultados = await Food.find(consulta, proyeccion);

//         let suma = 0;
//         resultados.forEach(resultado => {
//             console.log(resultado);
//             suma++;
//         });

//         console.log("-------------------------------------------------------------");
//         console.log(`query para nombre = ${regexQuery}\n(${todasPermutaciones.length} queries)\nse han encontrado ${suma} resultados`);
//     } catch (error) {
//         console.error("Error al realizar la consulta:", error);
//         console.error(error.stack);
//     }
// }

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function startConsoleInterface() {
    // Utilizar readline para obtener la entrada del usuario
    rl.question("Ingrese el valor para la consulta $regex: ", (regexDelUsuario) => {
        realizarConsulta(regexDelUsuario);
        rl.close();
    });
}
