import e from "express";
import { creaCarritoCompra } from "../models/rutinaModel.js";

const addToCart = async (req, res) => {
    try {
        const { producto } = req.body;
        if (!producto) {
            console.log("Producto no definido en la solicitud");
            return res.json({ mensaje: "Producto no definido en la solicitud" });
        }
        console.log(`Recibida solicitud para agregar producto al carrito:`, producto);

        const usercar = await creaCarritoCompra.findOne({ id: req.session.usuario });

        if (!usercar) {
            console.log("No se encontró el carrito de compras del usuario");
            return res.json({ mensaje: "No se encontró el carrito de compras del usuario" });
        } else {
            console.log("Carrito encontrado:", usercar);
            if (usercar.productos.length > 0) {
                // Filtrar productos nulos
                usercar.productos = usercar.productos.filter(p => p !== null);
                const productoIndex = usercar.productos.findIndex((p) => p.name === producto.name);
                console.log("Producto index ENTRA AQUI QUE TIENE LENGHT MAYOR QUE 0", productoIndex);
                if (productoIndex !== -1) { // Si el producto ya está en el carrito, se suma la cantidad
                    usercar.productos[productoIndex].quantity += producto.quantity;
                } else {
                    usercar.productos.push(producto);
                }
            } else {
                usercar.productos.push(producto);
            }

            await usercar.save();

            req.session.carrito = usercar.productos;

            console.log(`Carrito actualizado:`, req.session.carrito);

            return res.json(req.session); // Asegúrate de que solo se envíe una respuesta
        }
    } catch (error) {
        console.error("Error al agregar producto al carrito:", error);
        if (!res.headersSent) {
            return res.status(500).json({ mensaje: "Error interno del servidor" });
        }
    }
};

const removetoCart = async (req, res) => {

    try {

        const { producto } = req.body;
        if (!producto) {
            console.log("Producto no definido en la solicitud");
            return res.json({ mensaje: "Producto no definido en la solicitud" });
        }
        console.log(`Recibida solicitud para remover producto del carrito:`, producto);

        const usercar = await creaCarritoCompra.findOne({ id: req.session.usuario });

        if (!usercar) {

            console.log("No se encontró el carrito de compras del usuario");
            return res.json({ mensaje: "No se encontró el carrito de compras del usuario" });
        }else{
        console.log("Carrito encontrado:", usercar);

        if (usercar.productos.length > 0) {

            // Filtrar productos nulos
            usercar.productos = usercar.productos.filter(p => p !== null);
            const productoIndex = usercar.productos.findIndex((p) => p.name === producto.name);
            console.log("Producto index", productoIndex);
            if (productoIndex !== -1) {
                usercar.productos[productoIndex].quantity -= producto.quantity;
                if (usercar.productos[productoIndex].quantity <= 0) {
                    usercar.productos.splice(productoIndex, 1);
                }
            }
        }

        await usercar.save();

        req.session.carrito = usercar.productos;

        console.log(`Carrito actualizado:`, req.session.carrito);

        return res.json(req.session); // Asegúrate de que solo se envíe una respuesta
        
        }
    }
    catch (error) {
        console.error("Error al remover producto del carrito:", error);
        if (!res.headersSent) {
            return res.status(500).json({ mensaje: "Error interno del servidor" });
        }
    }
}



export { addToCart, removetoCart };