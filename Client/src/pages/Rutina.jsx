import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TablaRutina from "../components/TablaRutina";
import axios from "axios";
import habilitarTailwind from "../components/habilitarTailwind";


function Rutina() {
  habilitarTailwind()
  return (
    <div className="tw-min-h-screen">
      <Navbar />
      <div className=" tw-py-[4.87rem]">

        <TablaRutina />
        <Footer />
      </div>
    </div>

  );
}

export default Rutina;
