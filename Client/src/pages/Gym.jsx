export default Gym;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CartasFeatures from "../components/CartasFeatures";
import fotorutinaserv from "../img/fotorutinaserv.jpg";
import fotoejerciciosexpli from "../img/fotoejerciciosexpli.jpg";
import fototiendaserv from "../img/fototiendaserv.jpg";
import fotodietaserv from "../img/fotodietaserv.jpg";
import fotogym from "../img/contact.jpg";
import foto1 from "../img/foto1.webp";
import { useState, useEffect } from "react";
import habilitarTailwind from "../components/habilitarTailwind";
import ChatComponent from "../components/ChatComponent";

function Gym() {

  const [mostrarTexto, setmostrarTexto] = useState(false)

  const cambiarDisplay = () => {
    setmostrarTexto(!mostrarTexto)
  }

  const [PantallaPequeña, setPantallaPequeña] = useState(window.innerWidth < 640);

  useEffect(() => {
    const actualizarAnchoVentana = () => {
      setPantallaPequeña(window.innerWidth < 640);
    };

    window.addEventListener('resize', actualizarAnchoVentana);

    // Limpiar el listener del evento resize cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', actualizarAnchoVentana);
    };
  }, []);


  return (
    <div>


      <div className="bg-black min-vh-100 bodygym">

        <Navbar linkHome={"#"} />

        <div className="tw-pt-[4.87rem] bg-dark bg-gradient bg-opacity-10" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont' }}>


          <div className="tw-px-2 sm:tw-px-5 md:tw-px-8 lg:tw-px-10 xl:tw-px-44  ">

            <div className="flex-wrap row d-flex flex-lg-wrap row-cols-lg-1 row-cols-xl-2 row-cols-md-1">
              <div className="text-white bg-transparent border-0 tw-mt-3 md:tw-mt-4 lg:tw-mt-14 xl:tw-mt-[4.2rem] col-sm-12 col-md-12 col-lg-12 justify-content-center tetito card ">

                <div className="border-0 card-header fw-semibold tw-text-center sm:tw-text-start tw-py-0" style={{ fontSize: '450%' }}>
                  Control<span className="tw-text-[#03e9f4]">Z</span>
                </div>
                <div className="card-body tw-py-3">
                  <blockquote className="blockquote tw-text-center tw-text-pretty sm:tw-text-start tw-text-lg">
                    <p id="textoprincipalgym">¡Bienvenido a ControlZ, tu destino digital para transformar tu cuerpo y recuperar el control de tu salud y bienestar! </p>
                    {mostrarTexto && (
                      <p id="textosecundariogym" className="tw-text-lg tw-mt-6">

                        Explora ControlZ, un mundo fitness que te impulsa a la mejor versión de ti mismo con rutinas personalizadas y consejos de nutrición. Desafiamos límites, promovemos un estilo de vida activo y saludable, invitándote a reiniciar tu camino hacia la forma física y descubrir un nuevo tú.
                      </p>
                    )}
                    <button id="mostrarbutton" className="btn btn-outline-info w-50 tw-mt-3 " type="button" onClick={cambiarDisplay} >
                      {

                        mostrarTexto ? (
                          <span className=" tw-text-white tw-font-semibold">Ocultar</span>
                        ) : (
                          <span className=" tw-text-white tw-font-semibold">Ver más</span>
                        )

                      }
                    </button>
                    <footer className="mt-4 blockquote-footer">El equipo de <cite title="Source Title">ControlZ</cite></footer>
                  </blockquote>
                </div>
              </div>
              <img src={foto1} className="rounded col-sm-12 col-md-12 col-lg-9 offset-lg-1 col-xl-6 offset-xl-0 float-end" alt="..." />
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="container text-center">
            <div className="mb-3">
              <div className="mb-2 text-center tw-justify-center d-flex tw-w-full">
                <h1 className="titulobienvenidagym fw-semibold">Servicios</h1>
              </div>
            </div>
            <div className="container mx-auto d-flex align-items-center justify-content-center ">
              <div className="card-group">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-4 g-4 ">
                  <CartasFeatures imagen={fotorutinaserv} titulo={"Rutina"} descripcion={"LLeva un registro de tus rutinas personales y tu progreso gracias a la ayuda que ControlZ te brinda en el día a día."
                  }
                    link={"rutina"}
                  />
                  <CartasFeatures
                    imagen={fotoejerciciosexpli}
                    titulo={"Guia ejercicios"}
                    descripcion={
                      "Disfruta de las explicaciones que te ofrecemos sobre los diferentes ejercicios con videos y fotos explicativos."
                    }
                    link={"#"}
                  />
                  <CartasFeatures
                    imagen={fotodietaserv}
                    titulo={"Dieta"}
                    descripcion={
                      "Crea, modifica y sigue tu dieta a través de nuestra calculadora de macronutrientes para poder cumplir tus objetivos."
                    }
                    link={"dieta"}
                  />{" "}
                  <CartasFeatures
                    imagen={fototiendaserv}
                    titulo={"Tienda"}
                    descripcion={
                      "Consigue y hazte con algunos de nuestros productos de suplementación de la mano de las mejores marcas."
                    }
                    link={"tienda"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="flecha"
          className="mt-5 container-fluid bg-dark bg-gradient bg-opacity-10 contenidoGym"
        >
          <div className="container mt-3 mb-4 contenedortitulogym ">
            <div className="mb-3">
              <div className="mx-auto mt-4 mb-2 text-center d-flex align-items-center justify-content-center">
                <h1 className="mt-4 titulobienvenidagym fw-semibold tw-text-4xl md:tw-text-5xl lg:tw-text-6xl tw-w-full">
                  Comienza el cambio (usuario)
                </h1>
              </div>
            </div>

            <div className="mx-auto mt-4 descgym text-secondary d-flex align-items-center justify-content-center">
              <p className="mb-4   tw-text-center tw-w-4/5">
                En nuestro gimnasio, fortalecemos cuerpo y mente con un enfoque personalizado en un ambiente inclusivo. ¡Bienvenido a un lugar especial donde todos son bienvenidos para comenzar el cambio positivo hoy mismo!
              </p>
            </div>
          </div>
        </div>
        {!PantallaPequeña && (
          <div className="mx-auto d-flex align-items-center justify-content-center tw-mb-16">
            <div className="text-center contenedorgym ">
              <h1 className="textgym">
                CONSTRUYE<span id="wanana">TU LEGADO</span>
              </h1>
              <h1 className="textgym">
                CREA<span id="wanana">TU FUTURO</span>
              </h1>
              <h1 className="textgym">
                DISFRUTA<span id="wanana">EL CAMINO</span>
              </h1>
            </div>
          </div>
        )

        }

        <div className=" bg-dark bg-opacity-10 tw-flex tw-flex-wrap tw-px-3 md:tw-w-11/12 lg:tw-w-4/5 tw-mx-auto">

          <div className="mb-5 card border-secondary bg-dark tw-text-center text-secondary tw-rounded-lg sm:tw-flex-nowrap sm:tw-flex-row sm:tw-justify-between md:tw-text-lg lg:tw-text-xl" > {/* rounded-start-pill  rounded-end */}
            <div className="tw-w-full sm:tw-w-3/5">
              <img
                src={fotogym}
                className="img-fluid tw-rounded-s-lg tw-h-full"
                alt="..."
              />
            </div>
            <div className="tw-w-full sm:tw-w-4/5">
              <div className="card-header fs-3 fw-semibold tw-text-center tw-text-gray-300 ">
                Contáctanos
              </div>
              <div className="card-body ">
                <p className="mb-2 tw-text-pretty">
                  En ControlZ, valoramos la comunicación directa y estamos aquí para responder a todas tus preguntas, escuchar tus comentarios y apoyarte en tu viaje hacia un estilo de vida más saludable. No dudes en ponerte en contacto con nosotros a través de los siguientes canales:
                </p>
                <div className="tw-flex tw-w-full tw-justify-center">
                  <button type="button" className="btn btn-outline-info tw-mt-4 ">Contactar</button>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Footer />
      </div>
    </div>
  );
}
