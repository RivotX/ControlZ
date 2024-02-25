import React, { useState, useEffect } from "react";
import axios from "axios";
import Ejercicio from "./Ejercicio.jsx";
import Plus from "../plus.jsx";
import ModalEjercicio from "./ModalEjercicio.jsx";
import LoginRequiredModal from "../LoginRequiredModal.jsx";


const TablaRutina = () => {
  const [lunes, setLunes] = useState([
    [{ nombre: "", series: 0, repeticiones: 0, kg: 0 }],
  ]);
  const [martes, setMartes] = useState([
    [{ nombre: "", series: 0, repeticiones: 0, kg: 0 }],
  ]);
  const [miercoles, setMiercoles] = useState([
    [{ nombre: "", series: 0, repeticiones: 0, kg: 0 }],
  ]);
  const [jueves, setJueves] = useState([
    [{ nombre: "", series: 0, repeticiones: 0, kg: 0 }],
  ]);
  const [viernes, setViernes] = useState([
    [{ nombre: "", series: 0, repeticiones: 0, kg: 0 }],
  ]);
  const [sabado, setSabado] = useState([
    [{ nombre: "", series: 0, repeticiones: 0, kg: 0 }],
  ]);
  const [domingo, setDomingo] = useState([
    [{ nombre: "", series: 0, repeticiones: 0, kg: 0 }],
  ]);
  const [rutina, setRutina] = useState([]);
  const [diaVisible, setDiaVisible] = useState(0);
  const [nombredias, setnombredias] = useState([
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ]);
  const [rutinacambiada, setrutinacambiada] = useState(false);
  const [usuarioSession, setUsuarioSession] = useState("");
  const [visibleModalRutina, setvisibleModalRutina] = useState(false);
  const [interaccion, setInteraccion] = useState(false);
  const [ModalEditar, setModalEditar] = useState(false);
  const [idAEditar, setidAEditar] = useState(0);
  const [Rutinainiciada, setRutinainiciada] = useState(false);

  useEffect(() => {
    const obtenerRutina = async () => {
      try {
        const resUsuario = await axios.get("http://localhost:8081/getSession", {
          withCredentials: true,
        });
        const usuario = { usuario: resUsuario.data.usuario };
        setUsuarioSession(resUsuario.data.usuario);

        const resRutina = await axios.post(
          "http://localhost:8081/getrutina",
          usuario,
        );

        console.log("RUTINA BASE DE DATOS", resRutina)
        const datosRutina = resRutina.data[0];
        console.log(resRutina.data[0]);
        if(datosRutina && datosRutina !== null && datosRutina !== '') {
        setLunes(datosRutina.lunes);
        setMartes(datosRutina.martes);
        setMiercoles(datosRutina.miercoles);
        setJueves(datosRutina.jueves);
        setViernes(datosRutina.viernes);
        setSabado(datosRutina.sabado);
        setDomingo(datosRutina.domingo);
      }
      } catch (error) {
        console.error(error);
      }
    };

    obtenerRutina();
  }, [rutinacambiada]);

  useEffect(() => {
    setRutina([lunes, martes, miercoles, jueves, viernes, sabado, domingo]);
  }, [lunes, martes, miercoles, jueves, viernes, sabado, domingo]);


  useEffect(() => {
    const actualizarRutina = async () => {
      try {
        const actualizar = await axios.post(
          "http://localhost:8081/ActualizarRutina",
          { id: usuarioSession, rutinaNueva: rutina },
        );

        console.log(actualizar);

        setrutinacambiada(!rutinacambiada);
      } catch (error) {
        console.error(error);
      }
    };
    if (interaccion) {
      actualizarRutina();
      setInteraccion(!interaccion);
    }

    console.log("CAMBIO RUTINA");
    setRutinainiciada(true)
  }, [rutina]);

  const Botondias = (numero) => {
    if (diaVisible + numero < 0 || diaVisible + numero > 6) {
    } else {
      setDiaVisible(diaVisible + numero);
    }
  };

  const eliminarRutina = (i) => {
    var copiarutina = [...rutina];
    copiarutina[diaVisible].splice(i, 1);
    setRutina(copiarutina);
    console.log("Eliminar");
    setInteraccion(true);
  };

  const añadirRutina = (nombre, series, repeticiones, peso) => {
    var copiarutina = [...rutina];

    copiarutina[diaVisible].push({
      nombre: nombre,
      series: series,
      repeticiones: repeticiones,
      kg: peso,
    });
    setInteraccion(true);
    setRutina(copiarutina);
    setvisibleModalRutina(false);
  };

  const editarRutina = (id, nombre, series, repeticiones, peso) => {
    var copiarutina = [...rutina];

    copiarutina[diaVisible][id] = {
      nombre: nombre,
      series: series,
      repeticiones: repeticiones,
      kg: peso,
    };
    console.log("edita")
    setInteraccion(true);
    setRutina(copiarutina);
    setvisibleModalRutina(false);
    setModalEditar(false)
  };

  const ModalAñadirRutina = () => {
    setvisibleModalRutina(true);

  };
  const ModalEditarRutina = (indiceAEditar) => {
    setidAEditar(indiceAEditar);
    setvisibleModalRutina(true);
    setModalEditar(true)

  };

  return (
    <>
      {console.log("USUARIO", usuarioSession)}
      {(usuarioSession === null || usuarioSession === undefined || usuarioSession === '') && <LoginRequiredModal />}
      <div className="  flex-column tw-m-auto tw-flex tw-w-[100%]  md:tw-w-[70%] lg:tw-w-[60%] 2xl:tw-w-[40%] tw-flex-wrap tw-items-center tw-justify-center tw-text-center tw-text-white ">
        <div className="tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-between tw-px-7">
          <button
            className=" botonlados tw-m-4 tw-flex tw-h-10 tw-w-12 tw-items-center tw-justify-center tw-rounded-full tw-bg-slate-800 tw-text-center tw-font-semibold tw-text-white tw-shadow-sm tw-shadow-slate-400"
            onClick={() => {
              Botondias(-1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="tw-pointer-events-none tw-h-6 tw-w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <h1 className=" tw-text-2xl tw-font-semibold">
            {" "}
            {nombredias[diaVisible]}{" "}
          </h1>
          <button
            className=" botonlados tw-m-4 tw-flex tw-h-10 tw-w-12 tw-items-center tw-justify-center tw-rounded-full tw-bg-slate-800 tw-text-center tw-font-semibold tw-text-white tw-shadow-sm tw-shadow-slate-400"
            onClick={() => {
              Botondias(1);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="tw-pointer-events-none tw-h-6 tw-w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
        <div className=" flex tw-mt-4  tw-h-[] tw-w-[90%] tw-overflow-auto tw-rounded-3xl tw-bg-slate-800 tw-p-[2%]">
          <div className=" tw-rounded-2xl tw-border-white">
            {rutina.map(
              (dia, index) =>
                index === diaVisible && (
                  <div key={index}>
                    {dia.length > 0 && <><button className="tw-my-4" onClick={() => { ModalAñadirRutina() }}><Plus /></button> <hr /></>}
                    {dia.length > 0 ? (
                      dia.map((ejercicio, indexe) =>
                        indexe == dia.length - 1 ? (
                          <Ejercicio
                            nombre={ejercicio.nombre}
                            series={ejercicio.series}
                            repeticiones={ejercicio.repeticiones}
                            eliminar={() => {
                              eliminarRutina(indexe);
                            }}
                            last={true}
                            peso={ejercicio.kg}
                            key={indexe}
                            vacio={false}
                            idEditar={indexe}
                            editar={ModalEditarRutina}
                          />
                        ) : (
                          <Ejercicio
                            nombre={ejercicio.nombre}
                            series={ejercicio.series}
                            repeticiones={ejercicio.repeticiones}
                            eliminar={() => {
                              eliminarRutina(indexe);
                            }}
                            last={false}
                            peso={ejercicio.kg}
                            key={indexe}
                            vacio={false}
                            idEditar={indexe}
                            editar={ModalEditarRutina}
                          />
                        ),
                      )
                    ) : (
                      <Ejercicio
                        nombre={""}
                        series={""}
                        repeticiones={""}
                        eliminar={() => {
                          eliminarRutina();
                        }}
                        last={false}
                        peso={""}
                        vacio={true}
                        añadir={() => {
                          ModalAñadirRutina();
                        }}
                        key={index}
                      />
                    )}
                  </div>
                ),
            )}

          </div>
        </div>
        <ModalEjercicio funcionañadir={añadirRutina} modalvisible={visibleModalRutina} setmodalvisible={setvisibleModalRutina} VisibleEditar={ModalEditar} setVisibleEditar={setModalEditar} id={idAEditar} funcionEditar={editarRutina} EjercicioAEditar={Rutinainiciada ? rutina[diaVisible][idAEditar] : ""} ></ModalEjercicio>

      </div>

    </>
  );
};
export default TablaRutina;
