import { db } from "../config/db.js";

export const modificar = async (req, res) => {
    const consulta =
        "UPDATE usuarios SET nombre = ?, email = ?, telefono = ?, direccion = ?, sexo = ?, edad = ?, peso = ?, altura = ?, actividadfisica = ?, objetivo = ? WHERE usuario=?;";
    const values = [
        req.body.nombre,
        req.body.email,
        req.body.telefono,
        req.body.direccion,
        req.body.sexo,
        req.body.edad,
        req.body.peso,
        req.body.altura,
        req.body.actividadfisica,
        req.body.objetivo,
        req.body.usuario,
    ];
    const consultaSession = "SELECT * FROM usuarios WHERE email = ?";
    const email = values[1];

    try {
        // Actualizar datos en la base de datos
        const insertarmodi = await new Promise((resolve, reject) => {
            db.query(consulta, values, (err, result) => {
                if (err) {
                    console.error("Error al insertar en la base de datos:", err);
                    reject("Error al insertar la modificacion en la base de datos");
                } else {
                    resolve(result);
                }
            });
        });

        // Consultar datos actualizados de la sesión
        const sacarsession = await new Promise((resolve, reject) => {
            db.query(consultaSession, email, (err, result) => {
                if (err) {
                    console.log("Error en la consulta:", err);
                    reject("Error en la consulta a la base de datos");
                } else {
                    resolve(result);
                }
            });
        });

        // Actualizar sesión
        req.session.usuario = sacarsession[0].usuario;
        req.session.nombre = sacarsession[0].nombre;
        req.session.email = sacarsession[0].email;
        req.session.telefono = sacarsession[0].telefono;
        req.session.direccion = sacarsession[0].direccion;
        req.session.sexo = sacarsession[0].sexo;
        req.session.edad = sacarsession[0].edad;
        req.session.peso = sacarsession[0].peso;
        req.session.altura = sacarsession[0].altura;
        req.session.actividadfisica = sacarsession[0].actividadfisica;
        req.session.objetivo = sacarsession[0].objetivo;
        req.session.numberItems = 0;

        // Enviar respuesta solo después de completar todas las operaciones
        return res.json({ Status: "success, datos modificados y sesión actualizada" });

    } catch (error) {
        console.error("Error general:", error);
        return res.status(500).json({ Error: "Error interno del servidor" });
    }
};
