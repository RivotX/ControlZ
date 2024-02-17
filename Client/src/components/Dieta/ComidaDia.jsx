import axios from "axios";
import { useEffect, useState } from 'react';

const Desayuno = ({ nombre, calorias, AbrirModal, img, add, last, Horavalor, updateProteinConsumed, updateHidratosConsumed, updateCaloriasConsumed, updateDesayunoCalorias, usuario }) => {
  const [Comidas, setComidas] = useState([{}]);
  const [proteinConsumed, setProteinConsumed] = useState(0);
  const [HidratosConsumed, setHidratosConsumed] = useState(0);
  const [caloriasConsumed, setCaloriasConsumed] = useState(0);

  useEffect(() => {
    updateProteinConsumed(proteinConsumed);
  }, [proteinConsumed]);

  useEffect(() => {
    updateHidratosConsumed(HidratosConsumed);
  }, [HidratosConsumed]);

  useEffect(() => {
    updateCaloriasConsumed(caloriasConsumed);
    updateDesayunoCalorias(caloriasConsumed);
  }, [caloriasConsumed]);

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    console.log("formattedDateEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE", formattedDate)
    axios.post('http://localhost:8081/getDieta/', { id: usuario })
      .then((res) => {
        console.log("Dieta obtenida DESAYUNO:", res);
        if (res && res.data) {
          let Comidass = res.data.dias[formattedDate].desayuno;
          setComidas(Comidass)
          //for each objet.proteinas in comidass, sum them and setProteinConsumed
          let proteinas = Comidass.map((comida) => comida.proteinas * (comida.cantidad / 100));

          let proteinasSum = proteinas.reduce((a, b) => a + b, 0);
          setProteinConsumed(proteinasSum);
          //same for hidratos 
          let hidratos = Comidass.map((comida) => comida.carbohidratos * (comida.cantidad / 100));
          let hidratosSum = hidratos.reduce((a, b) => a + b, 0);
          setHidratosConsumed(hidratosSum);
          //same for calorias
          let calorias = Comidass.map((comida) => (comida.calorias * (comida.cantidad / 100)));
          let caloriasSum = calorias.reduce((a, b) => a + b, 0);
          setCaloriasConsumed(caloriasSum);
        }
      })
      .catch((error) => {
        console.error("Error al obtener dieta:", error);
      });
  }, [AbrirModal]);

  return (
    <div className={`tw-border-gray-400 tw-w-full tw-flex tw-flex-wrap tw-h-1/4 lg:tw-items-start  lg:tw-border-b-0 lg:tw-h-full ${last ? "" : "tw-border-b lg:tw-border-r-2"}`}>
      <div className="tw-gap-2 tw-w-full tw-flex tw-items-center lg:tw-flex-col lg:tw-justify-center lg:tw-px-5">
        <div className="tw-w-[19%] sm:tw-w-[12%] lg:tw-w-full lg:tw-flex lg:tw-justify-center lg:tw-items-center tw-gap-[10%]  lg:tw-border-b tw-border-gray-400">
          <div className="lg:tw-flex tw-flex-wrap tw-w-full " >
            <span className="tw-hidden lg:tw-block tw-text-lg tw-font-bold lg:tw-w-full lg:tw-text-center">{nombre}</span>
            <span className="tw-w-full tw-text-xs sm:tw-text-base tw-hidden lg:tw-block lg:tw-w-full lg:tw-text-center">({Math.round(calorias)} kcal)</span>
          </div>
          <img src={img} className="tw-w-full tw-h-full lg:tw-w-1/2 tw-max-w-[74px] tw-max-y-[74px] lg:tw-hidden " />
          <div className="tw-hidden lg:tw-flex lg:tw-justify-end ">
            <img src={add} className="tw-w-[13%] sm:tw-w-[8%] tw-mt-[-1%] tw-cursor-pointer lg:tw-w-[2rem] lg:tw-absolute lg:tw-items-center" alt="Agregar" onClick={AbrirModal} />
          </div>
        </div>
        <div className="tw-w-full tw-flex tw-items-center tw-flex-wrap tw-justify-between ">
          <div className="tw-flex tw-ms-2 tw-flex-wrap tw-items-center sm:tw-px-2 lg:tw-text-left lg:tw-ms-0 lg:tw-px-0 lg:tw-w-full ">

            <span className="tw-w-full tw-font-bold sm:tw-text-base lg:tw-hidden lg:tw-text-left">{nombre}</span>
            <span className="tw-w-full tw-text-xs tw-text-gray-200 sm:tw-text-sm lg:tw-hidden">
              {calorias && `${Math.round(calorias)} kcal`}
            </span>

            <div className="tw-hidden lg:tw-w-full lg:tw-block ">
              {/* mapa alimentos */}
              {
                Comidas && Comidas.length > 0 && (
                  Comidas.map((alimento, index) => {
                    return (
                      alimento.comida && (
                        <div key={index} className="tw-w-full tw-flex tw-justify-between tw-items-center tw-px-2 tw-my-1 tw-border-b tw-border-gray-400 tw-py-1">
                          <p className="tw-w-full tw-flex tw-justify-between tw-items-center lg:tw-text-sm">{alimento.comida}
                            {alimento.calorias && (
                              <span className="tw-w-1/2 tw-flex tw-justify-end tw-text-red-400">({Math.round(calorias)} kcal)</span>
                            )}
                          </p>
                        </div>
                      )
                    );
                  })
                )}
            </div>

          </div>
          <img src={add} className="tw-w-[13%]  sm:tw-w-[8%] tw-cursor-pointer lg:tw-hidden tw-max-w-[45px] tw-max-y-[45px]" alt="Agregar" onClick={AbrirModal} />
        </div>
      </div>
    </div>
  );
};

//Exact same component for Almuerzo
const Almuerzo = ({ nombre, calorias, AbrirModal, img, add, last, Horavalor, updateProteinConsumed, updateHidratosConsumed, updateCaloriasConsumed, updateAlmuerzoCalorias, usuario }) => {
  const [Comidas, setComidas] = useState([{}]);
  const [proteinConsumed, setProteinConsumed] = useState(0);
  const [HidratosConsumed, setHidratosConsumed] = useState(0);
  const [caloriasConsumed, setCaloriasConsumed] = useState(0);

  useEffect(() => {
    updateProteinConsumed(proteinConsumed);
  }, [proteinConsumed]);
  useEffect(() => {
    updateHidratosConsumed(HidratosConsumed);
  }, [HidratosConsumed]);
  useEffect(() => {
    updateCaloriasConsumed(caloriasConsumed);
    updateAlmuerzoCalorias(caloriasConsumed);

  }, [caloriasConsumed]);

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

    axios.post('http://localhost:8081/getDieta/', { id: usuario })
      .then((res) => {
        console.log("Dieta obtenida ALMUERZO:", res);
        if (res && res.data) {
          let Comidass = res.data.dias[formattedDate].almuerzo;
          setComidas(Comidass)
          //for each objet.proteinas in comidass, sum them and setProteinConsumed
          let proteinas = Comidass.map((comida) => comida.proteinas * (comida.cantidad / 100));

          let proteinasSum = proteinas.reduce((a, b) => a + b, 0);
          setProteinConsumed(proteinasSum);
          //same for hidratos 
          let hidratos = Comidass.map((comida) => comida.carbohidratos * (comida.cantidad / 100));
          let hidratosSum = hidratos.reduce((a, b) => a + b, 0);
          setHidratosConsumed(hidratosSum);
          //same for calorias
          let calorias = Comidass.map((comida) => (comida.calorias * (comida.cantidad / 100)));
          let caloriasSum = calorias.reduce((a, b) => a + b, 0);
          setCaloriasConsumed(caloriasSum);
        }
      })
      .catch((error) => {
        console.error("Error al obtener dieta:", error);
      });
  }, [AbrirModal]);

  return (
    <div className={`tw-border-gray-400 tw-w-full tw-flex tw-flex-wrap tw-h-1/4 lg:tw-items-start  lg:tw-border-b-0 lg:tw-h-full ${last ? "" : "tw-border-b lg:tw-border-r-2"}`}>
      <div className="tw-gap-2 tw-w-full tw-flex tw-items-center lg:tw-flex-col lg:tw-justify-center lg:tw-px-5">
        <div className="tw-w-[19%] sm:tw-w-[12%] lg:tw-w-full lg:tw-flex lg:tw-justify-center lg:tw-items-center tw-gap-[10%]  lg:tw-border-b tw-border-gray-400">
          <div className="lg:tw-flex tw-flex-wrap tw-w-full " >
            <span className="tw-hidden lg:tw-block tw-text-lg tw-font-bold lg:tw-w-full lg:tw-text-center">{nombre}</span>
            <span className="tw-w-full tw-text-xs sm:tw-text-base tw-hidden lg:tw-block lg:tw-w-full lg:tw-text-center">({Math.round(calorias)} kcal)</span>
          </div>
          <img src={img} className="tw-w-full tw-h-full lg:tw-w-1/2 tw-max-w-[74px] tw-max-y-[74px] lg:tw-hidden " />
          <div className="tw-hidden lg:tw-flex lg:tw-justify-end ">
            <img src={add} className="tw-w-[13%] sm:tw-w-[8%] tw-mt-[-1%] tw-cursor-pointer lg:tw-w-[2rem] lg:tw-absolute lg:tw-items-center" alt="Agregar" onClick={AbrirModal} />
          </div>
        </div>
        <div className="tw-w-full tw-flex tw-items-center tw-flex-wrap tw-justify-between ">
          <div className="tw-flex tw-ms-2 tw-flex-wrap tw-items-center sm:tw-px-2 lg:tw-text-left lg:tw-ms-0 lg:tw-px-0 lg:tw-w-full ">

            <span className="tw-w-full tw-font-bold sm:tw-text-base lg:tw-hidden lg:tw-text-left">{nombre}</span>
            <span className="tw-w-full tw-text-xs tw-text-gray-200 sm:tw-text-sm lg:tw-hidden">
              {calorias && `${Math.round(calorias)} kcal`}
            </span>

            <div className="tw-hidden lg:tw-w-full lg:tw-block ">
              {/* mapa alimentos */}
              {
                Comidas && Comidas.length > 0 && (
                  Comidas.map((alimento, index) => {
                    return (
                      alimento.comida && (
                        <div key={index} className="tw-w-full tw-flex tw-justify-between tw-items-center tw-px-2 tw-my-1 tw-border-b tw-border-gray-400 tw-py-1">
                          <p className="tw-w-full tw-flex tw-justify-between tw-items-center lg:tw-text-sm">{alimento.comida}
                            {alimento.calorias && (
                              <span className="tw-w-1/2 tw-flex tw-justify-end tw-text-red-400">({Math.round(calorias)} kcal)</span>
                            )}
                          </p>
                        </div>
                      )
                    );
                  })
                )}
            </div>

          </div>
          <img src={add} className="tw-w-[13%]  sm:tw-w-[8%] tw-cursor-pointer lg:tw-hidden tw-max-w-[45px] tw-max-y-[45px]" alt="Agregar" onClick={AbrirModal} />
        </div>
      </div>
    </div>
  );
};


const Cena = ({ nombre, calorias, AbrirModal, img, add, last, Horavalor, updateProteinConsumed, updateHidratosConsumed, updateCaloriasConsumed, updateCenaCalorias, usuario }) => {
  const [Comidas, setComidas] = useState([{}]);
  const [proteinConsumed, setProteinConsumed] = useState(0);
  const [HidratosConsumed, setHidratosConsumed] = useState(0);
  const [caloriasConsumed, setCaloriasConsumed] = useState(0);

  useEffect(() => {
    updateProteinConsumed(proteinConsumed);
  }, [proteinConsumed]);
  useEffect(() => {
    updateHidratosConsumed(HidratosConsumed);
  }, [HidratosConsumed]);
  useEffect(() => {
    updateCaloriasConsumed(caloriasConsumed);
    updateCenaCalorias(caloriasConsumed);
  }, [caloriasConsumed]);

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

    axios.post('http://localhost:8081/getDieta/', { id: usuario })
      .then((res) => {
        console.log("Dieta obtenida CENA:", res);
        if (res && res.data) {
          let Comidass = res.data.dias[formattedDate].cena;
          setComidas(Comidass)
          //for each objet.proteinas in comidass, sum them and setProteinConsumed
          let proteinas = Comidass.map((comida) => comida.proteinas * (comida.cantidad / 100));

          let proteinasSum = proteinas.reduce((a, b) => a + b, 0);
          setProteinConsumed(proteinasSum);
          //same for hidratos 
          let hidratos = Comidass.map((comida) => comida.carbohidratos * (comida.cantidad / 100));
          let hidratosSum = hidratos.reduce((a, b) => a + b, 0);
          setHidratosConsumed(hidratosSum);
          //same for calorias
          let calorias = Comidass.map((comida) => (comida.calorias * (comida.cantidad / 100)));
          let caloriasSum = calorias.reduce((a, b) => a + b, 0);
          setCaloriasConsumed(caloriasSum);
        }
      })
      .catch((error) => {
        console.error("Error al obtener dieta:", error);
      });
  }, [AbrirModal]);

  return (
    <div className={`tw-border-gray-400 tw-w-full tw-flex tw-flex-wrap tw-h-1/4 lg:tw-items-start  lg:tw-border-b-0 lg:tw-h-full ${last ? "" : "tw-border-b lg:tw-border-r-2"}`}>
      <div className="tw-gap-2 tw-w-full tw-flex tw-items-center lg:tw-flex-col lg:tw-justify-center lg:tw-px-5">
        <div className="tw-w-[19%] sm:tw-w-[12%] lg:tw-w-full lg:tw-flex lg:tw-justify-center lg:tw-items-center tw-gap-[10%]  lg:tw-border-b tw-border-gray-400">
          <div className="lg:tw-flex tw-flex-wrap tw-w-full " >
            <span className="tw-hidden lg:tw-block tw-text-lg tw-font-bold lg:tw-w-full lg:tw-text-center">{nombre}</span>
            <span className="tw-w-full tw-text-xs sm:tw-text-base tw-hidden lg:tw-block lg:tw-w-full lg:tw-text-center">({Math.round(calorias)} kcal)</span>
          </div>
          <img src={img} className="tw-w-full tw-h-full lg:tw-w-1/2 tw-max-w-[74px] tw-max-y-[74px] lg:tw-hidden " />
          <div className="tw-hidden lg:tw-flex lg:tw-justify-end ">
            <img src={add} className="tw-w-[13%] sm:tw-w-[8%] tw-mt-[-1%] tw-cursor-pointer lg:tw-w-[2rem] lg:tw-absolute lg:tw-items-center" alt="Agregar" onClick={AbrirModal} />
          </div>
        </div>
        <div className="tw-w-full tw-flex tw-items-center tw-flex-wrap tw-justify-between ">
          <div className="tw-flex tw-ms-2 tw-flex-wrap tw-items-center sm:tw-px-2 lg:tw-text-left lg:tw-ms-0 lg:tw-px-0 lg:tw-w-full ">

            <span className="tw-w-full tw-font-bold sm:tw-text-base lg:tw-hidden lg:tw-text-left">{nombre}</span>
            <span className="tw-w-full tw-text-xs tw-text-gray-200 sm:tw-text-sm lg:tw-hidden">
              {calorias && `${Math.round(calorias)} kcal`}
            </span>

            <div className="tw-hidden lg:tw-w-full lg:tw-block ">
              {/* mapa alimentos */}
              {
                Comidas && Comidas.length > 0 && (
                  Comidas.map((alimento, index) => {
                    return (
                      alimento.comida && (
                        <div key={index} className="tw-w-full tw-flex tw-justify-between tw-items-center tw-px-2 tw-my-1 tw-border-b tw-border-gray-400 tw-py-1">
                          <p className="tw-w-full tw-flex tw-justify-between tw-items-center lg:tw-text-sm">{alimento.comida}
                            {alimento.calorias && (
                              <span className="tw-w-1/2 tw-flex tw-justify-end tw-text-red-400">({Math.round(calorias)} kcal)</span>
                            )}
                          </p>
                        </div>
                      )
                    );
                  })
                )}
            </div>

          </div>
          <img src={add} className="tw-w-[13%]  sm:tw-w-[8%] tw-cursor-pointer lg:tw-hidden tw-max-w-[45px] tw-max-y-[45px]" alt="Agregar" onClick={AbrirModal} />
        </div>
      </div>
    </div>
  );
};

const Extra = ({ nombre, calorias, AbrirModal, img, add, last, Horavalor, updateProteinConsumed, updateHidratosConsumed, updateCaloriasConsumed, updateExtraCalorias, usuario }) => {
  const [Comidas, setComidas] = useState([{}]);
  const [proteinConsumed, setProteinConsumed] = useState(0);
  const [HidratosConsumed, setHidratosConsumed] = useState(0);
  const [caloriasConsumed, setCaloriasConsumed] = useState(0);

  useEffect(() => {
    updateProteinConsumed(proteinConsumed);
  }, [proteinConsumed]);
  useEffect(() => {
    updateHidratosConsumed(HidratosConsumed);
  }, [HidratosConsumed]);
  useEffect(() => {
    updateCaloriasConsumed(caloriasConsumed);
    updateExtraCalorias(caloriasConsumed);
  }, [caloriasConsumed]);

  useEffect(() => {
    const date = new Date();
    const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;

    axios.post('http://localhost:8081/getDieta/', { id: usuario })
      .then((res) => {
        console.log("Dieta obtenida EXTRA:", res);
        if (res && res.data) {
          let Comidass = res.data.dias[formattedDate].extra;
          setComidas(Comidass)
          //for each objet.proteinas in comidass, sum them and setProteinConsumed
          let proteinas = Comidass.map((comida) => comida.proteinas * (comida.cantidad / 100));

          let proteinasSum = proteinas.reduce((a, b) => a + b, 0);
          setProteinConsumed(proteinasSum);
          //same for hidratos 
          let hidratos = Comidass.map((comida) => comida.carbohidratos * (comida.cantidad / 100));
          let hidratosSum = hidratos.reduce((a, b) => a + b, 0);
          setHidratosConsumed(hidratosSum);
          //same for calorias
          let calorias = Comidass.map((comida) => (comida.calorias * (comida.cantidad / 100)));
          let caloriasSum = calorias.reduce((a, b) => a + b, 0);
          setCaloriasConsumed(caloriasSum);
        }
      })
      .catch((error) => {
        console.error("Error al obtener dieta:", error);
      });
  }, [AbrirModal]);

  return (
    <div className={`tw-border-gray-400 tw-w-full tw-flex tw-flex-wrap tw-h-1/4 lg:tw-items-start  lg:tw-border-b-0 lg:tw-h-full ${last ? "" : "tw-border-b lg:tw-border-r-2"}`}>
      <div className="tw-gap-2 tw-w-full tw-flex tw-items-center lg:tw-flex-col lg:tw-justify-center lg:tw-px-5">
        <div className="tw-w-[19%] sm:tw-w-[12%] lg:tw-w-full lg:tw-flex lg:tw-justify-center lg:tw-items-center tw-gap-[10%]  lg:tw-border-b tw-border-gray-400">
          <div className="lg:tw-flex tw-flex-wrap tw-w-full " >
            <span className="tw-hidden lg:tw-block tw-text-lg tw-font-bold lg:tw-w-full lg:tw-text-center">{nombre}</span>
            <span className="tw-w-full tw-text-xs sm:tw-text-base tw-hidden lg:tw-block lg:tw-w-full lg:tw-text-center">({Math.round(calorias)} kcal)</span>
          </div>
          <img src={img} className="tw-w-full tw-h-full lg:tw-w-1/2 tw-max-w-[74px] tw-max-y-[74px] lg:tw-hidden " />
          <div className="tw-hidden lg:tw-flex lg:tw-justify-end ">
            <img src={add} className="tw-w-[13%] sm:tw-w-[8%] tw-mt-[-1%] tw-cursor-pointer lg:tw-w-[2rem] lg:tw-absolute lg:tw-items-center" alt="Agregar" onClick={AbrirModal} />
          </div>
        </div>
        <div className="tw-w-full tw-flex tw-items-center tw-flex-wrap tw-justify-between ">
          <div className="tw-flex tw-ms-2 tw-flex-wrap tw-items-center sm:tw-px-2 lg:tw-text-left lg:tw-ms-0 lg:tw-px-0 lg:tw-w-full ">

            <span className="tw-w-full tw-font-bold sm:tw-text-base lg:tw-hidden lg:tw-text-left">{nombre}</span>
            <span className="tw-w-full tw-text-xs tw-text-gray-200 sm:tw-text-sm lg:tw-hidden">
              {calorias && `${Math.round(calorias)} kcal`}
            </span>

            <div className="tw-hidden lg:tw-w-full lg:tw-block ">
              {/* mapa alimentos */}
              {
                Comidas && Comidas.length > 0 && (
                  Comidas.map((alimento, index) => {
                    return (
                      alimento.comida && (
                        <div key={index} className="tw-w-full tw-flex tw-justify-between tw-items-center tw-px-2 tw-my-1 tw-border-b tw-border-gray-400 tw-py-1">
                          <p className="tw-w-full tw-flex tw-justify-between tw-items-center lg:tw-text-sm">{alimento.comida}
                            {alimento.calorias && (
                              <span className="tw-w-1/2 tw-flex tw-justify-end tw-text-red-400">({Math.round(calorias)} kcal)</span>
                            )}
                          </p>
                        </div>
                      )
                    );
                  })
                )}
            </div>

          </div>
          <img src={add} className="tw-w-[13%]  sm:tw-w-[8%] tw-cursor-pointer lg:tw-hidden tw-max-w-[45px] tw-max-y-[45px]" alt="Agregar" onClick={AbrirModal} />
        </div>
      </div>
    </div>
  );
};


export { Desayuno, Almuerzo, Cena, Extra }

