export default Principal;

import { useState, useEffect } from "react"; 
import { useRef } from "react";
import 'animate.css';


function Principal() {

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


  const elementoRefGym = useRef(null);
  const elementoRefDieta = useRef(null);

  const ampliar = (elemento, number) => {
    elemento.style.backgroundSize = number;
  };

  const desampliar = (elemento) => {
    elemento.style.backgroundSize = "180%";
  };
  return (
    <div className="bg-bg-black " style={{ overflow: "hidden" }}>

      <div className="d-flex justify-content-center align-items-center kkk">
        <div className="logo-container animate__animated animate__backInDown ">
          <a href="perfil">
            <div id="logo" className="logo">
              <div></div>
            </div>
          </a>
        </div>
      </div>
      <div className="container-fluid cont">
        <div className="row ">
          <div className="col-6 caja animate__animated animate__fadeInLeft">
            <a className="ApartadosAElegir" href="rutina">
              {PantallaPequeña ?
                (
                  <></>
                )
                :
                (
                  <h2 className="text-center descripcion1" >
                    En esta sección de nuestro sitio web de gimnasio, te sumergirás
                    en un mundo de rutinas de entrenamiento diseñadas para abordar
                    diversos objetivos fitness.Ya seas un principiante en busca de
                    rutinas introductorias o un atleta experimentado buscando
                    desafíos avanzados, nuestras opciones de entrenamiento se
                    adaptan a todos los niveles.
                  </h2>
                )}

              <div
                className="ancho img1 d-flex justify-content-center align-items-center"
                ref={elementoRefGym}
                onMouseEnter={() => ampliar(elementoRefGym.current, "190%")}
                onMouseLeave={() => desampliar(elementoRefGym.current)}
              >
                <h1 className="apartado">Rutina</h1>
              </div>
            </a>
          </div>

          <div className="col-6 caja animate__animated animate__fadeInRight">
            <a className="ApartadosAElegir" href="dieta">
              {PantallaPequeña ?
                (
                  <></>
                )
                :
                (
                  <h2 className="text-center descripcion2">
                    Con esta herramienta interactiva, te empoderamos para que
                    diseñes una dieta adaptada a tu estilo de vida y objetivos
                    personales, asegurándote de obtener los nutrientes necesarios
                    para alcanzar el éxito en tu jornada fitness. ¡Comienza a
                    construir tu camino hacia una nutrición personalizada y
                    efectiva!
                  </h2>
                )
              }
              <div
                className="ancho img2 d-flex justify-content-center align-items-center"
                ref={elementoRefDieta}
                onMouseEnter={() => ampliar(elementoRefDieta.current, "190%")}
                onMouseLeave={() => desampliar(elementoRefDieta.current)}
              >
                <h1 className="apartado1 ">Dieta</h1>
              </div>
            </a>
          </div>
        </div>
      </div >

    </div >
  );
}
