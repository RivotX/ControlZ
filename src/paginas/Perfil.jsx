export default Perfil;
import Navbar from "../componentes/navbar";
import Footer from "../componentes/Footer";
import fotoHombre from "../img/hombre.png";
import fotoMujer from "../img/mujer.png";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";

function Perfil() {
  //     <?php
  // session_start();
  // ?>
  return (
    <div class="container-fluid min-vh-100 bodyperfil px-0">
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
        {/* <div class="card mb-4">
            <div class="row">
              <div class="col-sm-3">
                <p class="mb-0">Nombre Completo</p>
              </div>
              <div class="col-sm-9">
                <p class="text-muted mb-0">
                  <?php echo $_SESSION["nombre"]; ?> 
                </p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Email</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">
                 <?php echo $_SESSION["email"]; ?> 
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
                 <?php echo $_SESSION["telefono"]; ?> 
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
                <?php echo $_SESSION["direccion"]; ?> 
              </p>
            </div>
          </div>
        </div> */}
        <MDBCol lg="12">
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Full Name</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    Johnatan Smith
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Email</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    example@example.com
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Phone</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    (097) 234-5678
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Mobile</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    (098) 765-4321
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
              <hr />
              <MDBRow>
                <MDBCol sm="3">
                  <MDBCardText>Address</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    Bay Area, San Francisco, CA
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
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
                    style={{ width: "72%" }}
                    aria-valuenow="72"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p class="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                  Espalda
                </p>
                <div class="progress rounded" style={{ height: "5px" }}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "89%" }}
                    aria-valuenow="89"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p class="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                  Piernas
                </p>
                <div class="progress rounded" style={{ height: "5px" }}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "55%" }}
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p class="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                  Abdominales
                </p>
                <div class="progress rounded mb-2 " style={{ height: "5px" }}>
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
                    style={{ width: "80%" }}
                    aria-valuenow="80"
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
                    style={{ width: "72%" }}
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
                    style={{ width: "89%" }}
                    aria-valuenow="89"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p class="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                  Cantidad de Agua
                </p>
                <div class="progress rounded" style={{ height: "5px" }}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    style={{ width: "55%" }}
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
    </div>
  );
}
