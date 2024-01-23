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

  
 
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Lunes</th>
            <th>Martes</th>
            <th>Miercoles</th>
            <th>Jueves</th>
            <th>Viernes</th>
            <th>Sabado</th>
            <th>Domingo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default TablaRutina;
