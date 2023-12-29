export default Perfil;
import Navbar from "../componentes/Navbar";
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
  // // <?php
  // // session_start();
  // // ?>
  return (
    <div className="container-fluid min-vh-100 bodyperfil px-0">
      <Navbar linkHome={"/gym"} />
      <div className="container-fluid fondoperfil mb-4 ">
        <div className="circulo container-fluid mb-3">
          <div className=" justify-content-center d-flex">
            <div className="borde mb-2 mt-2">
              <div className="card-body text-center mt-5  ">
                <img
                  id="flecha"
                  src={fotoMujer}
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                />
                <h5 className="my-3 text-white">
                  {/* <?php echo $_SESSION["usuario"]; ?> */}
                </h5>
                <p className="mb-1 text-white">Full Stack Developer</p>
                <p className="mb-2 text-white">Cullar Zaidin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid col-lg-8">
        {/* <div className="card mb-4">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Nombre Completo</p>
              </div>
              <div className="col-sm-9">
                <p className="text-muted mb-0">
                  <?php echo $_SESSION["nombre"]; ?> 
                </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Email</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">
                 <?php echo $_SESSION["email"]; ?> 
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Teléfono Móvil</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">
                 <?php echo $_SESSION["telefono"]; ?> 
              </p>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <p className="mb-0">Dirección</p>
            </div>
            <div className="col-sm-9">
              <p className="text-muted mb-0">
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
        <div className="row ">
          <div className="col-md-6">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-primary font-italic me-1">Progreso</span>{" "}
                  Gimnasio
                </p>
                <p className="mb-1" style={{ fontSize: "0.77rem" }}>
                  Brazos
                </p>
                <div className="progress rounded" style={{ height: "5px;" }}>
                  <div
                    className="progress-bar"
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
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "72%" }}
                    aria-valuenow="72"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                  Espalda
                </p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "89%" }}
                    aria-valuenow="89"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                  Piernas
                </p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "55%" }}
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                  Abdominales
                </p>
                <div className="progress rounded mb-2 " style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
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
          <div className="col-md-6 mb-3">
            <div className="card mb-4 mb-md-0">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-primary font-italic me-1">Progreso</span>{" "}
                  Dieta
                </p>
                <p className="mb-1" style={{ fontSize: "0.77rem" }}>
                  Proteínas
                </p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "80%" }}
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                  Hidratos
                </p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "72%" }}
                    aria-valuenow="72"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                  Verduras
                </p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "89%" }}
                    aria-valuenow="89"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                  Cantidad de Agua
                </p>
                <div className="progress rounded" style={{ height: "5px" }}>
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "55%" }}
                    aria-valuenow="55"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                <p className="mt-4 mb-1" style={{ fontSize: "0.77rem" }}>
                  Fruta
                </p>
                <div className="progress rounded mb-2" style={{ height: "5px;" }}>
                  <div
                    className="progress-bar"
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
