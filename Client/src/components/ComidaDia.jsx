import axios from "axios";
import { useEffect, useState } from 'react';

const Desayuno = ({ nombre, calorias, AbrirModal, img, add, last, Horavalor }) => {
  const [Comidas, setComidas] = useState([{}]);

  useEffect(() => {
    axios.post('http://localhost:8081/getDieta')
      .then((res) => {
        console.log("Dieta obtenida:", res);
        let Comidass = res.data.dias["2024-02-13"].desayuno;
        setComidas(Comidass)
      })
      .catch((error) => {
        console.error("Error al obtener dieta:", error);
      });
  }, []);

  return (
    <div className={`tw-border-gray-400 tw-w-full tw-flex tw-flex-wrap tw-h-1/4 lg:tw-items-start  lg:tw-border-b-0 lg:tw-h-full ${last ? "" : "tw-border-b lg:tw-border-r-2"}`}>
      <div className="tw-gap-2 tw-w-full tw-flex tw-items-center lg:tw-flex-col lg:tw-justify-center lg:tw-px-5">
        <div className="tw-w-[19%] sm:tw-w-[12%] lg:tw-w-full lg:tw-flex lg:tw-justify-center lg:tw-items-center tw-gap-[10%]  lg:tw-border-b tw-border-gray-400">
          <div className="lg:tw-flex tw-flex-wrap tw-w-full " >
            <span className="tw-hidden lg:tw-block tw-text-lg tw-font-bold lg:tw-w-full lg:tw-text-center">{nombre}</span>
            <span className="tw-w-full tw-text-xs sm:tw-text-base tw-hidden lg:tw-block lg:tw-w-full lg:tw-text-center">({calorias} kcal)</span>
          </div>
          <img src={img} className="tw-w-full tw-h-full lg:tw-w-1/2 tw-max-w-[74px] tw-max-y-[74px] lg:tw-hidden " />
          <div className="tw-hidden lg:tw-flex lg:tw-justify-end ">
            <img src={add} className="tw-w-[13%] sm:tw-w-[8%] tw-mt-[-1%] tw-cursor-pointer lg:tw-w-[2rem] lg:tw-absolute lg:tw-items-center" alt="Agregar" onClick={AbrirModal} />
          </div>
        </div>
        <div className="tw-w-full tw-flex tw-items-center tw-flex-wrap tw-justify-between ">
          <div className="tw-flex tw-ms-2 tw-flex-wrap tw-items-center sm:tw-px-2 lg:tw-text-left lg:tw-ms-0 lg:tw-px-0 lg:tw-w-full ">

            <span className="tw-w-full tw-font-bold sm:tw-text-base lg:tw-hidden lg:tw-text-left">{nombre}</span>
            <span className="tw-w-full tw-text-xs tw-text-gray-200 sm:tw-text-sm lg:tw-hidden">{calorias} kcal</span>

            <div className="tw-hidden lg:tw-w-full lg:tw-block ">
              {/* mapa alimentos */}
              {
                Comidas && Comidas.length > 0 && (
                  Comidas.map((alimento, index) => {
                    return (
                      <div key={index} className="tw-w-full tw-flex tw-justify-between tw-items-center tw-px-2 tw-my-1 tw-border-b tw-border-gray-400 tw-py-1">
                        <p className="tw-w-full tw-flex tw-justify-between tw-items-center lg:tw-text-sm">{alimento.comida} <span className="tw-w-1/2 tw-flex tw-justify-end tw-text-red-400 ">({alimento.calorias} kcal)</span> </p>
                      </div>
                    );
                  })
                )
              }
            </div>

          </div>
          <img src={add} className="tw-w-[13%]  sm:tw-w-[8%] tw-cursor-pointer lg:tw-hidden tw-max-w-[45px] tw-max-y-[45px]" alt="Agregar" onClick={AbrirModal} />
        </div>
      </div>
    </div>
  );
};

//Exact same component for Almuerzo
const Almuerzo = ({ nombre, calorias, AbrirModal, img, add, last, Horavalor }) => {
  const [Comidas, setComidas] = useState([{}]);
  useEffect(() => {
    axios.post('http://localhost:8081/getDieta')
      .then((res) => {
        console.log("Dieta obtenida:", res);
        let Comidass = res.data.dias["2024-02-13"].almuerzo;
        setComidas(Comidass)
      })
      .catch((error) => {
        console.error("Error al obtener dieta:", error);
      });
  }, []);

  return (
    <div className={`tw-border-gray-400 tw-w-full tw-flex tw-flex-wrap tw-h-1/4 lg:tw-items-start  lg:tw-border-b-0 lg:tw-h-full ${last ? "" : "tw-border-b lg:tw-border-r-2"}`}>
      <div className="tw-gap-2 tw-w-full tw-flex tw-items-center lg:tw-flex-col lg:tw-justify-center lg:tw-px-5">
        <div className="tw-w-[19%] sm:tw-w-[12%] lg:tw-w-full lg:tw-flex lg:tw-justify-center lg:tw-items-center tw-gap-[10%]  lg:tw-border-b tw-border-gray-400">
          <div className="lg:tw-flex tw-flex-wrap tw-w-full " >
            <span className="tw-hidden lg:tw-block tw-text-lg tw-font-bold lg:tw-w-full lg:tw-text-center">{nombre}</span>
            <span className="tw-w-full tw-text-xs sm:tw-text-base tw-hidden lg:tw-block lg:tw-w-full lg:tw-text-center">({calorias} kcal)</span>
          </div>
          <img src={img} className="tw-w-full tw-h-full lg:tw-w-1/2 tw-max-w-[74px] tw-max-y-[74px] lg:tw-hidden " />
          <div className="tw-hidden lg:tw-flex lg:tw-justify-end ">
            <img src={add} className="tw-w-[13%] sm:tw-w-[8%] tw-mt-[-1%] tw-cursor-pointer lg:tw-w-[2rem] lg:tw-absolute lg:tw-items-center" alt="Agregar" onClick={AbrirModal} />
          </div>
        </div>
        <div className="tw-w-full tw-flex tw-items-center tw-flex-wrap tw-justify-between ">
          <div className="tw-flex tw-ms-2 tw-flex-wrap tw-items-center sm:tw-px-2 lg:tw-text-left lg:tw-ms-0 lg:tw-px-0 lg:tw-w-full ">

            <span className="tw-w-full tw-font-bold sm:tw-text-base lg:tw-hidden lg:tw-text-left">{nombre}</span>
            <span className="tw-w-full tw-text-xs tw-text-gray-200 sm:tw-text-sm lg:tw-hidden">{calorias} kcal</span>

            <div className="tw-hidden lg:tw-w-full lg:tw-block ">
              {/* mapa alimentos */}
              {
                Comidas && Comidas.length > 0 && (
                  Comidas.map((alimento, index) => {
                    return (
                      <div key={index} className="tw-w-full tw-flex tw-justify-between tw-items-center tw-px-2 tw-my-1 tw-border-b tw-border-gray-400 tw-py-1">
                        <p className="tw-w-full tw-flex tw-justify-between tw-items-center lg:tw-text-sm">{alimento.comida} <span className="tw-w-1/2 tw-flex tw-justify-end tw-text-red-400 ">({alimento.calorias} kcal)</span> </p>
                      </div>
                    );
                  })
                )
              }
            </div>

          </div>
          <img src={add} className="tw-w-[13%]  sm:tw-w-[8%] tw-cursor-pointer lg:tw-hidden tw-max-w-[45px] tw-max-y-[45px]" alt="Agregar" onClick={AbrirModal} />
        </div>
      </div>
    </div>
  );
}


const Cena = ({ nombre, calorias, AbrirModal, img, add, last, Horavalor }) => {
  const [reload, setReload] = useState(false);

  const [Comidas, setComidas] = useState([{}]);
  useEffect(() => {
    axios.post('http://localhost:8081/getDieta')
      .then((res) => {
        console.log("Dieta obtenida:", res);
        let Comidass = res.data.dias["2024-02-13"].cena;
        setComidas(Comidass)
      })
      .catch((error) => {
        console.error("Error al obtener dieta:", error);
      });
  }, [reload]);



  return (
    <div className={`tw-border-gray-400 tw-w-full tw-flex tw-flex-wrap tw-h-1/4 lg:tw-items-start  lg:tw-border-b-0 lg:tw-h-full ${last ? "" : "tw-border-b lg:tw-border-r-2"}`}>
      <div className="tw-gap-2 tw-w-full tw-flex tw-items-center lg:tw-flex-col lg:tw-justify-center lg:tw-px-5">
        <div className="tw-w-[19%] sm:tw-w-[12%] lg:tw-w-full lg:tw-flex lg:tw-justify-center lg:tw-items-center tw-gap-[10%]  lg:tw-border-b tw-border-gray-400">
          <div className="lg:tw-flex tw-flex-wrap tw-w-full " >
            <span className="tw-hidden lg:tw-block tw-text-lg tw-font-bold lg:tw-w-full lg:tw-text-center">{nombre}</span>
            <span className="tw-w-full tw-text-xs sm:tw-text-base tw-hidden lg:tw-block lg:tw-w-full lg:tw-text-center">({calorias} kcal)</span>
          </div>
          <img src={img} className="tw-w-full tw-h-full lg:tw-w-1/2 tw-max-w-[74px] tw-max-y-[74px] lg:tw-hidden " />
          <div className="tw-hidden lg:tw-flex lg:tw-justify-end ">
            <img src={add} className="tw-w-[13%] sm:tw-w-[8%] tw-mt-[-1%] tw-cursor-pointer lg:tw-w-[2rem] lg:tw-absolute lg:tw-items-center" alt="Agregar" onClick={AbrirModal} />
          </div>
        </div>
        <div className="tw-w-full tw-flex tw-items-center tw-flex-wrap tw-justify-between ">
          <div className="tw-flex tw-ms-2 tw-flex-wrap tw-items-center sm:tw-px-2 lg:tw-text-left lg:tw-ms-0 lg:tw-px-0 lg:tw-w-full ">

            <span className="tw-w-full tw-font-bold sm:tw-text-base lg:tw-hidden lg:tw-text-left">{nombre}</span>
            <span className="tw-w-full tw-text-xs tw-text-gray-200 sm:tw-text-sm lg:tw-hidden">{calorias} kcal</span>

            <div className="tw-hidden lg:tw-w-full lg:tw-block ">
              {/* mapa alimentos */}
              {
                Comidas && Comidas.length > 0 && (
                  Comidas.map((alimento, index) => {
                    return (
                      <div key={index} className="tw-w-full tw-flex tw-justify-between tw-items-center tw-px-2 tw-my-1 tw-border-b tw-border-gray-400 tw-py-1">
                        <p className="tw-w-full tw-flex tw-justify-between tw-items-center lg:tw-text-sm">{alimento.comida} <span className="tw-w-1/2 tw-flex tw-justify-end tw-text-red-400 ">({alimento.calorias} kcal)</span> </p>
                      </div>
                    );
                  })
                )
              }
            </div>

          </div>
          <img src={add} className="tw-w-[13%]  sm:tw-w-[8%] tw-cursor-pointer lg:tw-hidden tw-max-w-[45px] tw-max-y-[45px]" alt="Agregar" onClick={AbrirModal} />
        </div>
      </div>
    </div>
  );
}


const Extra = ({ nombre, calorias, AbrirModal, img, add, last, Horavalor }) => {
  const [Comidas, setComidas] = useState([{}]);
  useEffect(() => {
    axios.post('http://localhost:8081/getDieta')
      .then((res) => {
        console.log("Dieta obtenida:", res);
        let Comidass = res.data.dias["2024-02-13"].extra;
        setComidas(Comidass)
      })
      .catch((error) => {
        console.error("Error al obtener dieta:", error);
      });
  }, []);

  return (
    <div className={`tw-border-gray-400 tw-w-full tw-flex tw-flex-wrap tw-h-1/4 lg:tw-items-start  lg:tw-border-b-0 lg:tw-h-full ${last ? "" : "tw-border-b lg:tw-border-r-2"}`}>
      <div className="tw-gap-2 tw-w-full tw-flex tw-items-center lg:tw-flex-col lg:tw-justify-center lg:tw-px-5">
        <div className="tw-w-[19%] sm:tw-w-[12%] lg:tw-w-full lg:tw-flex lg:tw-justify-center lg:tw-items-center tw-gap-[10%]  lg:tw-border-b tw-border-gray-400">
          <div className="lg:tw-flex tw-flex-wrap tw-w-full " >
            <span className="tw-hidden lg:tw-block tw-text-lg tw-font-bold lg:tw-w-full lg:tw-text-center">{nombre}</span>
            <span className="tw-w-full tw-text-xs sm:tw-text-base tw-hidden lg:tw-block lg:tw-w-full lg:tw-text-center">({calorias} kcal)</span>
          </div>
          <img src={img} className="tw-w-full tw-h-full lg:tw-w-1/2 tw-max-w-[74px] tw-max-y-[74px] lg:tw-hidden " />
          <div className="tw-hidden lg:tw-flex lg:tw-justify-end ">
            <img src={add} className="tw-w-[13%] sm:tw-w-[8%] tw-mt-[-1%] tw-cursor-pointer lg:tw-w-[2rem] lg:tw-absolute lg:tw-items-center" alt="Agregar" onClick={AbrirModal} />
          </div>
        </div>
        <div className="tw-w-full tw-flex tw-items-center tw-flex-wrap tw-justify-between ">
          <div className="tw-flex tw-ms-2 tw-flex-wrap tw-items-center sm:tw-px-2 lg:tw-text-left lg:tw-ms-0 lg:tw-px-0 lg:tw-w-full ">

            <span className="tw-w-full tw-font-bold sm:tw-text-base lg:tw-hidden lg:tw-text-left">{nombre}</span>
            <span className="tw-w-full tw-text-xs tw-text-gray-200 sm:tw-text-sm lg:tw-hidden">{calorias} kcal</span>

            <div className="tw-hidden lg:tw-w-full lg:tw-block ">
              {/* mapa alimentos */}
              {
                Comidas && Comidas.length > 0 && (
                  Comidas.map((alimento, index) => {
                    return (
                      <div key={index} className="tw-w-full tw-flex tw-justify-between tw-items-center tw-px-2 tw-my-1 tw-border-b tw-border-gray-400 tw-py-1">
                        <p className="tw-w-full tw-flex tw-justify-between tw-items-center lg:tw-text-sm">{alimento.comida} <span className="tw-w-1/2 tw-flex tw-justify-end tw-text-red-400 ">({alimento.calorias} kcal)</span> </p>
                      </div>
                    );
                  })
                )
              }
            </div>

          </div>
          <img src={add} className="tw-w-[13%]  sm:tw-w-[8%] tw-cursor-pointer lg:tw-hidden tw-max-w-[45px] tw-max-y-[45px]" alt="Agregar" onClick={AbrirModal} />
        </div>
      </div>
    </div>
  );
}


export { Desayuno, Almuerzo, Cena, Extra }

