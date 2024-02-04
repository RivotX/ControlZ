import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TablaRutina from "../components/TablaRutina";
import axios from "axios";


function Rutina() {
  return (
    <div className="tw-min-h-screen">
      <Navbar linkHome="/gym" />
      <div className=" tw-py-[4.87rem]">

        <TablaRutina />
        <Footer />
      </div>
    </div>

  );
}

export default Rutina;
