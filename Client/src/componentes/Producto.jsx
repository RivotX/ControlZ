
function Producto({ img, nombre, descripcion, precio, precioScam, descuento }) {
    return (
        <div className="tw-mx-auto tw-mt-11 tw-w-80 tw-transform tw-overflow-hidden tw-rounded-lg tw-bg-white tw-dark:bg-slate-800 tw-shadow-md tw-duration-300 tw-hover:scale-105 tw-hover:shadow-lg">
            <img className="tw-h-48 tw-w-full tw-object-cover tw-object-center" src={img} alt="Product Image" />
            <div className="tw-p-4">
                <h2 className="tw-mb-2 tw-text-lg tw-font-medium tw-dark:text-white tw-text-gray-900">{nombre}</h2>
                <p className="tw-mb-2 tw-text-base tw-dark:text-gray-300 tw-text-gray-700">{descripcion}</p>
                <div className="tw-flex tw-items-center">
                    <p className="tw-mr-2 tw-text-lg tw-font-semibold tw-text-gray-900 tw-dark:text-white">{precio}</p>
                    <p className="tw-text-base tw-font-medium tw-text-gray-500 tw-line-through tw-dark:text-gray-300">{precioScam}</p>
                    <p className="tw-ml-auto tw-text-base tw-font-medium tw-text-green-500">{descuento}</p>
                </div>
            </div>
        </div>

    );
}
export default Producto;
