const ComidaDia = ({ nombre, calorias, AbrirModal, img, add, last }) => {

  return (
    <div className={`tw-border-gray-400 tw-w-full tw-flex tw-flex-wrap tw-h-1/4 ${last ? "" : "tw-border-b"}`}>
      <div className="gap-2 tw-w-full tw-flex tw-items-center">
        <img src={img} className="tw-w-1/5 sm:tw-w-[12%]" alt="Comida" />
        <div className="tw-w-full tw-flex tw-items-center tw-flex-wrap tw-justify-between">
          <div className="tw-flex tw-ml-2 tw-flex-wrap tw-items-center sm:tw-px-2">
            <span className="tw-w-full tw-font-bold sm:tw-text-2xl">{nombre}</span>
            <span className="tw-w-full tw-text-xs tw-text-gray-200 sm:tw-text-lg">{calorias} kcal</span>
          </div>
          <img src={add} className="tw-w-2/12 sm:tw-w-[8%]" alt="Agregar" onClick={AbrirModal} />
        </div>
      </div>
    </div>
  );
};

export default ComidaDia