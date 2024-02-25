import pesaimg from "../../img/peso.png";
import "animate.css";
import Close from "../Tienda/Close";

const Ejercicio = ({
  nombre,
  series,
  repeticiones,
  peso,
  last,
  vacio,
  añadir,
  eliminar,
  editar,
  idEditar,
}) => {
  return (
    <>
      {!vacio ? (
        <div
          className={`cadaEjercicio tw-flex tw-h-1/4 tw-w-full tw-flex-wrap tw-border-gray-400 tw-p-5 ${
            last ? "" : "tw-border-b"
          }`}
        >
          <div className="gap-2 tw-flex tw-w-full tw-items-center">
            <img src={pesaimg} className="tw-w-1/6" alt="Comida" />
            <div className="tw-flex tw-w-full  tw-items-center tw-justify-between">
              <div className="tw-ml-2 tw-flex tw-w-3/4 tw-flex-col tw-items-center">
                <span className=" tw-w-full tw-font-bold">{nombre}</span>
                <span className="tw-w-full tw-text-xs tw-text-blue-200">
                  <span className="tw-font-extrabold">{series}</span>x
                  {repeticiones}/
                  <span className="tw-text-red-400">{peso}kg</span>
                </span>
              </div>

              <div className="botoneditar  tw-w-2/12" onClick={()=>{editar(idEditar)}}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="tw-w-6 tw-h-6 tw-pointer-events-none"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </div>
              <div className="botoncerrar  tw-w-2/12" onClick={eliminar}>
                <Close/>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          onClick={añadir}
          className={`tw-flex tw-h-1/4 tw-w-full tw-cursor-pointer tw-flex-col tw-items-center tw-border-gray-400 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="animate__infinite infinite animate__animated	animate__heartBeat tw-h-6 tw-w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
            />
          </svg>

          <span className="tw-font-semibold tw-text-cyan-300">
            Añade Ejercicios
          </span>
        </div>
      )}
    </>
  );
};

export default Ejercicio;
