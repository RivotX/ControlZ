import { useEffect, useState } from "react";
import Close from "../Tienda/Close";
import Ejercicio from "./Ejercicio";

export default function ModalEjercicio({
  modalvisible,
  setmodalvisible,
  funcionañadir,
  funcionEditar,
  VisibleEditar,
  setVisibleEditar,
  id,
  EjercicioAEditar,
}) {
  const [ejercicio, setEjercicio] = useState("");
  const [series, setSeries] = useState(0);
  const [rep, setRep] = useState(0);
  const [peso, setPeso] = useState(0);

  useEffect(() => {
    setEjercicio(null);
    setSeries(null);
    setRep(null);
    setPeso(null);
  }, [modalvisible]);

  useEffect(() => {
    setEjercicio(EjercicioAEditar.nombre)
    setSeries(EjercicioAEditar.series)
    setRep(EjercicioAEditar.repeticiones)
    setPeso(EjercicioAEditar.kg)
  }, [VisibleEditar])
  return (
    <>
      {modalvisible && (
        <div className=" NegroOpacidad75 tw-fixed tw-left-0 tw-top-0 tw-z-[51] tw-flex tw-h-screen tw-w-screen tw-items-center tw-justify-center">
          {!VisibleEditar ? (
            <div className="tw-h-[40%] tw-w-[80%] tw-rounded-3xl tw-bg-slate-700  tw-py-4 md:tw-h-[50%] md:tw-w-[50%]">
              <div className="  tw-flex tw-justify-between tw-border-b tw-border-slate-400 tw-pb-4 tw-pl-10 tw-pr-5 tw-text-center tw-text-xl tw-font-semibold  ">
                Añadir Ejercicio
                <div
                  className="botonlados  "
                  onClick={() => {
                    setmodalvisible(false);
                  }}
                >
                  <Close />
                </div>
              </div>

              <div className="tw-my-8 tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-10 tw-text-black ">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <input
                    required
                    maxLength={20}
                    onInput={(event) => {
                      setEjercicio(event.target.value);
                    }}
                    type="text"
                    className="tw-mb-6 tw-w-full tw-rounded-full tw-p-1 tw-text-center"
                    placeholder="Nombre del ejercicio"
                  />
                  <div className="tw-mb-6 tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-center ">
                    <input
                      required
                      onInput={(event) => {
                        setSeries(event.target.value);
                      }}
                      type="number"
                      className=" tw-w-1/3 tw-rounded-full tw-p-1  tw-text-center "
                      placeholder="Series"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="tw-pointer-events-none  tw-h-[18px] tw-w-[18px] tw-text-white "
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <input
                      required
                      onInput={(event) => {
                        setRep(event.target.value);
                      }}
                      type="number"
                      className="tw-w-1/3 tw-rounded-full tw-p-1  tw-text-center"
                      placeholder="Repeticiones"
                    />
                  </div>
                  <input
                    required
                    onInput={(event) => {
                      setPeso(event.target.value);
                    }}
                    type="number"
                    className="tw-mb-6 tw-w-28 tw-rounded-full tw-p-1 tw-text-center"
                    placeholder="Peso"
                  />
                  {ejercicio != null &&
                    series != null &&
                    rep != null &&
                    peso != null ? (
                    <input
                      onClick={() => {
                        funcionañadir(ejercicio, series, rep, peso);
                      }}
                      className="tw-h-10 tw-w-full tw-rounded-full tw-border-2  tw-bg-slate-900 tw-font-semibold tw-text-white"
                      type="submit"
                      value={"Añadir"}
                    />
                  ) : (
                    <input
                      className="tw-h-10 tw-w-full tw-rounded-full tw-border-2  tw-bg-slate-900 tw-font-semibold tw-text-white"
                      type="submit"
                      value={"Añadir"}
                    />
                  )}
                </form>
              </div>
            </div>
          )
            :
            (
              <div className="tw-h-[40%] tw-w-[80%] tw-rounded-3xl tw-bg-slate-700  tw-py-4 md:tw-h-[50%] md:tw-w-[50%]">

                <div className="  tw-flex tw-justify-between tw-border-b tw-border-slate-400 tw-pb-4 tw-pl-10 tw-pr-5 tw-text-center tw-text-xl tw-font-semibold  ">
                  Editar Ejercicio
                  <div
                    className="botonlados  "
                    onClick={() => {
                      setmodalvisible(false);
                      setVisibleEditar(false);
                    }}
                  >
                    <Close />
                  </div>
                </div>
                <div className="tw-my-8 tw-flex tw-flex-col tw-items-center tw-justify-center tw-px-10 tw-text-black ">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                    }}
                  >
                    <input
                      maxLength={20}
                      value={ejercicio != null ? ejercicio : ""}
                      required
                      onInput={(event) => {
                        setEjercicio(event.target.value);
                      }}
                      type="text"
                      className="tw-mb-6 tw-w-full tw-rounded-full tw-p-1 tw-text-center"
                      placeholder="Nombre del ejercicio"
                    />
                    <div className="tw-mb-6 tw-flex tw-w-full tw-flex-row tw-items-center tw-justify-center ">
                      <input
                        value={series != null ? series : ""}
                        required
                        onInput={(event) => {
                          setSeries(event.target.value);
                        }}
                        type="number"
                        className=" tw-w-1/3 tw-rounded-full tw-p-1  tw-text-center "
                        placeholder="Series"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="tw-pointer-events-none  tw-h-[18px]  tw-w-[18px] tw-text-white "
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <input
                        value={rep != null ? rep : ""}
                        required
                        onInput={(event) => {
                          setRep(event.target.value);
                        }}
                        type="number"
                        className="tw-w-1/3 tw-rounded-full tw-p-1  tw-text-center"
                        placeholder="Repeticiones"
                      />
                    </div>
                    <input
                      value={peso != null ? peso : ""}
                      required
                      onInput={(event) => {
                        setPeso(event.target.value);
                      }}
                      type="number"
                      className="tw-mb-6 tw-w-28 tw-rounded-full tw-p-1 tw-text-center"
                      placeholder="Peso"
                    />
                    {ejercicio != null &&
                      series != null &&
                      rep != null &&
                      peso != null ? (
                      <input
                        onClick={() => {
                          funcionEditar(id, ejercicio, series, rep, peso);
                        }}
                        className="tw-h-10 tw-w-full tw-rounded-full tw-border-2  tw-bg-slate-900 tw-font-semibold tw-text-white"
                        type="submit"
                        value={"Editar"}
                      />
                    ) : (
                      <input
                        className="tw-h-10 tw-w-full tw-rounded-full tw-border-2  tw-bg-slate-900 tw-font-semibold tw-text-white"
                        type="submit"
                        value={"Editar"}
                      />
                    )}
                  </form>
                </div>
              </div>
            )}
        </div>
      )}
    </>
  );
}
