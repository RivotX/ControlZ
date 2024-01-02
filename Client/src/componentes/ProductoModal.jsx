
import React from 'react';
import cruzCerrar from "../img/cruzCerrar.png"

const ProductoModal = ({ product, closeModal }) => { //arreglar respnsive en iphone SE ()
    return (
        <div className="tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen NegroOpacidad75 tw-flex tw-items-center tw-justify-center">

            <div className="tw-bg-white tw-p-8 tw-rounded-lg tw-w-full tw-h-4/6 lg:tw-w-3/4 tw-opacity-100 ">
                <img onClick={closeModal} className="tw-fixed PosCruzModal tw-h-10 tw-cursor-pointer tw-right-0 lg:tw-right-40" src={cruzCerrar} />
                <div className='tw-flex tw-justify-center tw-h-2/3' >
                    <img className="tw-object-center" src={product.img} />
                </div>
                <div className='tw-flex tw-flex-wrap tw-h-1/3 lg:tw-mx-8'>
                    <div className='tw-flex tw-justify-between tw-items-center tw-w-full tw-h-1/6'>
                        <h2 className="tw-text-xl tw-font-bold">{product.nombre}</h2>
                        <p className="tw-flex tw-justify-center tw-items-center tw-text-lg">
                            <span>{product.precio}</span>
                        </p>
                    </div>
                    <p className="ModalDescText tw-mt-2 tw-flex tw-items-center tw-justify-center tw-h-3/6">
                        <span>{product.descripcion}</span>
                    </p>
                    <button className='tw-mt-3 tw-bg-yellow-300 tw-rounded-lg tw-p-2 tw-w-full text-s tw-h-2/6'>añadir al carrito</button>
                </div>

            </div>
        </div>
    );
};

export default ProductoModal;