export default Navbar;

import logo from "../img/logo.png";
import ChatComponent from "./ChatComponent";
import CarritoCompra from "./CarritoCompra";
import { useState, useEffect } from "react";
import habilitarTailwind from "./habilitarTailwind";

function Navbar({ linkHome }) {
  habilitarTailwind()
  const [visibleCesta, setVisibleCesta] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };


  return (
    <>
      <nav className="tw-bg-black tw-fixed tw-w-full tw-z-20 tw-top-0 tw-start-0 ">
        <div className="tw-max-w-screen-xl tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-mx-auto tw-p-4">
          <a href="/principal" className="tw-flex tw-items-center tw-space-x-3 rtl:tw-space-x-reverse">
            <img src={logo} className="tw-h-9 tw-mt-2 " alt="" />
            <span className="tw-self-center tw-text-2xl tw-font-semibold tw-whitespace-nowrap tw-text-white ">Control<span className="tw-text-2xl tw-font-semibold tw-whitespace-nowrap tw-text-[#03e9f4] ">Z</span></span>
          </a>
          <div className="tw-flex md:tw-order-2 tw-space-x-3 md:tw-space-x-0 rtl:tw-space-x-reverse">
            <div className="tw-relative tw-bottom-1">
              <div className="tw-absolute tw-left-3 tw-top-0">
                <p className="tw-flex tw-h-2 tw-w-2 tw-items-center tw-justify-center tw-rounded-full tw-bg-red-500 tw-p-3 tw-text-xs tw-text-white tw-pointer-events-none">
                  3
                </p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="flipaa tw-me-5 tw-mt-4 tw-h-6 tw-w-6 tw-cursor-pointer tw-text-white hover:tw-tw-fill-current hover:tw-tw-text-gray-400"
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
          <div className={`tw-items-center tw-justify-between tw-w-full md:tw-flex md:tw-w-auto xl:tw-me-[4.5rem] md:tw-order-1 ${menuOpen ? "" : "tw-hidden"}`} id="navbar-sticky">
            <ul className="tw-text-white tw-flex tw-flex-col tw-px-4  tw-mt-4 tw-font-medium tw-border tw-border-gray-100 tw-rounded-xl tw-bg-gray-950 md:tw-space-x-8 rtl:tw-space-x-reverse md:tw-flex-row md:tw-mt-0 md:tw-border-0">
              <li >
                <a href={linkHome} className="tw-block tw-py-2 tw-rounded md:tw-bg-transparent hover:tw-text-gray-400 " aria-current="page">Home</a>
              </li>
              <li>
                <a href="/dieta" className="tw-block tw-py-2  tw-rounded hover:tw-text-gray-400  ">Dieta</a>
              </li>
              <li>
                <a href="/rutina" className="tw-block tw-py-2   tw-rounded hover:tw-text-gray-400 ">Rutina</a>
              </li>
              <li>
                <a href="/tienda" className="tw-block tw-py-2   tw-rounded hover:tw-text-gray-400 ">Tienda</a>
              </li>
              <li>
                <a href="/perfil" className="tw-block tw-py-2   tw-rounded hover:tw-text-gray-400 ">Perfil</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="tw-absolute "></div>
        {/* Renderizar cesta */}
        <CarritoCompra visible={visibleCesta} onClose={() => setVisibleCesta(false)} />
      </nav>
      {!visibleCesta && (
        <ChatComponent />

      )}
    </>
  );


}


// <nav
//   className="bg-black navbar navbar-expand-lg fixed-top"
//   data-bs-theme="dark"
// >
//   <div className="container-fluid tw-justify-between">
//     <a className="navbar-brand" href="principal">
//       <img
//         src={logo}
//         alt="Logo"
//         width="30"
//         height="30"
//         className="align-text-top d-inline-block"
//       />
//       ControlZ
//     </a>
//     <div className=" tw-flex">

//       <div className="tw-relative tw-bottom-1">
//         <div className="tw-absolute tw-left-3 tw-top-0">
//           <p className="tw-flex tw-h-2 tw-w-2 tw-items-center tw-justify-center tw-rounded-full tw-bg-red-500 tw-p-3 tw-text-xs tw-text-white tw-pointer-events-none">
//             3
//           </p>
//         </div>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth="1.5"
//           stroke="currentColor"
//           className="flipaa tw-me-5 tw-mt-4 tw-h-6 tw-w-6 tw-cursor-pointer tw-text-white hover:tw-tw-fill-current hover:tw-tw-text-gray-400"
//           onClick={() => setVisibleCesta(true)}
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
//           />
//         </svg>
//       </div>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-bs-toggle="collapse"
//         data-bs-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//     </div>


//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="mb-2 navbar-nav me-auto mb-lg-0">
//         <li className="nav-item">
//           <a
//             className="nav-link active"
//             aria-current="page"
//             href={linkHome}
//           >
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="#ejercicios">
//             Ejercicios
//           </a>
//         </li>
//         <li className="nav-item dropdown">
//           <a
//             className="nav-link dropdown-toggle"
//             href="#"
//             role="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//           >
//             Rutina
//           </a>

//           <ul className="dropdown-menu">
//             <li>
//               <a className="dropdown-item" href="rutina">
//                 Lunes
//               </a>
//             </li>
//           </ul>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/tienda">
//             Tienda
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="perfil">
//             Perfil
//           </a>
//         </li>
//       </ul>

//       <div className="me-2">
//         <ChatComponent />
//       </div>
//     </div>
//   </div>
// </nav>