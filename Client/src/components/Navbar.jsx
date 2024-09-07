export default Navbar;

import "../styles/nav.css"
import logo from "../img/logo.png";
import AsistenteVirtual from "./AsistenteVirtual";
import CarritoCompra from "./CarritoCompra";
import { useEffect, useState } from "react";
import axios from "axios";

function Navbar({ linkHome }) {
  const [numeroItems, setNumeroItems] = useState(4);
  const [usuarioSession, setUsuarioSession] = useState("");

  useEffect(() => {
    axios.get("https://serverc-4y5e.onrender.com/getSession", {
      withCredentials: true,
    }).then((res) => {
      setUsuarioSession(res.data.usuario);
      console.log("usuario: " + res.data.usuario);
    }).catch((error) => {
      console.error(error);
    });

  }, []);

  const [visibleCesta, setVisibleCesta] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const cerrarSesion = () => {
    axios.get("https://serverc-4y5e.onrender.com/logout", {
      withCredentials: true,
    })

    window.location.href = "/login";
    console.log("Sesión cerrada exitosamentessssssss");

  }
  return (
    <>
      <nav className="tw-bg-[#0d0d0d] tw-fixed tw-w-full tw-z-20 tw-top-0 tw-start-0 ">
        <div className="tw-max-w-screen-xl tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-mx-auto tw-p-4">
          <a href="/principal" className="tw-flex tw-items-center tw-space-x-3 rtl:tw-space-x-reverse">
            <img src={logo} className="tw-h-9 tw-mt-2 " alt="" />
            <span className="tw-self-center tw-text-2xl tw-font-semibold tw-whitespace-nowrap tw-text-white ">Control<span className="tw-text-2xl tw-font-semibold tw-whitespace-nowrap tw-text-[#03e9f4] ">Z</span></span>
          </a>
          <div className="tw-flex md:tw-order-2 tw-space-x-3 md:tw-space-x-0 rtl:tw-space-x-reverse tw-items-center">
            <div className="tw-relative tw-bottom-1">
              <div className="tw-absolute tw-left-3 tw-top-0">
                {numeroItems !== 0 && (
                  <p className="tw-flex tw-h-2 tw-w-2 tw-items-center tw-justify-center tw-rounded-full tw-bg-red-500 tw-p-3 tw-text-xs tw-text-white tw-pointer-events-none">
                    {numeroItems}
                  </p>
                )}
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="flipaa tw-me-5 tw-mt-4 tw-cursor-pointer tw-text-white hover:tw-fill-current hover:tw-tw-text-gray-400"
                onClick={() => setVisibleCesta(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

            </div>
            {typeof usuarioSession === 'string' && usuarioSession !== ''
              ?
              <div onClick={cerrarSesion} className=" tw-w-7 tw-text-white tw-cursor-pointer  hoverGirar">
                <svg className="   hoveraGirar tw-text-red-500 tw-pointer-events-none" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="25px"
                  width="25px"

                >
                  <path d="M705.6 124.9a8 8 0 00-11.6 7.2v64.2c0 5.5 2.9 10.6 7.5 13.6a352.2 352.2 0 0162.2 49.8c32.7 32.8 58.4 70.9 76.3 113.3a355 355 0 0127.9 138.7c0 48.1-9.4 94.8-27.9 138.7a355.92 355.92 0 01-76.3 113.3 353.06 353.06 0 01-113.2 76.4c-43.8 18.6-90.5 28-138.5 28s-94.7-9.4-138.5-28a353.06 353.06 0 01-113.2-76.4A355.92 355.92 0 01184 650.4a355 355 0 01-27.9-138.7c0-48.1 9.4-94.8 27.9-138.7 17.9-42.4 43.6-80.5 76.3-113.3 19-19 39.8-35.6 62.2-49.8 4.7-2.9 7.5-8.1 7.5-13.6V132c0-6-6.3-9.8-11.6-7.2C178.5 195.2 82 339.3 80 506.3 77.2 745.1 272.5 943.5 511.2 944c239 .5 432.8-193.3 432.8-432.4 0-169.2-97-315.7-238.4-386.7zM480 560h64c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z" />
                </svg>
              </div>
              :
              <a href="/login" className=" tw-w-7 tw-text-white tw-cursor-pointer  hoverGirar">
                <svg className="hoveraGirar tw-text-green-500 tw-pointer-events-none" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1024 1024"
                  fill="currentColor"
                  height="25px"
                  width="25px"

                >
                  <path d="M705.6 124.9a8 8 0 00-11.6 7.2v64.2c0 5.5 2.9 10.6 7.5 13.6a352.2 352.2 0 0162.2 49.8c32.7 32.8 58.4 70.9 76.3 113.3a355 355 0 0127.9 138.7c0 48.1-9.4 94.8-27.9 138.7a355.92 355.92 0 01-76.3 113.3 353.06 353.06 0 01-113.2 76.4c-43.8 18.6-90.5 28-138.5 28s-94.7-9.4-138.5-28a353.06 353.06 0 01-113.2-76.4A355.92 355.92 0 01184 650.4a355 355 0 01-27.9-138.7c0-48.1 9.4-94.8 27.9-138.7 17.9-42.4 43.6-80.5 76.3-113.3 19-19 39.8-35.6 62.2-49.8 4.7-2.9 7.5-8.1 7.5-13.6V132c0-6-6.3-9.8-11.6-7.2C178.5 195.2 82 339.3 80 506.3 77.2 745.1 272.5 943.5 511.2 944c239 .5 432.8-193.3 432.8-432.4 0-169.2-97-315.7-238.4-386.7zM480 560h64c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8z" />
                </svg>
              </a>

            }

            <button onClick={handleMenuToggle} className="tw-inline-flex tw-items-center tw-p-2 tw-w-10 tw-h-10 tw-justify-center tw-text-sm tw-text-gray-500 tw-rounded-lg md:tw-hidden hover:tw-bg-gray-100 tw-focus:tw-outline-none tw-focus:tw-ring-2 tw-focus:tw-ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="tw-sr-only">Open main menu</span>
              <svg className="tw-w-5 tw-h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
          <div className={`tw-items-center tw-justify-between tw-w-full md:tw-flex md:tw-w-auto md:tw-me-[4.9rem] md:tw-order-1 ${menuOpen ? "" : "tw-hidden"}`} id="navbar-sticky">
            <ul className="tw-text-white tw-flex tw-flex-col tw-px-4 tw-mt-4 tw-font-semibold tw-border tw-border-gray-800 tw-rounded-xl md:tw-space-x-8 rtl:tw-space-x-reverse md:tw-flex-row md:tw-mt-0 md:tw-border-0">
              <li >
                <a href={linkHome} className="tw-block tw-py-2 tw-rounded md:tw-bg-transparent hover:tw-text-gray-400 " aria-current="page">Home</a>
              </li>
              <li>
                <a href="/dieta" className="tw-block tw-py-2 tw-rounded hover:tw-text-gray-400 ">Dieta</a>
              </li>
              <li>
                <a href="/perfil" className="tw-block tw-py-2 tw-rounded hover:tw-text-gray-400 ">Perfil</a>
              </li>
              <li>
                <a href="/rutina" className="tw-block tw-py-2 tw-rounded hover:tw-text-gray-400 ">Rutina</a>
              </li>
              <li>
                <a href="/tienda" className="tw-block tw-py-2 tw-rounded hover:tw-text-gray-400 ">Tienda</a>
              </li>

            </ul>
          </div>
        </div>
        <div className="tw-absolute "></div>
        {/* Renderizar cesta */}
        <CarritoCompra visible={visibleCesta} onClose={() => setVisibleCesta(false)} setNumeroItems={setNumeroItems} />
      </nav>
      {!visibleCesta && (
        <AsistenteVirtual />

      )}
    </>
  );


}

