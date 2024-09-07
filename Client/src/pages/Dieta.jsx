export default Dieta;
import Navbar from "../components/Navbar";
import add from '../img/add (1).png'
import FoodModal from "../components/Dieta/FoodModal";
import { useState, useEffect } from "react";
import cafe from "../img/Deus_Coffee.png"
import Footer from "../components/Footer";
import Grafica from "../components/Dieta/GraficaDieta";
import { Desayuno, Almuerzo, Cena, Extra } from "../components/Dieta/ComidaDia";
import axios from "axios";
import LoginRequiredModal from "../components/LoginRequiredModal";

function Dieta() {
  const [usuario, setUsuario] = useState(null);
  const date = new Date();
  const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const [Fecha, setFecha] = useState(formattedDate);
  const [ObjProteinas, setObjProteinas] = useState(100);
  const [ObjCalorias, setObjCalorias] = useState(2100);

  axios.get("https://serverc-4y5e.onrender.com/getSession", {
    withCredentials: true,
  }).then((res) => {
    setUsuario(res.data.usuario);
    if (res.data.usuario.ObjProteinas) {
      setObjProteinas(res.data.usuario.ObjProteinas);
    }
    if (res.data.usuario.ObjCalorias) {
      setObjCalorias(res.data.usuario.ObjCalorias);
    }
  }).catch((error) => {
    console.error(error);
  });

  const [ShowFoodModal, SetShowFoodModal] = useState(false);
  //proteinas
  const [proteinConsumed, setProteinConsumed] = useState(0);
  const [desayunoProteinasConsumed, setDesayunoProteinasConsumed] = useState(0);
  const [almuerzoProteinasConsumed, setAlmuerzoProteinasConsumed] = useState(0);
  const [cenaProteinasConsumed, setCenaProteinasConsumed] = useState(0);
  const [extraProteinasConsumed, setExtraProteinasConsumed] = useState(0);

  //calorias
  const [CaloriasConsumed, setCaloriasConsumed] = useState(0);
  const [desayunoCaloriasConsumed, setDesayunoCaloriasConsumed] = useState(0);
  const [almuerzoCaloriasConsumed, setAlmuerzoCaloriasConsumed] = useState(0);
  const [cenaCaloriasConsumed, setCenaCaloriasConsumed] = useState(0);
  const [extraCaloriasConsumed, setExtraCaloriasConsumed] = useState(0);

  //hidratos
  const [HidratosConsumed, setHidratosConsumed] = useState(0);
  const [HidratosGoal, setHidratosGoal] = useState(100);


  const [Horavalor, setHoravalor] = useState(null);

  const AbrirModal = (value) => {
    setHoravalor(value);
    SetShowFoodModal(true);
  };
  const closeModal = () => {
    SetShowFoodModal(false);
  }

  //proteinas
  const updateProteinasDesayuno = (value) => {
    setDesayunoProteinasConsumed(prevProteinas => prevProteinas + value);
  }
  const updateProteinasAlmuerzo = (value) => {
    setAlmuerzoProteinasConsumed(prevProteinas => prevProteinas + value);
  }
  const updateProteinasCena = (value) => {
    setCenaProteinasConsumed(prevProteinas => prevProteinas + value);
  }
  const updateProteinasExtra = (value) => {
    setExtraProteinasConsumed(prevProteinas => prevProteinas + value);
  }
  const updateProteinConsumed = (value) => {
    setProteinConsumed(prevProteinas => prevProteinas + value);
  };

  //hidratos
  const updateHidratosConsumed = (value) => {
    setHidratosConsumed(prevHidratos => prevHidratos + value);
  };
  //calorias
  const updateCaloriasConsumed = (value) => {
    setCaloriasConsumed(prevCalorias => prevCalorias + value);
  };
  const updateDesayunoCalorias = (value) => {
    setDesayunoCaloriasConsumed(prevCalorias => prevCalorias + value);
  }
  const updateAlmuerzoCalorias = (value) => {
    setAlmuerzoCaloriasConsumed(prevCalorias => prevCalorias + value);
  }
  const updateCenaCalorias = (value) => {
    setCenaCaloriasConsumed(prevCalorias => prevCalorias + value);
  }
  const updateExtraCalorias = (value) => {
    setExtraCaloriasConsumed(prevCalorias => prevCalorias + value);
  }
  const DiaSiguiente = () => {
    //calorias
    setAlmuerzoCaloriasConsumed(0);
    setDesayunoCaloriasConsumed(0);
    setCenaCaloriasConsumed(0);
    setExtraCaloriasConsumed(0);
    setCaloriasConsumed(0);
    //proteinas
    setDesayunoProteinasConsumed(0);
    setAlmuerzoProteinasConsumed(0);
    setCenaProteinasConsumed(0);
    setExtraProteinasConsumed(0);
    setProteinConsumed(0);

    const date = new Date(Fecha);
    date.setDate(date.getDate() + 1);
    const formattedDatee = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    setFecha(formattedDatee);
  }

  const DiaAnterior = () => {
    //calorias
    setAlmuerzoCaloriasConsumed(0);
    setDesayunoCaloriasConsumed(0);
    setCenaCaloriasConsumed(0);
    setExtraCaloriasConsumed(0);
    setCaloriasConsumed(0);
    //proteinas
    setDesayunoProteinasConsumed(0);
    setAlmuerzoProteinasConsumed(0);
    setCenaProteinasConsumed(0);
    setExtraProteinasConsumed(0);
    setProteinConsumed(0);


    const date = new Date(Fecha);
    date.setDate(date.getDate() - 1);
    const formattedDatee = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    setFecha(formattedDatee);
  }


  return (
    <>

      <div className="tw-min-h-screen  tw-bg-[#0d0d0d] tw-pt-[4.87rem] tw-px-4" style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont' }}>


        <Navbar linkHome={"/"} />
        <section className=" tw-w-full  tw-text-white tw-rounded-xl  tw-h-[100vh] ">
          {(usuario === null || usuario === undefined) && <LoginRequiredModal />}

          <div className="lg:tw-px-[10%] tw-w-full tw-h-[38%] ">
            <div className="tw-w-full tw-text-center tw-h-full tw-px-3 tw-pb-3 tw-rounded-xl tw-flex tw-flex-wrap tw-items-center lg:tw-bg-[#292929]">
              <div className="tw-flex tw-justify-between tw-px-5 tw-w-full tw-h-1/4 tw-items-center lg:tw-border-b tw-bg-[#292929] lg:tw-rounded-none tw-rounded-xl lg:tw-border-gray-400">
                <div className="tw-cursor-pointer" onClick={DiaAnterior}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-pointer-events-none tw-w-[30px] tw-h-[30px] sm:tw-w-[50px] sm:tw-h-[50px] ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                  </svg>
                </div>
                <span className="tw-w-full tw-font-bold lg:tw-text-lg tw-text-center tw-flex tw-justify-center tw-items-center"> {Fecha == formattedDate ? 'HOY' : Fecha}  </span>
                <div className="tw-cursor-pointer" onClick={DiaSiguiente}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-pointer-events-none hover:tw-pointer-events-none tw-w-[30px] tw-h-[30px] sm:tw-w-[50px] sm:tw-h-[50px] ">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </div>
              </div>
              <div className="tw-w-full tw-justify-center tw-h-2/3 lg:tw-px-[10%]">
                <div className="tw-flex tw-items-center  tw-w-full tw-h-full tw-justify-between  tw-pointer-events-none  tw-text-sm lg:tw-text-xs tw-px-3 md:tw-px-16 xl:tw-px-[20%] xl:tw-bg-[#292929] tw-rounded-xl">
                  <div className="tw-flex tw-flex-wrap tw-justify-center tw-w-1/5" >
                    <p className="tw-w-full tw-flex tw-justify-center tw-font-bold lg:tw-text-lg"><span >{Math.round(CaloriasConsumed)}</span></p>
                    <p className="tw-w-full tw-flex tw-justify-center lg:tw-text-lg"><span className="">Consumidas</span></p>
                  </div>
                  <div className=" tw-w-2/5 tw-flex tw-items-center tw-justify-center tw-h-full">
                    <Grafica CaloriasConsumed={CaloriasConsumed} CaloriasObjetivo={ObjCalorias} />
                  </div>
                  <div className="tw-flex tw-flex-wrap tw-justify-center tw-w-1/5 " >
                    <p className="tw-w-full tw-flex tw-justify-center tw-font-bold lg:tw-text-lg"><span>{ObjCalorias}</span></p>
                    <p className="tw-w-full tw-flex tw-justify-center lg:tw-text-lg"><span className="">Objetivo</span></p>
                  </div>
                </div>
              </div>
              <div className="tw-w-full tw-flex tw-justify-center lg:tw-pr-[10%]">
                <div className="tw-w-full tw-flex tw-items-center tw-justify-center tw-gap-2 ">
                  <p className=" tw-text-sm sm:tw-text-base lg:tw-text-lg">Proteinas: {Math.round(proteinConsumed)}</p>
                  <progress value={proteinConsumed} max={ObjProteinas} className="tw-h-2 tw-w-5/6"></progress>
                </div>
              </div>
            </div>

          </div>
          <div className="tw-w-full tw-h-1/2 lg:tw-h-2/5 sm:tw-h-1/2 xl:tw-px-[4%] tw-flex tw-items-start tw-mt-[5%] sm:tw-mt-[15%] lg:tw-mt-[5%]">
            <div className=" tw-w-full tw-h-full lg:tw-flex-nowrap tw-bg-[#292929] tw-roudned-md tw-flex tw-flex-wrap tw-justify-between tw-p-3 tw-rounded-xl tw-px-5">
              <Desayuno nombre={"Desayuno"} calorias={desayunoCaloriasConsumed} proteinas={desayunoProteinasConsumed} img={cafe} add={add} AbrirModal={() => AbrirModal("desayuno")} updateCaloriasConsumed={updateCaloriasConsumed} updateProteinConsumed={updateProteinConsumed} updateProteinasDesayuno={updateProteinasDesayuno} updateDesayunoCalorias={updateDesayunoCalorias} updateHidratosConsumed={updateHidratosConsumed} usuario={usuario} Fecha={Fecha} />
              <Almuerzo nombre={"Almuerzo"} calorias={almuerzoCaloriasConsumed} proteinas={almuerzoProteinasConsumed} img={cafe} add={add} AbrirModal={() => AbrirModal("almuerzo")} updateCaloriasConsumed={updateCaloriasConsumed} updateProteinConsumed={updateProteinConsumed} updateProteinasAlmuerzo={updateProteinasAlmuerzo} updateAlmuerzoCalorias={updateAlmuerzoCalorias} updateHidratosConsumed={updateHidratosConsumed} usuario={usuario} Fecha={Fecha} />
              <Cena nombre={"Cena"} calorias={cenaCaloriasConsumed} proteinas={cenaProteinasConsumed} img={cafe} add={add} AbrirModal={() => AbrirModal("cena")} updateCaloriasConsumed={updateCaloriasConsumed} updateProteinConsumed={updateProteinConsumed} updateProteinasCena={updateProteinasCena} updateCenaCalorias={updateCenaCalorias} updateHidratosConsumed={updateHidratosConsumed} usuario={usuario} Fecha={Fecha} />
              <Extra nombre={"Extra"} calorias={extraCaloriasConsumed} proteinas={extraProteinasConsumed} img={cafe} add={add} AbrirModal={() => AbrirModal("extra")} updateCaloriasConsumed={updateCaloriasConsumed} updateProteinConsumed={updateProteinConsumed} updateProteinasExtra={updateProteinasExtra} updateExtraCalorias={updateExtraCalorias} updateHidratosConsumed={updateHidratosConsumed} usuario={usuario} Fecha={Fecha} last={true} />
            </div>
          </div>
        </section>

        {/* Renderizar el modal */}
        {ShowFoodModal && <FoodModal closeModal={closeModal} Horavalor={Horavalor} usuario={usuario} Fecha={Fecha} />}

        <hr />

      </div>
      <Footer />
    </>
  );
}
