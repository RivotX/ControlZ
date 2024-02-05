export default Dieta;
import Navbar from "../components/Navbar";
import add from '../img/add (1).png'
import FoodModal from "../components/FoodModal";
import { useState } from "react";
import cafe from "../img/Deus_Coffee.png"
import image from "../img/image.png"
import Footer from "../components/Footer";

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
          <p className="tw-w-full tw-bg-[#292929] tw-mt-3 tw-text-center tw-p-3">(anterior)---- HOY ---(siguente)</p>
          <img src={image}></img>
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
