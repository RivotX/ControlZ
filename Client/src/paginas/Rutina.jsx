export default Rutina;
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import axios from "axios";
import { useState } from "react";

function Rutina() {
  console.log("ola");
  var usuario={};

  const [lunes,setlunes]=useState([]);
  const [martes,setmartes]=useState([]);
  const [miercoles,setmiercoles]=useState([]);
  const [jueves,setjueves]=useState([]);
  const [viernes,setviernes]=useState([]);
  const [sabado,setsabado]=useState([]);
  const [domingo,setdomingo]=useState([]);

  axios.get('http://localhost:8081/getSession',{ withCredentials: true }) //envia values a "servidor/registro"
      .then((res) => {
        usuario = {"usuario": res.data.usuario};
  console.log(res);
        axios.post('http://localhost:8081/getrutina',usuario)
        .then((res)=>{
          console.log(res.data);
          
        
          
        })
        .catch()
      })
      .catch(err => console.error(err))

      
  return (
    <div className="bg-black container-fluid min-vh-100 ">
      <Navbar linkHome={"gym"} />



      <div className="container-fluid containercompelto">
        <h1 className="text-center text-white"> $Variable dia</h1>
      </div>

      <Footer />
    </div>
  );
}
