import { useState } from "react";
import axios from "axios";
import notAviable from '../img/Image_not_available.png'

const FoodModal = ({ closeModal }) => {
    const [userInput, setuserInput] = useState('');
    const [resultados, setResultados] = useState(null);
    const [CaracteristicasVisibles, setCaracteristicasVisibles] = useState(false);
    const [loading, setLoading] = useState(false);

    const mostrarCaracteristicas = () => {
        setCaracteristicasVisibles(!CaracteristicasVisibles);
    }

    const handleClick = (event) => {
        setLoading(true)
        axios.post(
            "http://localhost:8081/obtenerAlimento",
            { userInput: userInput },
        ).then(res => {
            console.log(res.data)
            setLoading(false)
            setResultados(res.data);
        }
        );
    }

    return (
        <div className="tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen NegroOpacidad75 tw-flex tw-items-center tw-justify-center">
            <div className="tw-text-white tw-bg-gray-800 tw-mx-2 tw-px-4 tw-py-8 tw-rounded-lg tw-w-full tw-h-4/5 md:tw-w-4/5 lg:tw-w-2/5 tw-opacity-100 tw-overflow-y-scroll">

                <div className="tw-flex tw-w-full tw-justify-end">
                    <span onClick={closeModal} className="tw-h-10 tw-cursor-pointer tw-text-white tw-text-3xl tw-mt-[-5.5vh] tw-px-4 tw-mr-[-6%]">x</span>
                </div>


                <div className="tw-flex tw-h-[6%] tw-w-full tw-flex-wrap tw-justify-center tw-gap-1">
                    <input
                        type="text"
                        id="userInput"
                        value={userInput}
                        onChange={(e) => setuserInput(e.target.value)}
                        className="tw-text-black tw-px-2 tw-w-4/5 tw-text-center tw-text-sm tw-rounded-md "
                        onKeyDown={(e) => { if (e.key === "Enter") handleClick(); }}
                    />
                    <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-8 tw-h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                    </svg>
                </div>

                <div id='resultContainer' className="tw-flex tw-h-full tw-flex-wrap tw-text-black tw-gap-1 tw-w-full tw-justify-center tw-mt-3">
                    {loading && (
                        <div className="tw-h-1/2 tw-w-full tw-flex tw-justify-center tw-items-center ">
                            <div
                                className="tw-text-white tw-inline-block tw-h-8 tw-w-8 tw-animate-spin tw-rounded-full tw-border-4 tw-border-solid tw-border-current tw-border-r-transparent tw-align-[-0.125em] tw-motion-reduce:tw-animate-[spin_1.5s_linear_infinite]"
                                role="status">

                            </div>
                        </div>
                    )}
                    {resultados && !loading && (
                        resultados.map(producto => (
                            <div className="producto  tw-min-h-[252px]" key={producto.id}>
                                <div className="tw-text-sm tw-justify-between tw-bg-gray-200 tw-rounded-md tw-w-[20.5rem]" onClick={mostrarCaracteristicas}>
                                    <div className="tw-px-2 tw-flex tw-justify-center tw-items-center tw-w-full">
                                        <h3 className="tw-text-center tw-text-sm tw-text-black tw-font-bold tw-w-full tw-p-1 tw-h-[10%] tw-pt-2 tw-flex tw-items-center tw-justify-between">
                                            <span> {producto.nombre}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="tw-w-8 tw-h-8">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                        </h3>
                                    </div>
                                    <div className="tw-flex tw-gap-2 tw-items-center tw-justify-center tw-bg-gray-300">
                                        {!CaracteristicasVisibles && (
                                            <div className=" tw-h-[12rem]">
                                                <img className="tw-w-full tw-h-full tw-max-h-80 tw-rounded-md" src={producto.imagenUrl !== "URL de imagen no disponible" ? producto.imagenUrl : notAviable} alt="Imagen del producto" />
                                            </div>
                                        )}
                                        {CaracteristicasVisibles && (
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
                        ))
                    )}
                </div>

            </div>

        </div>
    );
};

export default FoodModal

{/*  */ }