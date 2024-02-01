import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TablaRutina from "../components/TablaRutina";
import axios from "axios";


function Rutina() {
  
  return (
    <div className="mt-5 bg-black container-fluid min-vh-100 ">
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
