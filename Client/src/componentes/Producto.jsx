function Producto({ img, onClick, nombre, descripcion, precio, precioScam, descuento }) {
    const handleClick = () => {
        if (window.innerWidth <= 640) { // Tamaño para pantallas pequeñas, puedes ajustar este valor
            onClick(); // Se aplica al contenedor completo
        }
    };

    return (
        <div id="divProducto" className="tw-h-3/5 tw-flex tw-grow sm:tw-flex-wrap sm:tw-h-auto sm:tw-w-5/12 md:tw-w-1/4 lg:tw-flex-grow-0 lg:tw-w-1/5 lg:tw-h-1/3 tw-overflow-hidden tw-rounded-lg tw-bg-white tw-shadow-md" onClick={handleClick}>
            <div className="tw-flex tw-justify-center tw-w-2/5 sm:tw-w-full sm:tw-h-3/4 lg:tw-h-2/4 tw-bg-gray-300">
                <img className="tw-cursor-pointer tw-h-full tw-w-full" src={img} alt="Product Image" onClick={onClick} />
            </div>
            <div className="tw-p-4 tw-w-3/5 tw-flex tw-flex-col sm:tw-w-full sm:tw-flex-wrap sm:tw-flex-row sm:tw-justify-between">

                <h2 className="tw-mb-2 tw-text-lg tw-font-medium tw-dark:text-white tw-text-gray-900 sm:tw-mb-0 sm:tw-w-full sm:tw-h-2/5">{nombre}</h2>
                <p className="tw-mb-2 tw-text-base sm:tw-hidden tw-dark:text-gray-300 tw-text-gray-700">{descripcion}</p>
                <div className="tw-flex tw-text-base tw-flex-grow tw-items-end tw-justify-between  sm:tw-w-1/4 sm:tw-h-3/4 ">
                    <p className="tw-mr-2 tw-font-semibold tw-text-gray-900 tw-dark:text-white">{precio}</p>
                    <p className="tw-font-medium tw-text-gray-500 tw-line-through">{precioScam}</p>
                    <p className="tw-ml-auto tw-font-medium tw-text-green-500 sm:tw-hidden">{descuento}</p>
                    {/* tw-hidden sm:tw-block tw-ml-auto tw-w-6 tw-h-6 tw-cursor-pointer" */}




                </div>
            </div>
        </div>
    );
}
export default Producto;

