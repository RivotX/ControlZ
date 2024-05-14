import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Rutina from "./pages/Rutina.jsx";
import Dieta from "./pages/Dieta.jsx";
import Perfil from "./pages/Perfil.jsx";
import Principal from "./pages/Principal.jsx";
import Tienda from "./pages/Tienda.jsx";
import Login from "./pages/Login.jsx";

function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/rutina" element={<Rutina />} />
        <Route path="/dieta" element={<Dieta />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/tienda" element={<Tienda />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
