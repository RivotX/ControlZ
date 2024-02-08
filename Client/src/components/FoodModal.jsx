import { useState } from "react";
import axios from "axios";
import Alimento from "./Alimento";
import Loading from "./Loading";

const FoodModal = ({ closeModal }) => {
    const [userInput, setUserInput] = useState('');
    const [resultados, setResultados] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(true);
        axios.post(
            "http://localhost:8081/obtenerAlimento",
            { userInput: userInput },
        ).then(res => {
            console.log(res.data);
            setLoading(false);
            setResultados(res.data);
        });
    }

    return (
        <div className=" tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen NegroOpacidad75 tw-flex tw-items-center tw-justify-center tw-z-[51]">
            <div className="tw-text-white tw-bg-[#292929] tw-mx-2 tw-px-4 tw-pb-8 tw-rounded-lg tw-w-full tw-h-4/5 md:tw-w-4/5  tw-opacity-100 tw-overflow-x-hidden tw-overflow-y-scroll">

                <div className="tw-flex tw-w-full tw-justify-end">
                    <span onClick={closeModal} className="tw-h-10 tw-cursor-pointer tw-text-white tw-text-3xl ">x</span>
                </div>

                <div className="tw-flex tw-h-[6%] tw-w-full tw-flex-wrap tw-justify-center tw-gap-1">
                    <input
                        type="text"
                        id="userInput"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        className="tw-text-black tw-px-2 tw-w-4/5 tw-text-center tw-text-sm tw-rounded-md "
                        onKeyDown={(e) => { if (e.key === "Enter") handleClick(); }}
                    />
                    <div className="tw-flex tw-items-center tw-justify-center">
                        <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-[30px] tw-h-[30px] tw-cursor-pointer hover:tw-fill-gray-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </div>

                </div>

                <div id='resultContainer' className="tw-flex tw-h-full tw-flex-wrap tw-text-black tw-gap-1 tw-w-full tw-justify-center tw-mt-3">
                    {loading && (
                        <Loading />
                    )}
                    {resultados && !loading && (
                        resultados.map(producto => (
                            <Alimento key={producto.id} producto={producto} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default FoodModal;
