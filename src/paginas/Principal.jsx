export default Principal;
import Navbar from "../componentes/navbar";
import Footer from "../componentes/Footer";

function Principal() {
  return (
    <div class="container-fluid min-vh-100 paginafija px-0 ">
      {/* <?php
    include_once("../php/consultas.php");
    if(isset($_POST["usuarioInicio"])&&isset($_POST["claveInicio"])&&Consultas::ComprobarInicio($_POST["usuarioInicio"],$_POST["claveInicio"]) ){ 
        Consultas::recolectarDatos($_POST["usuarioInicio"]); 
        }
    if (isset($_SESSION["usuario"])) {     
    ?> */}

      <div class="d-flex justify-content-center align-items-center kkk">
        <div class="logo-container">
          <a href="perfil">
            <div id="logo" class="logo">
              <div></div>
            </div>
          </a>
        </div>
      </div>
      <div class="container-fluid cont">
        <div class="row ">
          <div class="col-6 caja">
            <a class="ApartadosAElegir" href="gym">
              <h2 class="descripcion1 text-center">
                En esta sección de nuestro sitio web de gimnasio, te sumergirás
                en un mundo de rutinas de entrenamiento diseñadas para abordar
                diversos objetivos fitness. Ya seas un principiante en busca de
                rutinas introductorias o un atleta experimentado buscando
                desafíos avanzados, nuestras opciones de entrenamiento se
                adaptan a todos los niveles.
              </h2>

              <div
                class=" ancho img1 d-flex justify-content-center align-items-center "
                onmouseenter="ampliar(this, '190%')"
                onmouseleave="desampliar(this)"
              >
                <h1 class="apartado">Gym</h1>
              </div>
            </a>
          </div>

          <div class="col-6 caja">
            <a class="ApartadosAElegir" href="dieta">
              <h2 class="descripcion2 text-center">
                Con esta herramienta interactiva, te empoderamos para que
                diseñes una dieta adaptada a tu estilo de vida y objetivos
                personales, asegurándote de obtener los nutrientes necesarios
                para alcanzar el éxito en tu jornada fitness. ¡Comienza a
                construir tu camino hacia una nutrición personalizada y
                efectiva!
              </h2>

              <div
                class=" ancho img2 d-flex justify-content-center align-items-center "
                onmouseenter="ampliar(this, '190%')"
                onmouseleave="desampliar(this)"
              >
                <h1 class="apartado1 ">Dieta</h1>
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
