import React, { useState, useEffect } from "react";
import axios from "axios";
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
  const [diaVisible, setDiaVisible] = useState(0)

  var usuario = {};
  useEffect(() => {
    const obtenerRutina = async () => {
      try {
        const resUsuario = await axios.get("http://localhost:8081/getSession", {
          withCredentials: true,
        });
        const usuario = { usuario: resUsuario.data.usuario };

        const resRutina = await axios.post(
          "http://localhost:8081/getrutina",
          usuario,
        );
        const datosRutina = resRutina.data[0];
        console.log(resRutina.data[0]);
        setLunes(datosRutina.lunes);
        setMartes(datosRutina.martes);
        setMiercoles(datosRutina.miercoles);
        setJueves(datosRutina.jueves);
        setViernes(datosRutina.viernes);
        setSabado(datosRutina.sabado);
        setDomingo(datosRutina.domingo);
      } catch (error) {
        console.error(error);
      }
    };

    obtenerRutina();
  }, []);

  useEffect(() => {
    setRutina([lunes, martes, miercoles, jueves, viernes, sabado, domingo]);
  }, [lunes, martes, miercoles, jueves, viernes, sabado, domingo]);

  useEffect(() => {
    console.log(rutina);
  }, [rutina]);

  const Botondias=(numero)=>{

    if(diaVisible+numero<0|| diaVisible+numero>6){

    }else{

setDiaVisible(diaVisible+numero)
}
  }

  return (
    <div className="tw-m-7 tw-text-white tw-flex tw-justify-center tw-items-center ">
      <button className="tw-bg-slate-400 tw-h-10 tw-w-20 tw-text-center tw-rounded-full tw-text-white tw-font-semibold tw-m-4" onClick={()=>{Botondias(-1)}}>{"<"}</button>
      <table className="tw-border tw-border-white tw-rounded-full">
        <thead>
          {rutina.map(
            (dia, index) =>
              index === diaVisible &&
              dia.map((ejercicio, indexe) => (
                <tr key={indexe}>
                  <td className="tw-border" >
                    Ejercicio:{ejercicio.nombre}
                  </td>
                  <td className="tw-border" >
                    Series:{ejercicio.series}
                  </td>
                  <td className="tw-border" >
                    Repeticiones:{ejercicio.repeticiones}
                  </td>
                  <td className="tw-border" >
                    Kg:{ejercicio.kg}
                  </td>
                </tr>
              )),
          )}

        </thead>
      </table>
      <button className="tw-bg-slate-400 tw-h-10 tw-w-20 tw-text-center tw-rounded-full tw-text-white tw-font-semibold tw-m-4" onClick={()=>{Botondias(1)}}>{">"}</button>

      

      
    </div>
  );
};
export default TablaRutina;
