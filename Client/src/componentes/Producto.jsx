function Producto({ img, onClick, nombre, descripcion, precio, precioScam, descuento }) {
    return (
        <div className="tw-mx-auto sm:tw-w-1/3 tw-h-60 tw-grow tw-flex sm:tw-block sm:tw-grid-cols-2 tw-transform tw-overflow-hidden tw-rounded-lg tw-bg-white tw-shadow-md tw-duration-300" onClick={onClick}> {/* falta hover*/}
            <div className="tw-h-full tw-flex tw-w-2/5 tw-items-center tw-justify-center tw-bg-gray-300" >
                <img className="tw-h-full tw-w-full tw-object-center" src={img} alt="Product Image" />
            </div>
            <div className="tw-p-4 tw-w-3/5 tw-flex tw-flex-col">
                <h2 className="tw-mb-2 tw-text-lg tw-font-medium tw-dark:text-white tw-text-gray-900">{nombre}</h2>
                <p className="tw-mb-2 tw-text-base tw-dark:text-gray-300 tw-text-gray-700">{descripcion}</p>
                <div className="tw-flex tw-flex-grow tw-items-end tw-justify-between">
                    <p className="tw-mr-2 tw-text-lg tw-font-semibold tw-text-gray-900 tw-dark:text-white">{precio}</p>
                    <p className="tw-text-base tw-font-medium tw-text-gray-500 tw-line-through">{precioScam}</p>
                    <p className="tw-ml-auto tw-text-base tw-font-medium tw-text-green-500 ">{descuento}</p>
                </div>
            </div>
        </div>
    );
}
export default Producto;
