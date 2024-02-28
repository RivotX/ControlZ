import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Producto from "../components/Tienda/Producto";
import ProductoModal from "../components/Tienda/ProductoModal";
import proteinaPolvo from "../img/proteinaPolvo.png"
import barraProteina from "../img/barraProteina.png"
import { useState, useEffect } from "react";


function Tienda() {


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

  return (
    <>
      <div className="tw-min-h-screen tw-pt-[4.87rem] tw-bg-gradient-to-b tw-from-[#292929] tw-to-[#0d0d0d] tw-to-60%" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont' }}>
        <Navbar linkHome={"/"} />

        <div className="tw-p-2 tw-mb-8 tw-flex tw-flex-wrap tw-gap-4 tw-mt-1 tw-justify-center sm:tw-mx-4"> {/* tw-grid md:tw-grid-cols-3 xl:tw-grid-cols-4*/}

          <Producto img={proteinaPolvo} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger rico rico rico flipas que rico esta flipante ",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
            nombre={"Proteina en polvo"} descripcion={"Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger rico rico rico flipas que rico esta flipante "} precio={"20€"} precioScam={"25€"} descuento={"20%"}

          />
          <Producto img={barraProteina} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "El sabor de esta increible barrita proteica hará que te cagues en los pantalones es increible flipante de sabor fliparas seguro =) texto",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: barraProteina
          })}
            nombre={"Barrita de Proteina"} descripcion={"El sabor de esta increible barrita proteica hará que te cagues en los pantalones es increible flipante de sabor fliparas seguro =) texto"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={proteinaPolvo} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger rico rico rico flipas que rico esta flipante ",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
            nombre={"Proteina en polvo"} descripcion={"Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger rico rico rico flipas que rico esta flipante "} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={barraProteina} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "El sabor de esta increible barrita proteica hará que te cagues en los pantalones es increible flipante de sabor fliparas seguro =) texto",
            precio: "20",
            precioScam: "25",
            descuento: "20%",
            img: barraProteina

          })}
            nombre={"Barrita de Proteina"} descripcion={"El sabor de esta increible barrita proteica hará que te cagues en los pantalones es increible flipante de sabor fliparas seguro =) texto"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={barraProteina} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "El sabor de esta increible barrita proteica hará que te cagues en los pantalones es increible flipante de sabor fliparas seguro =) texto",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: barraProteina
          })}
            nombre={"Barrita de Proteina"} descripcion={"El sabor de esta increible barrita proteica hará que te cagues en los pantalones es increible flipante de sabor fliparas seguro =) texto"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={proteinaPolvo} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger rico rico rico flipas que rico esta flipante ",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
            nombre={"Proteina en polvo"} descripcion={"Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger rico rico rico flipas que rico esta flipante "} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={barraProteina} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "El sabor de esta increible barrita proteica hará que te cagues en los pantalones es increible flipante de sabor fliparas seguro =) texto",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: barraProteina
          })}
            nombre={"Barrita de Proteina"} descripcion={"El sabor de esta increible barrita proteica hará que te cagues en los pantalones es increible flipante de sabor fliparas seguro =) texto"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={proteinaPolvo} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger rico rico rico flipas que rico esta flipante ",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
            nombre={"Proteina en polvo"} descripcion={"Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger rico rico rico flipas que rico esta flipante "} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={barraProteina} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "El sabor de esta increible barrita proteica hará que te cagues en los pantalones es increible flipante de sabor fliparas seguro =) texto",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: barraProteina
          })}
            nombre={"Barrita de Proteina"} descripcion={"El sabor de esta increible barrita proteica hará que te cagues en los pantalones es increible flipante de sabor fliparas seguro =) texto"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={proteinaPolvo} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger rico rico rico flipas que rico esta flipante ",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
            nombre={"Proteina en polvo"} descripcion={"Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger rico rico rico flipas que rico esta flipante "} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={barraProteina} onClick={() => AbrirModal({
            nombre: "Barrita de Proteina",
            descripcion: "El sabor de esta increible barrita proteica hará que te cagues en los pantalones es increible flipante de sabor fliparas seguro =) texto",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: barraProteina
          })}
            nombre={"Barrita de Proteina"} descripcion={"El sabor de esta increible barrita proteica hará que te cagues en los pantalones es increible flipante de sabor fliparas seguro =) texto"} precio={"20€"} precioScam={"25€"} descuento={"20%"}
          />
          <Producto img={proteinaPolvo} onClick={() => AbrirModal({
            nombre: "Proteina en polvo",
            descripcion: "Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger rico rico rico flipas que rico esta flipante ",
            precio: "20€",
            precioScam: "25€",
            descuento: "20%",
            img: proteinaPolvo
          })}
            nombre={"Proteina en polvo"} descripcion={"Fliparás en colores con el colocón de las proteinas que te haran estar como arnold sauagseingneinger rico rico rico flipas que rico esta flipante "} precio={"20€"} precioScam={"25€"} descuento={"20%"}
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
