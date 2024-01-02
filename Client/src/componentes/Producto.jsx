function Producto({ img, onClick, nombre, descripcion, precio, precioScam, descuento }) {
    return (
        <div className="tw-h-3/5 tw-flex tw-grow sm:tw-flex-wrap sm:tw-h-auto sm:tw-w-5/12 lg:tw-flex-grow-0 lg:tw-w-1/4 lg:tw-h-1/3 tw-overflow-hidden tw-rounded-lg tw-bg-white tw-shadow-md   " onClick={onClick}> {/* falta hover*/}
            <div className="tw-flex tw-justify-center tw-w-2/5 sm:tw-w-full sm:tw-h-3/4 lg:tw-h-2/4 tw-bg-gray-300">
                <img className="tw-h-full tw-w-full" src={img} alt="Product Image" />
            </div>

            <div className="tw-p-4 tw-w-3/5 tw-flex tw-flex-col sm:tw-w-full sm:tw-flex-wrap sm:tw-flex-row sm:tw-justify-between">

                <h2 className="tw-mb-2 tw-text-lg tw-font-medium tw-dark:text-white tw-text-gray-900 sm:tw-mb-0 sm:tw-w-full sm:tw-h-2/5">{nombre}</h2>
                <p className="tw-mb-2 tw-text-base sm:tw-hidden tw-dark:text-gray-300 tw-text-gray-700">{descripcion}</p>
                <div className="tw-flex tw-text-base tw-flex-grow tw-items-end tw-justify-between  sm:tw-w-1/4 sm:tw-h-3/4 ">
                    <p className="tw-mr-2 tw-font-semibold tw-text-gray-900 tw-dark:text-white">{precio}</p>
                    <p className="tw-font-medium tw-text-gray-500 tw-line-through">{precioScam}</p>
                    <p className="tw-ml-auto tw-font-medium tw-text-green-500 sm:tw-hidden">{descuento}</p>
                    <svg className="tw-hidden sm:tw-block tw-ml-auto tw-w-6 tw-h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>

                </div>
            </div>
        </div>
    );
}
export default Producto;

