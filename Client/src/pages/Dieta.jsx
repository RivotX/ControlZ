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

  const [proteinConsumed, setProteinConsumed] = useState(20);
  const [proteinGoal, setProteinGoal] = useState(100);

  const [HidratosConsumed, setHidratosConsumed] = useState(40);
  const [HidratosGoal, setHidratosGoal] = useState(100);


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
        <section className=" tw-w-full  tw-text-white tw-rounded-xl  tw-h-[100vh] ">
          <div className="lg:tw-px-[10%] tw-w-full tw-h-[38%] ">
            <div className="tw-w-full tw-text-center tw-h-full tw-px-3 tw-pb-3 tw-rounded-xl tw-flex tw-flex-wrap tw-items-center lg:tw-bg-[#292929]">
              <div className="tw-flex tw-justify-between tw-px-5 tw-w-full tw-h-1/4 tw-items-center lg:tw-border-b tw-bg-[#292929] lg:tw-rounded-none tw-rounded-xl lg:tw-border-gray-400">
                <div className="tw-cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-pointer-events-none tw-w-[30px] tw-h-[30px] sm:tw-w-[50px] sm:tw-h-[50px] ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </div>
                <span className="tw-w-full tw-font-bold lg:tw-text-lg tw-text-center tw-flex tw-justify-center tw-items-center "> HOY </span>
                <div className="tw-cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-pointer-events-none hover:tw-pointer-events-none tw-w-[30px] tw-h-[30px] sm:tw-w-[50px] sm:tw-h-[50px] ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
              <div className="tw-w-full tw-justify-center tw-h-2/3 lg:tw-px-[10%]">
                <div className="tw-flex tw-items-center  tw-w-full tw-h-full tw-justify-between  tw-pointer-events-none  tw-text-sm lg:tw-text-xs tw-px-3 md:tw-px-16 xl:tw-px-[20%] xl:tw-bg-[#292929] tw-rounded-xl">
                  <div className="tw-flex tw-flex-wrap tw-justify-center tw-w-1/5" >
                    <p className="tw-w-full tw-flex tw-justify-center tw-font-bold lg:tw-text-lg"><span >2421</span></p>
                    <p className="tw-w-full tw-flex tw-justify-center lg:tw-text-lg"><span className="">Consumidas</span></p>
                  </div>
                  <div className=" tw-w-2/5 tw-flex tw-items-center tw-justify-center tw-h-full">
                    <Grafica />
                  </div>
                  <div className="tw-flex tw-flex-wrap tw-justify-center tw-w-1/5 " >
                    <p className="tw-w-full tw-flex tw-justify-center tw-font-bold lg:tw-text-lg"><span>3000</span></p>
                    <p className="tw-w-full tw-flex tw-justify-center lg:tw-text-lg"><span className="">Objetivo</span></p>
                  </div>
                </div>
              </div>
              <div className="tw-w-full tw-flex tw-justify-between tw-gap-1">
                <div className="tw-w-1/2 tw-flex tw-items-center tw-justify-center tw-gap-1 sm:tw-gap-3">

                  <div>Proteinas</div>
                  <progress value={proteinConsumed} max={proteinGoal} className="tw-h-2"></progress>
                </div>
                <div className=" tw-w-1/2 tw-flex tw-items-center tw-gap-1 tw-justify-center sm:tw-gap-3">
                  <div>Hidratos</div>
                  <progress value={HidratosConsumed} max={HidratosGoal} className="tw-h-2 " />
                </div>
              </div>
            </div>

          </div>
          <div className="tw-w-full tw-h-1/2 lg:tw-h-2/5 sm:tw-h-1/2 xl:tw-px-[4%] tw-flex tw-items-start tw-mt-[5%] sm:tw-mt-[15%] lg:tw-mt-[5%]">
            <div className=" tw-w-full tw-h-full lg:tw-flex-nowrap tw-bg-[#292929] tw-roudned-md tw-flex tw-flex-wrap tw-justify-between tw-p-3 tw-rounded-xl tw-px-5">

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
