import React, { useState } from 'react';
import notAviable from '../img/Image_not_available.png'

const Alimento = ({ producto }) => {
    const [caracteristicasVisibles, setCaracteristicasVisibles] = useState(false);

    const toggleCaracteristicas = () => {
        setCaracteristicasVisibles(!caracteristicasVisibles);
    };

    return (
        <div className="producto tw-min-h-[252px]" key={producto.id}>
            <div className="tw-text-sm tw-justify-between tw-bg-gray-200 tw-rounded-md tw-w-[20.5rem]" onClick={toggleCaracteristicas}>
                <div className="tw-px-2 tw-flex tw-justify-center tw-items-center tw-w-full">
                    <h3 className="tw-text-center tw-text-sm tw-text-black tw-font-bold tw-w-full tw-p-1 tw-h-[10%] tw-pt-2 tw-flex tw-items-center tw-justify-between">
                        <span>{producto.nombre}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tw-w-8 tw-h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </h3>
                </div>
                <div className="tw-flex tw-gap-2 tw-items-center tw-justify-center tw-bg-gray-300">
                    {!caracteristicasVisibles && (
                        <div className="tw-h-[12rem]">
                            <img className="tw-w-full tw-h-full tw-max-h-80 tw-rounded-md" src={producto.imagenUrl !== "URL de imagen no disponible" ? producto.imagenUrl : notAviable} alt="Imagen del producto" />
                        </div>
                    )}
                    {caracteristicasVisibles && (
                        <div className="tw-w-2/3 tw-flex tw-flex-wrap tw-h-[12rem] tw-text-pretty tw-text-center tw-p-2">
                            <div className="tw-text-xs tw-flex tw-flex-wrap tw-gap-2 tw-h-full tw-bg-opacity-25 tw-py-4 tw-rounded-md tw-bg-gray-200 tw-p-2">
                                <p className="tw-w-full"><span className="tw-font-bold">Calorías:</span> <span className="tw-text-orange-500">{producto.calorias}</span> / 100g</p>
                                <p className="tw-w-full"><span className="tw-font-bold">Proteínas:</span> <span className="tw-text-orange-500">{producto.proteinas}</span> / 100g</p>
                                <p className="tw-w-full"><span className="tw-font-bold">Grasas:</span> <span className="tw-text-orange-500">{producto.grasas}</span> / 100g</p>
                                <p className="tw-w-full"><span className="tw-font-bold">Grasas Saturadas:</span> <span className="tw-text-orange-500">{producto.grasasSaturadas}</span> / 100g</p>
                                <p className="tw-w-full"><span className="tw-font-bold">Carbohidratos:</span> <span className="tw-text-orange-500">{producto.carbohidratos}</span> / 100g</p>
                                <p className="tw-w-full"><span className="tw-font-bold">Azúcar:</span> <span className="tw-text-orange-500">{producto.azucar}</span> / 100g</p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Alimento;