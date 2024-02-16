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
                <div className="tw-flex tw-text-base tw-flex-grow tw-items-end tw-justify-between sm:tw-w-1/4 sm:tw-h-3/4 ">
                    <div className="tw-w-1/2 tw-flex tw-items-center">
                        <p className="tw-mr-2 tw-font-semibold tw-text-gray-900 tw-dark:text-white">{precio}</p>
                        <p className="tw-font-medium tw-text-gray-500 tw-line-through tw-text-xs tw-mt-[6%]">{precioScam}</p>
                    </div>
                    <p className="tw-ml-auto tw-font-medium tw-text-green-500 sm:tw-hidden">{descuento}</p>

                    {/*svg carrito*/}
                    <li className="tw-hidden tw-ml-auto sm:tw-block tw-lg:inline-block tw-align-middle tw-text-black hover:tw-text-gray-600">
                        <a href="#" role="button" className="tw-relative tw-flex">
                            <svg className="flipaa tw-flex-1 tw-fill-current" viewBox="0 0 24 24">
                                <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                            </svg>
                        </a>
                    </li>
                </div>
            </div>
        </div>
    );
}
export default Producto;

