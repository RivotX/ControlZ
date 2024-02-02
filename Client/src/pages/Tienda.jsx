import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Producto from "../components/Producto";
import ProductoModal from "../components/ProductoModal";
import proteinaPolvo from "../img/proteinaPolvo.png"
import barraProteina from "../img/barraProteina.png"
import CarritoCompra from "../components/CarritoCompra";
import { useState, useEffect } from "react";

function Tienda() {

  const existingLink = document.querySelector('link[href="/src/styles/TiendaTailwind.css"]');
  if (window.location.pathname === '/tienda') {
    if (!existingLink) {

      const head = document.head;
      const link = document.createElement('link');

      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = '/src/styles/TiendaTailwind.css'; // Ruta a tu archivo CSS de Tailwind

      head.appendChild(link);
    }
  }

  const [ModalAbierto, setModalAbierto] = useState(false);
  const [ProductoSeleccionado, setProductoSeleccionado] = useState(null);

  const AbrirModal = (product) => {
    setProductoSeleccionado(product);
    setModalAbierto(true);
  };

  const CerrarModal = () => {
    setProductoSeleccionado(null);
    setModalAbierto(false);
  };

  const CerrarModalEsc = (event) => {
    if (event.key === "Escape") {
      CerrarModal();
    }
  };
  useEffect(() => {
    if (ModalAbierto) {
      // Si el modal está abierto, añadir el event listener al montar el componente
      document.addEventListener("keydown", CerrarModalEsc);
    }
    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener("keydown", CerrarModalEsc);
    };
  }, [ModalAbierto]);

  console.log("ola");

  return (
    <>
      <div className="tw-min-h-screen tw-pt-16 tw-bg-gradient-to-b tw-from-gray-700 tw-via-gray-900 tw-via-20% tw-to-black tw-to-50%" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont' }}>
        <Navbar linkHome={"gym"} />

        <div className="p-2 tw-flex tw-flex-wrap tw-gap-4 tw-mt-1 tw-justify-center sm:tw-mx-4"> {/* tw-grid md:tw-grid-cols-3 xl:tw-grid-cols-4*/}

          <Producto img={proteinaPolvo} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
            nombre={"Proteina en polvo"} descripcion={"Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger"} precio={"20€"} precioScam={"25€"} descuento={"20%"}

          />
          <Producto img={barraProteina} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "El sabor de esta increible barrita proteica hará que te cagues en los pantalones",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: barraProteina
          })}
            nombre={"Barrita de Proteina"} descripcion={"El sabor de esta increible barrita proteica hará que te cagues en los pantalones"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={proteinaPolvo} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
            nombre={"Proteina en polvo"} descripcion={"Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={barraProteina} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "El sabor de esta increible barrita proteica hará que te cagues en los pantalones",
            precio: "20",
            precioScam: "25",
            descuento: "20%",
            img: barraProteina

          })}
            nombre={"Barrita de Proteina"} descripcion={"El sabor de esta increible barrita proteica hará que te cagues en los pantalones"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={barraProteina} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "El sabor de esta increible barrita proteica hará que te cagues en los pantalones",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: barraProteina
          })}
            nombre={"Barrita de Proteina"} descripcion={"El sabor de esta increible barrita proteica hará que te cagues en los pantalones"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={proteinaPolvo} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
            nombre={"Proteina en polvo"} descripcion={"Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={barraProteina} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "El sabor de esta increible barrita proteica hará que te cagues en los pantalones",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: barraProteina
          })}
            nombre={"Barrita de Proteina"} descripcion={"El sabor de esta increible barrita proteica hará que te cagues en los pantalones"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={proteinaPolvo} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
            nombre={"Proteina en polvo"} descripcion={"Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={barraProteina} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "El sabor de esta increible barrita proteica hará que te cagues en los pantalones",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: barraProteina
          })}
            nombre={"Barrita de Proteina"} descripcion={"El sabor de esta increible barrita proteica hará que te cagues en los pantalones"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={proteinaPolvo} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
            nombre={"Proteina en polvo"} descripcion={"Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={barraProteina} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "El sabor de esta increible barrita proteica hará que te cagues en los pantalones",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: barraProteina
          })}
            nombre={"Barrita de Proteina"} descripcion={"El sabor de esta increible barrita proteica hará que te cagues en los pantalones"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={proteinaPolvo} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
            nombre={"Proteina en polvo"} descripcion={"Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />


        </div>
        {/* Renderizar el modal */}
        {ModalAbierto && (
          <ProductoModal
            product={ProductoSeleccionado}
            closeModal={CerrarModal}
          />
        )}



        <Footer />
      </div>


    </>
  )
}
export default Tienda;