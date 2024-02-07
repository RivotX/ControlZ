export default Dieta;
import Navbar from "../components/Navbar";
import add from '../img/add (1).png'
import FoodModal from "../components/FoodModal";
import { useState } from "react";
import cafe from "../img/Deus_Coffee.png"
import Footer from "../components/Footer";
import Grafica from "../components/GraficaDieta";
import ComidaDia from "../components/ComidaDia";


function Dieta() {
  const [ShowFoodModal, SetShowFoodModal] = useState(false);

  const AbrirModal = () => {
    SetShowFoodModal(true);
  };
  const closeModal = () => {
    SetShowFoodModal(false);
  }

  return (
    <>
      <div className="tw-min-h-screen  tw-bg-[#0d0d0d] tw-pt-[4.87rem] tw-px-4" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont' }}>
        <Navbar linkHome={"/gym"} />
        <div className="tw-flex tw-justify-center tw-w-full tw-flex-wrap tw-text-white tw-rounded-md tw-h-[100vh] tw-items-center ">
          <div className="tw-w-full tw-bg-[#292929] tw-mt-3 tw-text-center tw-p-3 tw-rounded-md sm:tw-h-[10vh] tw-flex tw-items-center">
            <div className="tw-flex tw-justify-between tw-px-5 tw-w-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-cursor-pointer tw-w-[30px] tw-h-[30px] sm:tw-w-[50px] sm:tw-h-[50px] ">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>

              <span className="tw-w-full tw-font-bold sm:tw-text-3xl tw-text-center tw-flex tw-justify-center tw-items-center "> HOY </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-cursor-pointer hover:tw-pointer-events-none tw-w-[30px] tw-h-[30px] sm:tw-w-[50px] sm:tw-h-[50px] ">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>
          </div>
          <div className="tw-flex tw-items-center tw-h-[20vh] tw-justify-between tw-mt-5 tw-pointer-events-none tw-w-full tw-text-sm tw-px-3 sm:tw-px-16">
            <div className="tw-flex tw-flex-wrap tw-justify-center tw-w-1/5" >
              <p className="tw-w-full tw-flex tw-justify-center tw-font-bold sm:tw-text-3xl"><span>2421</span></p>
              <p className="tw-w-full tw-flex tw-justify-center sm:tw-text-3xl"><span>Consumidas</span></p>
            </div>
            <div className="tw-w-2/5 tw-flex tw-items-center tw-justify-center tw-h-full">
              <Grafica />
            </div>
            <div className="tw-flex tw-flex-wrap tw-justify-center tw-w-1/5" >
              <p className="tw-w-full tw-flex tw-justify-center tw-font-bold sm:tw-text-3xl"><span>3000</span></p>
              <p className="tw-w-full tw-flex tw-justify-center sm:tw-text-3xl"><span>Objetivo</span></p>
            </div>
          </div>
          <div className="tw-w-full tw-h-[60vh] sm:tw-h-[40vh]  tw-bg-[#292929] tw-roudned-md tw-flex tw-flex-wrap tw-mb-[5vh] tw-justify-between tw-p-3 tw-rounded-md tw-mt-[5vh] tw-px-5">

            <ComidaDia nombre={"Desayuno"} calorias={"500"} img={cafe} add={add} AbrirModal={AbrirModal} />
            <ComidaDia nombre={"Almuerzo"} calorias={"123123"} img={cafe} add={add} AbrirModal={AbrirModal} />
            <ComidaDia nombre={"Cena"} calorias={"123123"} img={cafe} add={add} AbrirModal={AbrirModal} />
            <ComidaDia nombre={"Extra"} calorias={"123123"} img={cafe} add={add} AbrirModal={AbrirModal} last={true} />

          </div>
        </div>

        {/* Renderizar el modal */}
        {ShowFoodModal && <FoodModal closeModal={closeModal} />}

        <hr />

      </div>
      <Footer />
    </>
  );
}
