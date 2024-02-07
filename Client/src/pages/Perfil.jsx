
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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

  const [opcionSeleccionada, setOpcionSeleccionada] = useState('')

  const cambiarEstado = () => {
    setOpcionSeleccionada(target.value);
  }

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");

  axios
    .get("http://localhost:8081/getSession", { withCredentials: true }) //envia values a "servidor/registro"
    .then((res) => {
      setNombre(res.data.nombre);
      setEmail(res.data.email);
      setTelefono(res.data.telefono);
      setDireccion(res.data.direccion);
      console.log(res);
    })
    .catch((err) => console.error(err));


return (
  <div className="px-0 container-fluid min-vh-100 bodyperfil tw-bg-gradient-to-b tw-from-[#ffffff] tw-via-[#69AAFA] tw-via-[40%] tw-to-[#0d0d0d] tw-to-[75%]">
    <Navbar linkHome={"/gym"} />
    <div className="mb-4 tw-pt-[4.87rem] container-fluid fondoperfil tw-border-b-2 tw-border-white">
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
              </h5>
              <p className="mb-1 text-white">Full Stack Developer</p>
              <p className="mb-2 text-white">Cullar Zaidin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid col-lg-8">

      <MDBCol lg="12">
        <MDBCard className="mb-4">
          <MDBCardBody>

            <p className="mb-4 tw-w-full tw-font-medium">
              <span className="tw-text-blue-400 font-italic me-1">
                Datos Personales
              </span>
            </p>

            <MDBRow className="tw-mb-3 tw-font-medium">
              <MDBCol sm="3">
                <MDBCardText>Nombre </MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{nombre}</MDBCardText>
              </MDBCol>
            </MDBRow>

            <MDBRow className="tw-mb-3 tw-font-medium">
              <MDBCol sm="3">
                <MDBCardText>Email</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{email}</MDBCardText>
              </MDBCol>
            </MDBRow>

            <MDBRow className="tw-mb-3 tw-font-medium">
              <MDBCol sm="3">
                <MDBCardText>Teléfono</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{Telefono}</MDBCardText>
              </MDBCol>
            </MDBRow>

            <MDBRow className="tw-font-medium">
              <MDBCol sm="3">
                <MDBCardText>Dirección</MDBCardText>
              </MDBCol>
              <MDBCol sm="9">
                <MDBCardText className="text-muted">{direccion}</MDBCardText>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <div className="row ">
        <div className="col-md-6">
          <div className="mb-4 card mb-md-0">
            <div className="card-body tw-h-64 tw-flex tw-flex-wrap tw-font-normal">
              <p className="mb-4 tw-w-full tw-font-medium">
                <span className="tw-text-blue-400 font-italic me-1">
                  Progreso
                </span>{" "}
                Gimnasio
              </p>
              <div className="mb-1 tw-flex tw-w-full tw-justify-between">
                <p className="tw-text-md tw-w-1/3 " >
                  Edad
                </p>
                <input className="tw-border tw-rounded-lg tw-border-blue-300 tw-text-center tw-w-1/3 " type="number" name="edad"></input>
              </div>

              <div className="mb-1 tw-flex tw-w-full tw-justify-between">
                <p className="tw-text-md tw-w-1/3 " >
                  Peso
                </p>
                <input className="mb-1 tw-border tw-rounded-lg tw-border-blue-300 tw-text-center tw-w-1/3 " type="number" name="edad"></input>
              </div>

              <div className="mb-1 tw-flex tw-w-full tw-justify-between">
                <p className="tw-text-md tw-w-1/3 " >
                  Altura
                </p>
                <input className="mb-1 tw-border tw-rounded-lg tw-border-blue-300 tw-text-center tw-w-1/3 " name="edad" placeholder="..."></input>
              </div>

              <div className="mb-1 tw-flex tw-w-full tw-justify-between">
                <p className="tw-text-md tw-w-1/3 " >
                  Actividad Física
                </p>
                <select className="tw-border tw-rounded-lg tw-h-10 tw-border-blue-300 tw-text-center tw-w-1/3 form-select" name="edad" placeholder="...">
                  <option selected>Seleccionar</option>
                  <option value='1'>1 vez en semana</option>
                  <option value='1'>2-3 vez en semana</option>
                  <option value='2'>4-5 vez en semana</option>
                  <option value='3'>Todos los días</option>
                </select>
              </div>
              <div className="mb-1 tw-justify-between tw-flex tw-w-full">
                <p className="tw-w-1/3 text-md">
                  Sexo
                </p>
                <div className="inline-flex tw-items-center tw-justify-between">
                  <input className="text-center tw-border tw-rounded-lg tw-border-blue-300 form-check-input" type="radio" value="" name="sexo"></input>
                  <label htmlFor="sexo" className="tw-ml-1">M</label>
                  <input className="text-center tw-border tw-rounded-lg tw-border-blue-300 form-check-input tw-ml-1" type="radio" value="" name="sexo"></input>
                  <label htmlFor="sexo" className="tw-ml-1">F</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3 col-md-6">
          <div className="mb-4 card mb-md-0">
            <div className="card-body tw-flex tw-flex-wrap tw-font-normal tw-h-64">
              <p className="mb-4 tw-w-full tw-font-medium">
                <span className="tw-text-blue-400 font-italic me-1">
                  Progreso
                </span>{" "}
                Dieta
              </p>
              <div className=" tw-flex tw-w-full tw-justify-between">
                <p className="tw-text-md tw-w-1/3 " >
                  objetivo
                </p>
                <select value={opcionSeleccionada} onChange={cambiarEstado} name="objetivo" className="tw-border tw-rounded-lg tw-border-blue-300 tw-h-10 tw-text-center tw-w-1/3 form-select" placeholder="...">
                  <option value=''>Seleccionar</option>
                  <option value='1'>Incremento de Masa Corporal</option>
                  <option value='2'>Reducción de Masa Corporal</option>
                  <option value='3'>Recomposición Corporal</option>
                </select>
              </div>
              <div className="mb-1 tw-flex tw-w-full tw-justify-between">
                <p className="tw-text-md tw-w-1/3 " >
                  Calorías
                </p>
                <h1 className=" tw-flex tw-justify-center tw-items-center tw-text-blue-300 tw-text-center tw-w-1/3 tw-font-medium" type="number" name="">967</h1>
              </div>

              <div className="mb-1 tw-flex tw-w-full tw-justify-between">
                <p className="tw-text-md tw-w-1/3 " >
                  Proteínas
                </p>
                <h1 className="mb-1 tw-flex tw-justify-center tw-items-center tw-text-blue-300 tw-text-center tw-w-1/3 tw-font-medium" type="number" name="">592</h1>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
);
}

export default Perfil;
