import pymongo
from itertools import chain, combinations, permutations

def realizar_consulta(valor_regex):
    # Establecer la conexión con la base de datos
    cliente = pymongo.MongoClient("mongodb://localhost:27017")
    base_de_datos = cliente["openfood"]
    coleccion = base_de_datos["food"]

    # Crear un índice en el campo "product_name"
    # coleccion.create_index([("product_name", pymongo.TEXT)]) //borrar probablemente

    # Dividir las palabras ingresadas por el usuario El, La, Los, Las, Un, Una, Unos, Unas, del, de la, de los, de el
    todas_palabras = valor_regex.split()
    # Lista de palabras no deseadas en minúsculas
    palabras_no_deseadas = ["el", "la", "los", "las", "un", "una", "unos", "unas", "del", "de la", "de los", "de el", "al", "con", "por", "de"]

    # Filtrar las palabras no deseadas sin ser sensible a mayúsculas o minúsculas
    palabras = [palabra for palabra in todas_palabras if palabra.lower() not in palabras_no_deseadas]

    # Función para generar combinaciones de subconjuntos de una lista con el número original y el número - 1 de palabras
    def powerset(iterable):
        s = list(iterable)
        if len(s) >= 4:
            return chain.from_iterable(combinations(s, r) for r in range(1, len(s) + 1) if r == len(s) or r == len(s) - 1)
        else:
            return [s]

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
    resultados = coleccion.find(consulta, proyeccion)

    # Imprimir resultados
    suma = 0
    for resultado in resultados:
        print(resultado)
        suma += 1

    print("-------------------------------------------------------------")
    print(f"query para nombre = {regex_query}\n({len(todas_combinaciones)} queries)\nse han encontrado {suma} resultados")

# Obtener el valor del regex del usuario
regex_del_usuario = input("Ingrese el valor para la consulta $regex: ")

realizar_consulta(regex_del_usuario)
