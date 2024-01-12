export default Perfil;
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import fotoHombre from "../img/hombre.png";
import fotoMujer from "../img/mujer.png";
import { useRef } from "react";
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
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Perfil() {
  const [nombre, setNombre]= useState("");
  const [email, setEmail]= useState("")
  const [Telefono, setTelefono]= useState("")
  const [direccion, setDireccion]= useState("")

  // const countRef = useRef(count);
 
  // useEffect(() => {
  //   console.log(window.onload);
  // }, [countRef]);


 


  return (
    <div className="px-0 container-fluid min-vh-100 bodyperfil">
      <Navbar linkHome={"/gym"} />
      <div className="mb-4 container-fluid fondoperfil ">
        <div className="mb-3 circulo container-fluid">
          <div className=" justify-content-center d-flex">
            <div className="mt-2 mb-2 borde">
              <div className="mt-5 text-center card-body ">
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
        {/* <div className="mb-4 card">
            <div className="row">
              <div className="col-sm-3">
                <p className="mb-0">Nombre Completo</p>
              </div>
              <div className="col-sm-9">
                <p className="mb-0 text-muted">
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
              <p className="mb-0 text-muted">
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
              <p className="mb-0 text-muted">
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
              <p className="mb-0 text-muted">
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
                   {nombre}
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
                    {email}
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
                    {Telefono}
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
                    {direccion}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <div className="row ">
          <div className="col-md-6">
            <div className="mb-4 card mb-md-0">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-primary font-italic me-1">Progreso</span>{" "}
                  Gimnasio
                </p>
                <p className="mb-1" style={{ fontSize: "0.77rem" }}>
                  Brazos
                </p>
                <div className="rounded progress" style={{ height: "5px;" }}>
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
                <div className="rounded progress" style={{ height: "5px" }}>
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
                <div className="rounded progress" style={{ height: "5px" }}>
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
                <div className="rounded progress" style={{ height: "5px" }}>
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
                <div className="mb-2 rounded progress " style={{ height: "5px" }}>
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
          <div className="mb-3 col-md-6">
            <div className="mb-4 card mb-md-0">
              <div className="card-body">
                <p className="mb-4">
                  <span className="text-primary font-italic me-1">Progreso</span>{" "}
                  Dieta
                </p>
                <p className="mb-1" style={{ fontSize: "0.77rem" }}>
                  Proteínas
                </p>
                <div className="rounded progress" style={{ height: "5px" }}>
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
                <div className="rounded progress" style={{ height: "5px" }}>
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
                <div className="rounded progress" style={{ height: "5px" }}>
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
                <div className="rounded progress" style={{ height: "5px" }}>
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
                <div className="mb-2 rounded progress" style={{ height: "5px;" }}>
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
