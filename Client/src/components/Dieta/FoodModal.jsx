import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Alimento from "./Alimento";
import Loading from "../Loading";

const FoodModal = ({ closeModal, Horavalor, usuario, Fecha }) => {
    const [userInput, setUserInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [resultados, setResultados] = useState([]);
    const divRef = useRef(null);
    

    //para el infinite fetching
    const [offset, setOffset] = useState(0);

    // Fetch data function
    const fetchData = () => {
        console.log('offset ', offset)

        setLoading(true);
        axios.post(
            "http://localhost:8081/obtenerAlimento",
            { userInput: userInput, offset: offset },
        ).then(res => {
            console.log(res.data);
            setLoading(false);
            if (Array.isArray(res.data)) {
                setResultados(prevResultados => [...prevResultados, ...res.data]);
                setOffset(prevOffset => prevOffset + 5);
                console.log('offset ', offset)
            }
        });
    };

    //cerrar modal usando esc
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                closeModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [closeModal]);

    //infinite scrolling
    useEffect(() => {
        const FetchBottom = (e) => {
            const bottom = e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 1.5;
            if (bottom && !loading) {
                console.log('bottom');
                fetchData();
            }
        };

        const divElement = divRef.current;
        if (divElement) {
            divElement.addEventListener('scroll', FetchBottom);
            return () => {
                divElement.removeEventListener('scroll', FetchBottom);
            };
        }
    }, [divRef.current, fetchData, loading]);// Para que pueda ver el cambio de loading




    return (
        <div className=" tw-fixed tw-top-0 tw-left-0 tw-w-screen tw-h-screen NegroOpacidad75 tw-flex tw-items-center tw-justify-center tw-z-[51]">
            <div ref={divRef} className="tw-text-white tw-bg-slate-700 tw-mx-2 tw-px-4 tw-pb-8 tw-rounded-lg tw-w-full tw-h-4/5 md:tw-w-4/5 tw-opacity-100 tw-overflow-x-hidden tw-overflow-y-scroll">

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
                        onKeyDown={(e) => { if (e.key === "Enter") fetchData(); }}
                    />
                    <div className="tw-flex tw-items-center tw-justify-center">
                        <svg onClick={fetchData} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-[30px] tw-h-[30px] tw-cursor-pointer hover:tw-fill-gray-500">
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
                            <Alimento key={producto.id} producto={producto} Horavalor={Horavalor} usuario={usuario} Fecha={Fecha} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default FoodModal;
