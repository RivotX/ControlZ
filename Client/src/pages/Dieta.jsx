export default Dieta;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import FoodModal from "../components/FoodModal";
import axios from "axios";
import { useState } from "react";

function Dieta() {
  const existingLink = document.querySelector('link[href="/src/styles/TiendaTailwind.css"]');

  if (window.location.pathname === '/dieta') {
    if (!existingLink) {

      const head = document.head;
      const link = document.createElement('link');

      link.type = 'text/css';
      link.rel = 'stylesheet';
      link.href = '/src/styles/TiendaTailwind.css'; // Ruta a tu archivo CSS de Tailwind

      head.appendChild(link);
    }
  }
  const [ShowFoodModal, SetShowFoodModal] = useState(false);

  const AbrirModal = () => {
    SetShowFoodModal(true);
  };
  const closeModal = () => {
    SetShowFoodModal(false);
  }
  const [userInput, setuserInput] = useState('');
  const [resultados, setResultados] = useState(null);



  const handleClick = (event) => {
    event.preventDefault();
    axios.post(
      "http://localhost:8081/obtenerAlimento",
      { userInput: userInput },
    ).then(res => {
      console.log(res.data)
      setResultados(res.data);
    }
    );
  }
  const resultContainer = document.getElementById('resultContainer');

  return (
    <div className="tw-min-h-screen tw-pt-16 tw-bg-gradient-to-b tw-from-gray-700 tw-via-gray-900 tw-via-20% tw-to-black tw-to-50%" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont' }}>
      <Navbar linkHome={"/gym"} />
      <div className="tw-flex tw-justify-center tw-flex-wrap">
        <button className="tw-w-full tw-bg-blue-500 tw-hover:bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded" onClick={AbrirModal}>Añadir Alimento</button>
      </div>
    
      <div className="tw-ms-5 tw-flex tw-h-10">
        <input
          type="text"
          id="userInput"
          value={userInput}
          onChange={(e) => setuserInput(e.target.value)}
          
        />
        <button onClick={handleClick} className="tw-ms-5 tw-bg-green-500 tw-p-1 tw-rounded-md tw-text-black tw-text-sm">Consultar Comidas</button>
      </div>

      <div id='resultContainer' className="tw-flex tw-flex-wrap tw-text-white tw-gap-2 tw-w-full tw-justify-center">
        {resultados && (
          resultados.map(producto => (
            <div key={producto.id} className="producto tw-text-white tw-gap-2 tw-flex tw-text-sm tw-justify-between ">
              <div className="tw-w-1/2 tw-h-full">
                <h3 className="text-center">{producto.nombre}</h3>

                <img className="tw-w-full tw-h-4/5 tw-max-h-80" src={producto.imagenUrl} alt="Imagen del producto" />
              </div>
              <div className="tw-w-1/2 tw-flex tw-flex-wrap tw-items-center">
                <div className="tw-flex tw-flex-wrap tw-gap-2">
                  <p className="tw-w-full" >Calorías: <span className="tw-text-orange-500">{producto.calorias}</span> / 100g</p>
                  <p className="tw-w-full">Proteínas: <span className="tw-text-orange-500">{producto.proteinas}</span> / 100g</p>
                  <p className="tw-w-full">Grasas:<span className="tw-text-orange-500"> {producto.grasas}</span> / 100g</p>
                  <p className="tw-w-full">Grasas Saturadas: <span className="tw-text-orange-500">{producto.grasasSaturadas}</span>/ 100g</p>
                  <p className="tw-w-full">Carbohidratos: <span className="tw-text-orange-500">{producto.carbohidratos}</span> / 100g</p>
                  <p className="tw-w-full">Azúcar: <span className="tw-text-orange-500">{producto.azucar}</span> / 100g</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Renderizar el modal */}
      {ShowFoodModal && <FoodModal closeModal={closeModal} />}
      {/* <Footer /> */}

    </div>
  );
}




// <div className="container-fluid bodyDieta">
//   <div className="container-fluid">
//     <button
//       className="botonDieta btn "
//       type="button"
//       data-bs-toggle="offcanvas"
//       data-bs-target="#offcanvasWithBothOptions"
//       aria-controls="offcanvasWithBothOptions"
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         width="40"
//         height="40"
//         fill="currentColor"
//         className="bi bi-filter-left"
//         viewBox="0 0 16 16"
//       >
//         <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
//       </svg>
//     </button>

//     <div className="container fs-1">
//       <b>
//         <a className="titulo1Dieta" href="/gym">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="40"
//             height="40"
//             fill="currentColor"
//             className="bi bi-arrow-left"
//             viewBox="0 0 16 16"
//           >
//             <path
//               fill-rule="evenodd"
//               d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
//             />
//           </svg>{" "}
//           Home
//         </a>{" "}
//         / Dieta
//       </b>
//     </div>

//     <div
//       className="offcanvas offcanvas-start"
//       data-bs-scroll="true"
//       tabindex="-1"
//       id="offcanvasWithBothOptions"
//       aria-labelledby="offcanvasWithBothOptionsLabel"
//     >
//       <div className="offcanvas-header">
//         <h2 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
//           ControlZ
//         </h2>
//         <button
//           type="button"
//           className="btn-close"
//           data-bs-dismiss="offcanvas"
//           aria-label="Close"
//         ></button>
//       </div>
//       <div className="offcanvas-body">
//         <p>
//           Try scrolling the rest of the page to see this option in action.
//         </p>
//       </div>
//     </div>

//     <div className="container imagenDieta"></div>
//     <div className="contCalorias containe">
//       <img className="imgK" src={fotoPaint} alt="" />
//     </div>
//     <div className="container alimentos">
//       <div className="row">
//         <div className="col-3 desayuno">
//           Desayuno{" "}
//           <button className="bi1">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="bi bi-file-plus"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
//               <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
//             </svg>
//           </button>
//           <div className="container mt-5 cuadroInfo w-75">
//             Por favor pulse el icono &nbsp
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="bi bi-file-plus"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
//               <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
//             </svg>
//             &nbsp para poder añadir alimentos.
//           </div>
//         </div>

//         <div className="col-3 almuerzo">
//           Almuerzo{" "}
//           <button className="bi1">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="bi bi-file-plus"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
//               <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
//             </svg>
//           </button>
//           <div className="container mt-5 cuadroInfo w-75">
//             Por favor pulse el icono &nbsp
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="bi bi-file-plus"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
//               <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
//             </svg>
//             &nbsp para poder añadir alimentos.
//           </div>
//         </div>

//         <div className="col-3 cena">
//           Cena{" "}
//           <button className="bi1">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="bi bi-file-plus"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
//               <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
//             </svg>
//           </button>
//           <div className="container mt-5 cuadroInfo w-75">
//             Por favor pulse el icono &nbsp
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="bi bi-file-plus"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
//               <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
//             </svg>
//             &nbsp para poder añadir alimentos.
//           </div>
//         </div>

//         <div className="col-3 extra">
//           Extra{" "}
//           <button className="bi1">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="bi bi-file-plus"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
//               <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
//             </svg>
//           </button>
//           <div className="container mt-5 cuadroInfo w-75">
//             Por favor pulse el icono &nbsp
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               fill="currentColor"
//               className="bi bi-file-plus"
//               viewBox="0 0 16 16"
//             >
//               <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
//               <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
//             </svg>
//             &nbsp para poder añadir alimentos.
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <Footer />
// </div>