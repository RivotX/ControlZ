import jsonlines
import os

# Ruta del archivo de entrada y salida
input_file_path = os.path.join(os.path.expanduser("~"), "Desktop", "openfoodfacts-products.jsonl")
output_file_path = os.path.join(os.path.expanduser("~"), "Desktop", "openfoodfacts-products-updated.jsonl")

# Campos que deseas conservar
fields_to_keep = ["product_name", "image_url", "energy-kcal_100g", "proteins_100g", "fat_100g", "saturated-fat_100g", "carbohydrates_100g", "sugars_100g", "_id"]

# Procesar el archivo JSONL
with jsonlines.open(input_file_path) as reader, jsonlines.open(output_file_path, mode='w') as writer:
    for obj in reader:
        # Mantener solo los campos especificados
        filtered_obj = {key: obj.get(key, None) for key in fields_to_keep}
        writer.write(filtered_obj)

print("Proceso completado. Los datos filtrados se han guardado en", output_file_path)
