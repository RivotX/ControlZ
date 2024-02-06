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
  const [nombredias, setnombredias]=useState(["Lunes","Martes","Miércoles","Jueves","Viernes","Sabado","Domingo"])

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
    <div className="  tw-text-center tw-w-[70%] tw-m-auto tw-text-white tw-flex tw-flex-wrap flex-column tw-justify-center tw-items-center ">
      
      <div className="tw-text-4xl tw-font-bold">Rutina</div>
      
      <div className="tw-w-full tw-flex tw-flex-row tw-justify-center tw-items-center">
        <button className="tw-bg-slate-400 tw-h-10 tw-w-20 tw-text-center tw-rounded-full tw-text-white tw-font-semibold tw-m-4" onClick={()=>{Botondias(-1)}}>{"<"}</button>
        <h1 className="tw-font-semibold tw-text-2xl"> {nombredias[diaVisible]} </h1>
        <button className="tw-bg-slate-400 tw-h-10 tw-w-20 tw-text-center tw-rounded-full tw-text-white tw-font-semibold tw-m-4" onClick={()=>{Botondias(1)}}>{">"}</button>
      </div>
      <div className="tw-overflow-auto flex tw-bg-slate-500 tw-h-[] tw-w-[90%] tw-p-[5%] tw-mt-4 tw-rounded-3xl">
        
      <div className=" tw-border-white tw-bg-black tw-rounded-2xl tw-p-[5%] ">
        


        {rutina.map((dia, index) => (
  index === diaVisible && (
    dia.length > 0 ? (
      dia.map((ejercicio, indexe) => (
        <div className="tw-mb-[20%]  flex tw-flex-row-reverse " key={indexe}>
          <div className="tw-border celdadiv">{ejercicio.nombre}</div>
          <div className="tw-border celdadiv">Series: {ejercicio.series}</div>
          <div className="tw-border celdadiv">Repeticiones: {ejercicio.repeticiones}</div>
          <div className="tw-border celdadiv">Kg: {ejercicio.kg}</div>
        </div>
        
        
      ))
    ) : (
      <div className="tw-mb-[20%]  flex tw-flex-row-reverse " key={index}>
        <div className="tw-border celdadiv"></div>
        <div className="tw-border celdadiv">Series:</div>
        <div className="tw-border celdadiv">Repeticiones:</div>
        <div className="tw-border celdadiv">Kg:</div>
      </div>
    )
  )

))}

        
      </div>
      </div>
     

      

      
    </div>
  );
};
export default TablaRutina;
