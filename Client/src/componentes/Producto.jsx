function Producto({ img, onClick, nombre, descripcion, precio, precioScam, descuento }) {
    return (

        <div id="divProducto" className="tw-h-3/5 tw-flex tw-grow sm:tw-flex-wrap sm:tw-h-auto sm:tw-w-5/12 lg:tw-flex-grow-0 lg:tw-w-1/4 lg:tw-h-1/3 tw-overflow-hidden tw-rounded-lg tw-bg-white tw-shadow-md"> 
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
                    <svg className="tw-hidden sm:tw-block tw-ml-auto tw-w-6 tw-h-6 tw-cursor-pointer hover:tw-scale-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>

                </div>
            </div>
        </div>
    );
}
export default Producto;

