import pymongo
from itertools import chain, combinations, permutations
from flask import Flask, request, jsonify
from flask_cors import CORS  # Importa la extensión CORS

app = Flask(__name__)
CORS(app)

# Conexión a MongoDB
cliente = pymongo.MongoClient("mongodb://localhost:27017")
base_de_datos = cliente["openfood"]
coleccion = base_de_datos["food"]

# Crear un índice en el campo "product_name"
# coleccion.create_index([("product_name", pymongo.TEXT)])  # Puedes considerar agregar el índice según tus necesidades


def powerset(iterable):
    s = list(iterable)
    if len(s) >= 4:
        return chain.from_iterable(combinations(s, r) for r in range(1, len(s) + 1) if r == len(s) or r == len(s) - 1)
    else:
        return [s]


@app.route('/api/consultar_comidas', methods=['POST'])
def consultar_comidas():
    try:
        valor_regex = request.json['valor_regex']

        # Dividir las palabras ingresadas por el usuario
        todas_palabras = valor_regex.split()

        # Lista de palabras no deseadas en minúsculas
        palabras_no_deseadas = ["el", "la", "los", "las", "un", "una", "unos", "unas", "del", "de la", "de los", "de el", "al", "con", "por", "de"]

        # Filtrar las palabras no deseadas sin ser sensible a mayúsculas o minúsculas
        palabras = [palabra for palabra in todas_palabras if palabra.lower() not in palabras_no_deseadas]

        # Obtener todas las combinaciones de subconjuntos de palabras
        todas_combinaciones = list(powerset(palabras))

        # Realizar permutaciones para cada combinación
        todas_combinaciones = [permutations(comb) for comb in todas_combinaciones]
        todas_combinaciones = list(chain.from_iterable(todas_combinaciones))

        # Construir la expresión regular para todas las combinaciones
        regex_queries = [".*" + ".*".join(comb) + ".*" for comb in todas_combinaciones]
        regex_query = "|".join(regex_queries)

        # Construir la consulta con regex
        consulta = {"product_name": {"$regex": regex_query, "$options": "i"}}

        # Construir la proyección
        proyeccion = {
            "product_name": 1,
            "image_url": 1,
            "energy-kcal_100g": 1,
            "proteins_100g": 1,
            "fat_100g": 1,
            "saturated-fat_100g": 1,
            "carbohydrates_100g": 1,
            "sugars_100g": 1,
            "_id": 0
        }

        # Ejecutar la consulta con proyección
        resultados = list(coleccion.find(consulta, proyeccion))

        # Construir la respuesta en formato JSON
        response = {"resultados": resultados}
        return jsonify(response)

    except Exception as e:
        print(f"Error en la consulta: {e}")
        return jsonify({"error": "Error en la consulta"})


if __name__ == '__main__':
    app.run(debug=True, port=5000)
