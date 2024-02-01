import cruzCerrar from "../img/cruzCerrar.png"
import { useState } from "react";
import axios from "axios";

const FoodModal = ({ closeModal }) => {
    const [userInput, setuserInput] = useState('');
    const [resultados, setResultados] = useState(null);

    const handleClick = (event) => {
        event.preventDefault();
        axios.post(
            "http://localhost:8081/obtenerAlimento",
            { userInput: userInput },
        ).then(res => {
            console.log(res.data)
            setResultados(res.data);
        }
        );
    }

    return (
        <div className="tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen NegroOpacidad75 tw-flex tw-items-center tw-justify-center">
            <div className="tw-text-white tw-bg-gray-800 tw-mx-2 tw-p-4 tw-rounded-lg tw-w-full tw-h-4/5 md:tw-w-4/5 lg:tw-w-2/5 tw-opacity-100 tw-overflow-scroll ">

                <div className="tw-flex tw-h-[8%] tw-w-full tw-items-start">
                    <div className="tw-flex tw-h-full tw-w-full tw-justify-start">
                        <input
                            type="text"
                            id="userInput"
                            value={userInput}
                            onChange={(e) => setuserInput(e.target.value)}
                            className="tw-text-black tw-px-2 tw-w-1/2"

                        />
                        <button onClick={handleClick} className="tw-ms-2 tw-w-2/5 tw-bg-green-500 tw-p-1 tw-rounded-md tw-text-black tw-text-xs">Consultar Comidas</button>
                        <img onClick={closeModal} src={cruzCerrar} className="tw-fixed PosCruzModal2 tw-h-10 tw-cursor-pointer tw-right-0 " />

                    </div>
                </div>
                <div id='resultContainer' className="tw-flex tw-h-5/6 tw-flex-wrap tw-text-white tw-gap-2 tw-w-full tw-justify-center">
                    {resultados && (
                        resultados.map(producto => (
                            <div key={producto.id} className="producto tw-text-white tw-gap-2 tw-flex tw-text-sm tw-justify-between ">
                                <div className="tw-w-1/2 tw-h-full">
                                    <h3 className="text-center">{producto.nombre}</h3>

                                    <img className="tw-w-full tw-h-4/5 tw-max-h-80" src={producto.imagenUrl} alt="Imagen del producto" />
                                </div>
                                <div className="tw-w-1/2 tw-flex tw-flex-wrap tw-items-center ">
                                    <div className="tw-flex tw-flex-wrap tw-gap-2">
                                        <p className="tw-w-full" >Calorías: <span className="tw-text-orange-500">{producto.calorias}</span> / 100g</p>
                                        <p className="tw-w-full">Proteínas: <span className="tw-text-orange-500">{producto.proteinas}</span> / 100g</p>
                                        <p className="tw-w-full">Grasas:<span className="tw-text-orange-500"> {producto.grasas}</span> / 100g</p>
                                        <p className="tw-w-full">Grasas Saturadas: <span className="tw-text-orange-500">{producto.grasasSaturadas}</span>/ 100g</p>
                                        <p className="tw-w-full">Carbohidratos: <span className="tw-text-orange-500">{producto.carbohidratos}</span> / 100g</p>
                                        <p className="tw-w-full">Azúcar: <span className="tw-text-orange-500">{producto.azucar}</span> / 100g</p>
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
