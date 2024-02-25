
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import fotoHombre from "../img/hombre.png";
import fotoMujer from "../img/mujer.png";
import {
  MDBCol,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,

} from "mdb-react-ui-kit";
import axios from "axios";
import { useEffect, useState } from "react";

function Perfil() {



  const cambiarEstado = () => {
    setOpcionSeleccionada(target.value);
  }
  const [usuario, setUsuario] = useState("");
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [sexo, setSexo] = useState(null);
  const [edad, setedad] = useState(null);
  const [peso, setpeso] = useState(null);
  const [altura, setaltura] = useState(null);
  const [opcionActividadFisica, setOpcionActividadFisica] = useState(1);
  const [opcionObjetivo, setopcionObjetivo] = useState(1);
  const [modificado, setModificado] = useState(false);


  const ModificarDB = () => {

    const values = {
      nombre: nombre,
      email: email,
      telefono: Telefono,
      direccion: direccion,
      sexo: sexo,
      edad: edad,
      peso: peso,
      altura: altura,
      usuario: usuario


    };
    axios.post("http://localhost:8081/modificar", values, { withCredentials: true })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.error(err));
    setModificado(false)
  }


  useEffect(() => {
    axios
      .get("http://localhost:8081/getSession", { withCredentials: true }) //envia values a "servidor/registro"
      .then((res) => {
        setUsuario(res.data.usuario);
        setNombre(res.data.nombre);
        setEmail(res.data.email);
        setTelefono(res.data.telefono);
        setDireccion(res.data.direccion);
        setSexo(res.data.sexo);
        setedad(res.data.edad);
        setpeso(res.data.peso);
        setaltura(res.data.altura);
        // setOpcionActividadFisica(res.data.opcionActividadFisica);
        // setopcionObjetivo(res.data.opcionObjetivo);

        console.log(res);
      })
      .catch((err) => console.error(err));
    console.log("hola");
  }, []);
  const [isEditing, setIsEditing] = useState('');



  return (
    <div className="px-0 container-fluid min-vh-100 bodyperfil tw-bg-gradient-to-b tw-from-[#ffffff] tw-via-[#69AAFA] tw-via-[40%] tw-to-[#0d0d0d] tw-to-[75%]">
      <Navbar linkHome={"/"} />
      <div className="mb-4 tw-pt-[4.87rem] container-fluid fondoperfil tw-border-b-2 tw-border-white">
        <div className="mb-3 circulo container-fluid">
          <div className=" justify-content-center d-flex">
            <div className="mt-2 mb-2 borde">
              <div className="mt-5 text-center card-body ">
                <img
                  id="flecha"
                  src={sexo == 1 ? fotoHombre : fotoMujer}
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: "150px" }}
                />
                <h5 className="my-3 text-white">
                </h5>
                <p className="mb-1 text-white">{usuario}
                  {/* || registrate para ver tus datos */}
                </p>
                <p className="mb-2 text-white">aqui no se que poner</p>
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
                  <MDBCardText className="text-muted">
                    {nombre}
                    {nombre && <button className="tw-rounded-md  tw-w-auto">✏</button>}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>

              <MDBRow className="tw-mb-3 tw-font-medium">
                <MDBCol sm="3">
                  <MDBCardText>Email</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    {email}
                    {email && <button className="tw-rounded-md  tw-w-auto">✏</button>}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>

              <MDBRow className="tw-mb-3 tw-font-medium">
                <MDBCol sm="3">
                  <MDBCardText>Teléfono</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    {Telefono}
                    {Telefono && <button className="tw-rounded-md  tw-w-auto">✏</button>}
                  </MDBCardText>
                </MDBCol>
              </MDBRow>

              <MDBRow className="tw-font-medium">
                <MDBCol sm="3">
                  <MDBCardText>Dirección</MDBCardText>
                </MDBCol>
                <MDBCol sm="9">
                  <MDBCardText className="text-muted">
                    {direccion}
                    {direccion && <button className="tw-rounded-md  tw-w-auto">✏</button>}
                  </MDBCardText>
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
                <div className="tw-w-full tw-flex mb-1 ">
                  <div className="tw-flex tw-w-full tw-justify-between tw-items-center ">
                    <p className="tw-text-md tw-w-1/3 " >
                      Edad
                    </p>
                    {isEditing === 'edad' ? (
                      <input className="tw-border tw-ps-1 tw-rounded-lg tw-border-blue-300 tw-w-1/3 " type="number" name="edad" placeholder="Años"
                        value={edad}
                        onInput={(e) => { setedad(e.target.value); }}
                        onBlur={() => { ModificarDB(); setIsEditing(''); }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') { ModificarDB(); setIsEditing(''); }
                          if (e.key === 'Escape') { setIsEditing(''); }
                        }}
                      />
                    ) : (
                      <h1 className=" tw-flex tw-justify-center tw-text-blue-500  tw-text-center tw-w-1/3 tw-font-medium">{edad}</h1>
                    )}
                  </div>
                  <button className="tw-rounded-md  tw-w-auto" onClick={() => setIsEditing('edad')}>✏</button>
                </div>

                <div className="tw-w-full tw-flex mb-1 ">
                  <div className="tw-flex tw-w-full tw-justify-between tw-items-center ">
                    <p className="tw-text-md tw-w-1/3 " >
                      Peso
                    </p>
                    {isEditing === 'peso' ? (
                      <input className="tw-border tw-ps-1 tw-rounded-lg tw-border-blue-300 tw-w-1/3 " type="number" name="peso" placeholder="kg"
                        value={peso}
                        onInput={(e) => { setpeso(e.target.value); }}
                        onBlur={() => { ModificarDB(); setIsEditing(''); }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') { ModificarDB(); setIsEditing(''); }
                          if (e.key === 'Escape') { setIsEditing(''); }
                        }}
                      />
                    ) : (
                      <h1 className=" tw-flex tw-justify-center tw-text-blue-500  tw-text-center tw-w-1/3 tw-font-medium">{peso}</h1>
                    )}
                  </div>
                  <button className="tw-rounded-md  tw-w-auto" onClick={() => setIsEditing('peso')}>✏</button>
                </div>

                <div className="tw-w-full tw-flex mb-1">
                  <div className=" tw-flex tw-w-full tw-justify-between tw-items-center ">
                    <p className="tw-text-md tw-w-1/3 " >
                      Altura
                    </p>
                    {isEditing === 'altura' ? (
                      <input className="tw-border tw-ps-1 tw-rounded-lg tw-border-blue-300 tw-w-1/3 " type="number" name="altura" placeholder="cm"
                        value={altura}
                        onInput={(e) => { setaltura(e.target.value); }}
                        onBlur={() => { ModificarDB(); setIsEditing(''); }}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') { ModificarDB(); setIsEditing(''); }
                          if (e.key === 'Escape') { setIsEditing(''); }
                        }}
                      />
                    ) : (
                      <h1 className=" tw-flex tw-justify-center tw-text-blue-500  tw-text-center tw-w-1/3 tw-font-medium">{altura}</h1>
                    )}
                  </div>
                  <button className="tw-rounded-md  tw-w-auto" onClick={() => setIsEditing('altura')}>✏</button>
                </div>


                <div className="mb-1 tw-flex tw-w-full tw-justify-between tw-items-center">
                  <p className="tw-text-base tw-w-auto " >
                    Actividad Física
                  </p>
                  <select defaultValue={opcionActividadFisica} className="tw-border tw-text-[15px] tw-rounded-lg tw-h-10 tw-border-blue-300 tw-text-center tw-w-auto form-select" name="actividadFisica" placeholder="..."
                    onChange={(e) => { setOpcionActividadFisica(e.target.value); }}
                    onBlur={() => { ModificarDB(); setIsEditing(''); }}

                  >
                    <option value="1">Seleccionar</option>
                    <option value='2'>1 vez en semana</option>
                    <option value='3'>2-3 vez en semana</option>
                    <option value='4'>4-5 vez en semana</option>
                    <option value='5'>Todos los días</option>
                  </select>
                </div>

                <div className="mb-1 tw-justify-between tw-flex tw-w-full tw-items-center">
                  <p className="tw-w-1/3 text-md">
                    Sexo
                  </p>
                  <div className="inline-flex tw-items-center tw-justify-between">
                    {sexo == 1 ?
                      <>
                        <input
                          className="text-center tw-border tw-rounded-lg tw-border-blue-300 form-check-input" type="radio"
                          value="1"
                          name="sexo"
                          defaultChecked
                          onClick={(e) => {
                            setSexo(e.target.value)
                            ModificarDB()
                          }}>
                        </input>
                        <label htmlFor="sexo" className="tw-ml-1">M</label>
                        <input className="text-center tw-border tw-rounded-lg tw-border-blue-300 form-check-input tw-ml-1" type="radio" value="0" name="sexo"
                          onClick={(e) => {
                            setSexo(e.target.value)
                            ModificarDB()
                          }}>
                        </input>
                        <label htmlFor="sexo" className="tw-ml-1">F</label>
                      </>
                      : <>
                        <input className="text-center tw-border tw-rounded-lg tw-border-blue-300 form-check-input" type="radio" value="1" name="sexo"
                          onClick={(e) => {
                            setSexo(e.target.value)
                            ModificarDB()
                          }}>
                        </input>
                        <label htmlFor="sexo" className="tw-ml-1">M</label>
                        <input className="text-center tw-border tw-rounded-lg tw-border-blue-300 form-check-input tw-ml-1" type="radio" value="0" name="sexo" defaultChecked
                          onClick={(e) => {
                            setSexo(e.target.value)
                            ModificarDB()
                          }}>
                        </input>
                        <label htmlFor="sexo" className="tw-ml-1">F</label>
                      </>
                    }</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-3 col-md-6">
            <div className="mb-4 card mb-md-0">
              <div className="card-body tw-flex tw-flex-wrap tw-font-normal tw-h-64">
                <p className=" tw-w-full tw-font-medium">
                  <span className="tw-text-blue-400 font-italic me-1">
                    Progreso
                  </span>{" "}
                  Dieta
                </p>
                <div className="mb-4 tw-flex tw-w-full tw-justify-between tw-items-center">
                  <p className="tw-text-md tw-w-auto " >
                    objetivo
                  </p>
                  <select defaultValue={opcionObjetivo} onChange={cambiarEstado} name="objetivo" className="tw-border tw-rounded-lg tw-text-[15px] tw-border-blue-300 tw-h-10 tw-text-center tw-w-auto form-select" placeholder="..."
                  >
                    <option value='1'>Seleccionar</option>
                    <option value='2'>Incremento de Masa Corporal</option>
                    <option value='3'>Reducción de Masa Corporal</option>
                    <option value='4'>Recomposición Corporal</option>
                  </select>
                </div>
                <div className="mb-1 tw-flex tw-w-full tw-justify-between tw-items-center">
                  <p className="tw-text-md tw-w-1/3 " >
                    Calorías
                  </p>
                  <h1 className=" tw-flex tw-justify-center  tw-text-blue-500  tw-text-center tw-w-1/3 tw-font-medium" type="number" name="">967</h1>
                </div>

                <div className="mb-1 tw-flex tw-w-full tw-justify-between tw-items-center">
                  <p className="tw-text-md tw-w-1/3 " >
                    Proteínas
                  </p>
                  <h1 className="mb-1 tw-flex tw-justify-center  tw-text-blue-500 tw-text-center tw-w-1/3 tw-font-medium" type="number" name="">592</h1>
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
