import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import Producto from "../componentes/Producto";
import ProductoModal from "../componentes/ProductoModal";
import proteinaPolvo from "../img/proteinaPolvo.png"
import barraProteina from "../img/barraProteina.png"
import CarritoCompra from "../componentes/CarritoCompra";
import { useState, useEffect } from "react";

function Tienda() {
  //funcion para usar tailwind solo aqui y que de problemas en los otros sitios con bootstrap 
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

  const [visibleCesta, setVisibleCesta] = useState(false);

  const MostrarCesta = () => {
    setVisibleCesta(true);
  }


  return (
    <><div className="tw-min-h-screen tw-bg-gradient-to-b tw-from-gray-700 tw-via-gray-900 tw-via-20% tw-to-black tw-to-50%" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont' }}>
      <Navbar linkHome={"gym"} />

      <div className="tw-flex tw-justify-center">
        <button className="tw-mt-16 tw-bg-cyan-400 tw-rounded-lg tw-w-32" onClick={() => setVisibleCesta(true)}
        >Ver cesta</button>
      </div>
      <div className="tw-flex tw-flex-wrap tw-gap-4 tw-mt-1 tw-justify-center tw-mx-2"> {/* tw-grid md:tw-grid-cols-2 xl:tw-grid-cols-4*/}

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
        <Producto img={"https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
          nombre={"PutisimasZapatillas"} descripcion={"estas zapas estan para flipar"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
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

      {/* Renderizar cesta */}
      {visibleCesta && <CarritoCompra onClose={() => setVisibleCesta(false)} />}

      <Footer />
    </div>


    </>
  )
}
export default Tienda;
