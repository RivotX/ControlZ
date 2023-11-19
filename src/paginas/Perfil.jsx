export default Perfil;
import Navbar from "../componentes/navbar";
import Footer from "../componentes/Footer";
import fotoHombre from "../img/hombre.png";
import fotoMujer from "../img/mujer.png";

function Perfil() {
//     <?php
// session_start();
// ?>
  return (
    <div class="container-fluid min-vh-100 bodyperfil px-0">
      <div class="ajustarvideo mx-auto d-flex align-items-center justify-content-center">
        <a
          href="#flecha"
          class="mx-auto d-flex align-items-center justify-content-center"
        >
          <h1 class="perfil  text-white ">PERFIL</h1>

          <div class=" down-arrow"></div>
          <h4 class="acceder  text-white ">Acceder</h4>
          <video id="video" autoplay loop muted>
            <source src="../img/video.mp4" type="video/mp4" />
          </video>
        </a>
      </div>
      <Navbar linkHome={"/gym"} />
      <div class="container-fluid fondoperfil ">
        <div class="circulo container-fluid mb-3">
          <div class=" justify-content-center d-flex">
            <div class="borde mb-2 mt-2">
              <div className="card-body text-center mt-5  ">
                <img
                  id="flecha"
                  src={fotoMujer}
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                />
                <h5 class="my-3 text-white">
                  {/* <?php echo $_SESSION["usuario"]; ?> */}
                </h5>
                <p class="mb-1 text-white">Full Stack Developer</p>
                <p class="mb-2 text-white">Cullar Zaidin</p>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div class="container-fluid col-lg-8">
          <div class="card mb-4">
            <div class="card-body">
              <div class="row">
                <div class="col-sm-3">
                  <p class="mb-0">Nombre Completo</p>
                </div>
                <div class="col-sm-9">
                  <p class="text-muted mb-0">
                    {/* <?php echo $_SESSION["nombre"]; ?> */}
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Email</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">
                  {/* <?php echo $_SESSION["email"]; ?> */}
                </p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Teléfono Móvil</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">
                  {/* <?php echo $_SESSION["telefono"]; ?> */}
                </p>
              </div>
            </div>
            <hr />
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Dirección</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">
                  {/* <?php echo $_SESSION["direccion"]; ?> */}
                </p>
              </div>
            </div>
          </div>
          <div class="row mb-5">
            <div class="col-md-6">
              <div class="card mb-4 mb-md-0">
                <div class="card-body">
                  <p class="mb-4">
                    <span class="text-primary font-italic me-1">Progreso</span>{" "}
                    Gimnasio
                  </p>
                  <p class="mb-1" style={{ fontSize: "0.77rem" }}>
                    Brazos
                  </p>
                  <div class="progress rounded" style={{ height: "5px;" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "80%" }}
                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                    Pecho
                  </p>
                  <div class="progress rounded" style={{ height: "5px" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{width: "72%"}}
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                    Espalda
                  </p>
                  <div class="progress rounded"  style={{ height: "5px" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{width: "89%"}}
                      aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                    Piernas
                  </p>
                  <div class="progress rounded"  style={{ height: "5px" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{width: "55%"}}
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                    Abdominales
                  </p>
                  <div class="progress rounded mb-2 "  style={{ height: "5px" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{width: "66%"}}
                      aria-valuenow="66"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 mb-5">
              <div class="card mb-4 mb-md-0">
                <div class="card-body">
                  <p class="mb-4">
                    <span class="text-primary font-italic me-1">Progreso</span>{" "}
                    Dieta
                  </p>
                  <p class="mb-1" style={{ fontSize: "0.77rem" }}>
                    Proteínas
                  </p>
                  <div class="progress rounded" style={{ height: "5px" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{width: "80%"}}                      aria-valuenow="80"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                    Hidratos
                  </p>
                  <div class="progress rounded" style={{ height: "5px" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{width: "72%"}} 
                      aria-valuenow="72"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                    Verduras
                  </p>
                  <div class="progress rounded" style={{ height: "5px" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{width: "89%"}}                       aria-valuenow="89"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                    Cantidad de Agua
                  </p>
                  <div class="progress rounded"  style={{ height: "5px" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{width: "55%"}}
                      aria-valuenow="55"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                  <p class="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                    Fruta
                  </p>
                  <div class="progress rounded mb-2" style={{ height: "5px;" }}>
                    <div
                      class="progress-bar"
                      role="progressbar"
                      style={{ width: "66%" }}
                      aria-valuenow="66"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      
    </div>
  );
}
