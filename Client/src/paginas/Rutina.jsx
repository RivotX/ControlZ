import React, { useState, useEffect } from "react";
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import TablaRutina from "../componentes/TablaRutina";
import axios from "axios";


function Rutina() {
  
  return (
    <div className="bg-black container-fluid min-vh-100 mt-5 ">
      <Navbar linkHome={"gym"} />

      <div className="container-fluid containercompelto">
        <h1 className="text-center text-white"> $Variable dia</h1>
      </div>
      <TablaRutina />
      <Footer />
    </div>
  );
}

export default Rutina;
