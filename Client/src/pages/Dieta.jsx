export default Dieta;
import Navbar from "../components/Navbar";
import add from '../img/add (1).png'
import FoodModal from "../components/FoodModal";
import { useState } from "react";
import cafe from "../img/Deus_Coffee.png"
import Footer from "../components/Footer";
import Grafica from "../components/GraficaDieta";


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
        <div className="tw-flex tw-justify-center tw-w-full tw-flex-wrap tw-text-white tw-rounded-md">
          <div className="tw-w-full tw-bg-[#292929] tw-mt-3 tw-text-center tw-p-3">
            <div className="tw-flex tw-justify-between tw-px-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-[30px] tw-h-[30px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>

              <span className="tw-w-full tw-font-bold"> HOY </span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-[30px] tw-h-[30px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </div>


          </div>
          <div className="tw-flex tw-items-center tw-justify-between tw-mt-5 tw-pointer-events-none tw-w-full tw-text-sm tw-px-3">
          <div className="tw-flex tw-flex-wrap tw-justify-center tw-w-1/5" >
              <p className="tw-w-full tw-flex tw-justify-center tw-font-bold"><span>2421</span></p>
              <p className="tw-w-full tw-flex tw-justify-center"><span>Consumidas</span></p>
            </div>
            <div className="tw-w-2/5">
              <Grafica />
            </div>
            <div className="tw-flex tw-flex-wrap tw-justify-center tw-w-1/5" >
              <p className="tw-w-full tw-flex tw-justify-center tw-font-bold"><span>3000</span></p>
              <p className="tw-w-full tw-flex tw-justify-center"><span>Objetivo</span></p>
            </div>
          </div>
          <div className="tw-w-full tw-min-h-[60vh] tw-bg-[#292929] tw-roudned-md tw-flex tw-flex-wrap tw-mb-[5vh] tw-justify-between tw-p-3 tw-rounded-md tw-mt-[5vh] tw-px-5">

            <div className="tw-border-gray-400 tw-w-full tw-flex tw-flex-wrap tw-h-1/4 tw-border-b " >
              <div className="gap-2 tw-w-full tw-flex tw-items-center">
                <img src={cafe} className="tw-w-1/5" />
                <div className="tw-w-full tw-flex tw-items-center tw-flex-wrap tw-justify-between">
                  <div className="tw-flex tw-ml-2 tw-flex-wrap tw-items-center">
                    <span className="tw-w-full tw-font-bold">Desayuno</span>
                    <span className="tw-w-full tw-text-xs tw-text-gray-200">500 kcal</span>
                  </div>
                  <img src={add} className="tw-w-2/12" onClick={AbrirModal} />
                </div>
              </div>
            </div>
            <div className="tw-border-gray-400 tw-w-full tw-flex tw-flex-wrap tw-h-1/4 tw-border-b ">
              <div className="gap-2 tw-w-full tw-flex tw-items-center">
                <img src={cafe} className="tw-w-1/5" />
                <div className="tw-w-full tw-flex tw-items-center tw-flex-wrap tw-justify-between">
                  <div className="tw-flex tw-ml-2 tw-flex-wrap tw-items-center">
                    <span className="tw-w-full tw-font-bold">Desayuno</span>
                    <span className="tw-w-full tw-text-xs">500 kcal</span>
                  </div>
                  <img src={add} className="tw-w-2/12" onClick={AbrirModal} />
                </div>
              </div>
            </div>
            <div className="tw-border-gray-400 tw-w-full tw-flex tw-flex-wrap tw-h-1/4 tw-border-b ">
              <div className="gap-2 tw-w-full tw-flex tw-items-center">
                <img src={cafe} className="tw-w-1/5" />
                <div className="tw-w-full tw-flex tw-items-center tw-flex-wrap tw-justify-between">
                  <div className="tw-flex tw-ml-2 tw-flex-wrap tw-items-center">
                    <span className="tw-w-full tw-font-bold">Desayuno</span>
                    <span className="tw-w-full tw-text-xs">500 kcal</span>
                  </div>
                  <img src={add} className="tw-w-2/12" onClick={AbrirModal} />
                </div>
              </div>
            </div>
            <div className="tw-border-gray-400 tw-w-full tw-flex tw-flex-wrap tw-h-1/4 ">
              <div className="gap-2 tw-w-full tw-flex tw-items-center">
                <img src={cafe} className="tw-w-1/5" />
                <div className="tw-w-full tw-flex tw-items-center tw-flex-wrap tw-justify-between">
                  <div className="tw-flex tw-ml-2 tw-flex-wrap tw-items-center">
                    <span className="tw-w-full tw-font-bold">Desayuno</span>
                    <span className="tw-w-full tw-text-xs">500 kcal</span>
                  </div>
                  <img src={add} className="tw-w-2/12" onClick={AbrirModal} />
                </div>
              </div>
            </div>

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
