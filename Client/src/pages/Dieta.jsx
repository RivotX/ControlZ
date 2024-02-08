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
        <section className=" tw-w-full  tw-text-white tw-rounded-xl tw-mb-[5vh] tw-h-[100vh] ">
          <div className="lg:tw-px-[10%] tw-w-full tw-h-[35%] ">
            <div className="tw-w-full tw-bg-slate-800 tw-text-center tw-h-full tw-px-3 tw-pb-3 tw-rounded-xl tw-flex tw-flex-wrap tw-items-center ">
              <div className="tw-flex tw-justify-between tw-px-5 tw-w-full tw-h-1/3 tw-items-center tw-border-b tw-border-gray-400">
                <div className="tw-cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-pointer-events-none tw-w-[30px] tw-h-[30px] sm:tw-w-[50px] sm:tw-h-[50px] ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </div>
                <span className="tw-w-full tw-font-bold sm:tw-text-xl tw-text-center tw-flex tw-justify-center tw-items-center "> HOY </span>
                <div className="tw-cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-pointer-events-none hover:tw-pointer-events-none tw-w-[30px] tw-h-[30px] sm:tw-w-[50px] sm:tw-h-[50px] ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
              <div className="tw-w-full tw-justify-center tw-h-2/3">
                <div className="tw-flex tw-items-center  tw-w-full tw-h-full tw-justify-between  tw-pointer-events-none  tw-text-sm tw-px-3 sm:tw-px-16 xl:tw-px-[20%] xl:tw-bg-slate-800">
                  <div className="tw-flex tw-flex-wrap tw-justify-center tw-w-1/5" >
                    <p className="tw-w-full tw-flex tw-justify-center tw-font-bold sm:tw-text-xl"><span >2421</span></p>
                    <p className="tw-w-full tw-flex tw-justify-center sm:tw-text-xl"><span  className="tw-text-cyan-300">Consumidas</span></p>
                  </div>
                  <div className=" tw-w-2/5 tw-flex tw-items-center tw-justify-center tw-h-full">
                    <Grafica />
                  </div>
                  <div className="tw-flex tw-flex-wrap tw-justify-center tw-w-1/5" >
                    <p className="tw-w-full tw-flex tw-justify-center tw-font-bold sm:tw-text-xl"><span>3000</span></p>
                    <p className="tw-w-full tw-flex tw-justify-center sm:tw-text-xl"><span className="tw-text-yellow-400">Objetivo</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tw-w-full tw-h-1/2 lg:tw-h-2/5 sm:tw-h-1/2 xl:tw-px-[4%] tw-flex tw-items-start tw-mt-[25%] sm:tw-mt-[15%] lg:tw-mt-[5%]">
            <div className=" tw-w-full tw-h-full lg:tw-flex-nowrap tw-bg-slate-800 tw-roudned-md tw-flex tw-flex-wrap tw-justify-between tw-p-3 tw-rounded-xl tw-px-5">

              <ComidaDia nombre={"Desayuno"} calorias={"500"} img={cafe} add={add} AbrirModal={AbrirModal} />
              <ComidaDia nombre={"Almuerzo"} calorias={"123123"} img={cafe} add={add} AbrirModal={AbrirModal} />
              <ComidaDia nombre={"Cena"} calorias={"123123"} img={cafe} add={add} AbrirModal={AbrirModal} />
              <ComidaDia nombre={"Extra"} calorias={"123123"} img={cafe} add={add} AbrirModal={AbrirModal} last={true} />

            </div>
          </div>
        </section>

        {/* Renderizar el modal */}
        {ShowFoodModal && <FoodModal closeModal={closeModal} />}

        <hr />

      </div>
      <Footer />
    </>
  );
}
