import React, { useState, useEffect } from "react";
import axios from "axios";
const TablaRutina = () => {

  const [lunes, setLunes] = useState([]);
  const [martes, setMartes] = useState([]);
  const [miercoles, setMiercoles] = useState([]);
  const [jueves, setJueves] = useState([]);
  const [viernes, setViernes] = useState([]);
  const [sabado, setSabado] = useState([]);
  const [domingo, setDomingo] = useState([]);

  var usuario = {};
  useEffect(() => {
    axios.get('http://localhost:8081/getSession', { withCredentials: true }) //envia values a "servidor/registro"
      .then((res) => {
        usuario = { "usuario": res.data.usuario };
        console.log(res);
        axios.post('http://localhost:8081/getrutina', usuario)
          .then((res) => {
            console.log(res.data[0]);

            setLunes(res.data[0].lunes);
            setMartes(res.data[0].martes);
            setMiercoles(res.data[0].miercoles);
            setJueves(res.data[0].jueves);
            setViernes(res.data[0].viernes);
            setSabado(res.data[0].sabado);
            setDomingo(res.data[0].domingo);


          })
          .catch()
      })
      .catch(err => console.error(err)) // Llamada a la función al cargar el componente

  }, []); // El segundo argumento (un array vacío) asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <div>


    </div>
  );
};
export default TablaRutina;
