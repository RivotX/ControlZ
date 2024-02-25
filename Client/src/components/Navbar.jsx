export default Navbar;

import logo from "../img/logo.png";
import AsistenteVirtual from "./AsistenteVirtual";
import CarritoCompra from "./CarritoCompra";
import { useEffect, useState } from "react";
import habilitarTailwind from "./habilitarTailwind";
import axios from "axios";

function Navbar({ linkHome }) {
  const [numeroItems, setNumeroItems] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8081/getSession", {
      withCredentials: true,
    }).then((res) => {
      setNumeroItems(res.data.numberItems);
    }).catch((error) => {
      console.error(error);
    });

  }, []);

  habilitarTailwind()
  const [visibleCesta, setVisibleCesta] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="tw-bg-[#0d0d0d] tw-fixed tw-w-full tw-z-20 tw-top-0 tw-start-0 ">
        <div className="tw-max-w-screen-xl tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-mx-auto tw-p-4">
          <a href="/principal" className="tw-flex tw-items-center tw-space-x-3 rtl:tw-space-x-reverse">
            <img src={logo} className="tw-h-9 tw-mt-2 " alt="" />
            <span className="tw-self-center tw-text-2xl tw-font-semibold tw-whitespace-nowrap tw-text-white ">Control<span className="tw-text-2xl tw-font-semibold tw-whitespace-nowrap tw-text-[#03e9f4] ">Z</span></span>
          </a>
          <div className="tw-flex md:tw-order-2 tw-space-x-3 md:tw-space-x-0 rtl:tw-space-x-reverse">
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
                className="flipaa tw-me-5 tw-mt-4 tw-h-6 tw-w-6 tw-cursor-pointer tw-text-white hover:tw-fill-current hover:tw-tw-text-gray-400"
                onClick={() => setVisibleCesta(true)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
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
        <CarritoCompra visible={visibleCesta} onClose={() => setVisibleCesta(false)} />
      </nav>
      {!visibleCesta && (
        <AsistenteVirtual />

      )}
    </>
  );


}

