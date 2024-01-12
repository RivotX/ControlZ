export default Principal;

import { useRef } from "react";
import 'animate.css';


function Principal() {

  
  const elementoRefGym = useRef(null);
  const elementoRefDieta = useRef(null);
  console.log("ola");

  const ampliar = (elemento, number) => {
    elemento.style.backgroundSize = number;
  };

  const desampliar = (elemento) => {
    elemento.style.backgroundSize = "180%";
  };
  return (
    <div className="bg-bg-black " style={{overflow:"hidden"}}>
      {/* <?php
    include_once("../php/consultas.php");
    if(isset($_POST["usuarioInicio"])&&isset($_POST["claveInicio"])&&Consultas::ComprobarInicio($_POST["usuarioInicio"],$_POST["claveInicio"]) ){ 
        Consultas::recolectarDatos($_POST["usuarioInicio"]); 
        }
    if (isset($_SESSION["usuario"])) {     
    ?> */}

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
            <a className="ApartadosAElegir" href="gym">
              <h2 className="descripcion1 text-center">
                En esta sección de nuestro sitio web de gimnasio, te sumergirás
                en un mundo de rutinas de entrenamiento diseñadas para abordar
                diversos objetivos fitness. Ya seas un principiante en busca de
                rutinas introductorias o un atleta experimentado buscando
                desafíos avanzados, nuestras opciones de entrenamiento se
                adaptan a todos los niveles.
              </h2>

              <div
                className="ancho img1 d-flex justify-content-center align-items-center"
                ref={elementoRefGym}
                onMouseEnter={() => ampliar(elementoRefGym.current, "190%")}
                onMouseLeave={() => desampliar(elementoRefGym.current)}
              >
                <h1 className="apartado">Gym</h1>
              </div>
            </a>
          </div>

          <div className="col-6 caja animate__animated  animate__fadeInRight">
            <a className="ApartadosAElegir" href="dieta">
              <h2 className="descripcion2 text-center">
                Con esta herramienta interactiva, te empoderamos para que
                diseñes una dieta adaptada a tu estilo de vida y objetivos
                personales, asegurándote de obtener los nutrientes necesarios
                para alcanzar el éxito en tu jornada fitness. ¡Comienza a
                construir tu camino hacia una nutrición personalizada y
                efectiva!
              </h2>

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
      </div>
      {/* <?php
    }else{
        header("location:../?inicioincorrecto=''");
    }
    ?> */}
    </div>
  );
}
