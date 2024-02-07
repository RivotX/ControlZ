import pesaimg from "../img/peso.png";
import "animate.css";
const Ejercicio = ({
  nombre,
  series,
  repeticiones,
  peso,
  last,
  eliminar,
  vacio,
  añadir
}) => {
  return (
    <>
      {!vacio ? (
        <div
          className={`tw-flex tw-h-1/4 tw-w-full tw-flex-wrap tw-border-gray-400 ${
            last ? "" : "tw-border-b"
          }`}
        >
          <div className="gap-2 tw-flex tw-w-full tw-items-center">
            <img src={pesaimg} className="tw-w-1/6" alt="Comida" />
            <div className="tw-flex tw-w-full  tw-items-center tw-justify-between">
              <div className="tw-ml-2 tw-flex tw-w-3/4 tw-flex-col tw-items-center">
                <span className="tw-w-full tw-font-bold">{nombre}</span>
                <span className="tw-w-full tw-text-xs tw-text-blue-200">
                  <span className="tw-font-extrabold">{series}</span>x
                  {repeticiones}/
                  <span className="tw-text-red-400">{peso}kg</span>
                </span>
              </div>

              <div className="botoncerrar tw-w-2/12" onClick={eliminar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="tw-h-[30px] tw-w-[30px]"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
         
        onClick={añadir}
          className={`tw-cursor-pointer tw-flex tw-h-1/4 tw-w-full tw-flex-col tw-items-center tw-border-gray-400 `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="tw-w-6 tw-h-6 animate__infinite	infinite animate__animated animate__heartBeat"
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
