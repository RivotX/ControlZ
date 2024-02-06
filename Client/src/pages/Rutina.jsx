import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TablaRutina from "../components/TablaRutina";
import axios from "axios";
import "../styles/rutina.css"


function Rutina() {
  return (
    <div className="tw-min-h-screen tw-bg-[#0d0d0d]">
      <Navbar linkHome="/gym" />
      <div className=" tw-py-[4.87rem] bg-black min-vh-100 ">

        <TablaRutina />
        <Footer />
      </div>
    </div>

  );
}

export default Rutina;
