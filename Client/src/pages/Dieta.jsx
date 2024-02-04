export default Dieta;
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import FoodModal from "../components/FoodModal";
import { useState } from "react";
import ChatComponent from "../components/ChatComponent";


function Dieta() {
  const [ShowFoodModal, SetShowFoodModal] = useState(false);

  const AbrirModal = () => {
    SetShowFoodModal(true);
  };
  const closeModal = () => {
    SetShowFoodModal(false);
  }

  return (
    <div className="tw-min-h-screen  tw-bg-gradient-to-b tw-from-gray-700 tw-via-gray-900 tw-via-20% tw-to-black tw-to-50%" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont' }}>
      <Navbar linkHome={"/gym"} />
      <div className="tw-flex tw-justify-center tw-pt-[4.87rem]">
        <button className="tw-w-1/2 tw-bg-blue-500 tw-hover:bg-blue-700 tw-text-white tw-font-bold tw-py-2 tw-px-4 tw-rounded" onClick={AbrirModal}>Añadir Alimento</button>
      </div>

      {/* Renderizar el modal */}
        {ShowFoodModal && <FoodModal closeModal={closeModal} />}
      {/* <Footer /> */}
      <Footer />


    </div>
  );
}
