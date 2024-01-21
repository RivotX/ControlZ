export default Dieta;
import Navbar from "../componentes/Navbar";
import Footer from "../componentes/Footer";
import fotoPaint from "../img/image.png";
import FoodModal from "../componentes/FoodModal";
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
  const [valorRegex, setValorRegex] = useState('');
  const [resultados, setResultados] = useState(null);



  const handleConsulta = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/consultar_comidas', {
        valor_regex: valorRegex
      });

      setResultados(response.data.resultados);
    } catch (error) {
      console.error('Error al consultar comidas:', error);
    }
  }

  return (
    <div className="tw-min-h-screen tw-pt-16 tw-bg-gradient-to-b tw-from-gray-700 tw-via-gray-900 tw-via-20% tw-to-black tw-to-50%" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont' }}>
      {/* Navbar es una referencia a otro componente que debes tener definido */}
      <Navbar linkHome={"/gym"} />
      <div className="tw-flex tw-justify-center tw-flex-wrap">
        <button className="tw-w-full tw-bg-blue-500 tw-hover:bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded" onClick={AbrirModal}>Añadir Alimento</button>
      </div>

      <div>
        <label htmlFor="valorRegex">Valor del Regex:</label>
        <input
          type="text"
          id="valorRegex"
          value={valorRegex}
          onChange={(e) => setValorRegex(e.target.value)}
        />
        <button onClick={handleConsulta}>Consultar Comidas</button>

        {resultados && (
          <div>
            <h2>Resultados:</h2>
            <pre>{JSON.stringify(resultados, null, 2)}</pre>
          </div>
        )}
      </div>

      {/* Renderizar el modal */}
      {ShowFoodModal && (
        <FoodModal closeModal={closeModal} />
      )}
    </div>
  );
};




// <div className="container-fluid bodyDieta">
//   <div className="container-fluid">
//     <button
//       className="botonDieta  btn "
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

//     <div className=" container fs-1">
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
//     <div className="alimentos container">
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
//           <div className="container cuadroInfo mt-5 w-75">
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
//           <div className="container cuadroInfo mt-5 w-75">
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
//           <div className="container cuadroInfo mt-5 w-75">
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
//           <div className="container cuadroInfo mt-5 w-75">
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