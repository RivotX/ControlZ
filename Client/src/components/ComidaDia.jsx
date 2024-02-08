const ComidaDia = ({ nombre, calorias, AbrirModal, img, add, last }) => {

  return (
      <div className={`tw-border-blue-400 tw-w-full tw-flex tw-flex-wrap tw-h-1/4 lg:tw-items-start  lg:tw-border-b-0 lg:tw-h-full ${last ? "" : "tw-border-b lg:tw-border-r-2"}`}>
        <div className="tw-gap-2 tw-w-full tw-flex tw-items-center lg:tw-flex-col lg:tw-justify-center lg:tw-px-5">
          <div className="tw-w-[19%] sm:tw-w-[12%] lg:tw-w-full lg:tw-flex lg:tw-justify-between lg:tw-items-center">
            <span className="tw-hidden lg:tw-block tw-text-xl tw-font-bold">{nombre}</span>
            <img src={img} className="tw-w-full tw-h-full lg:tw-w-1/2 tw-max-w-[74px] tw-max-y-[74px] lg:tw-hidden " />
            <div className="tw-hidden lg:tw-block">
              <img src={add} className="tw-w-[13%] sm:tw-w-[8%]  tw-cursor-pointer lg:tw-w-[2rem] " alt="Agregar" onClick={AbrirModal} />
            </div>
          </div>
          <div className="tw-w-full tw-flex tw-items-center tw-flex-wrap tw-justify-between ">
            <div className="tw-flex tw-ms-2 tw-flex-wrap tw-items-center sm:tw-px-2 lg:tw-text-center ">
              <span className="tw-w-full tw-font-bold sm:tw-text-2xl lg:tw-hidden">{nombre}</span>
              <span className="tw-w-full tw-text-xs tw-text-gray-200 sm:tw-text-lg">{calorias} kcal</span>
            </div>
            <img src={add} className="tw-w-[13%] sm:tw-w-[8%] tw-cursor-pointer lg:tw-hidden tw-max-w-[45px] tw-max-y-[45px]" alt="Agregar" onClick={AbrirModal} />
          </div>
        </div>
      </div>
    );
};

export default ComidaDia