import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import fotoasist from "../img/logo_asistente.svg";
import robot from "../img/robot.svg";
import 'animate.css' //no funciona T.T


function AsistenteVirtual() {
  const [PantallaPequeña, setPantallaPequeña] = useState(window.innerWidth < 640);

  useEffect(() => {
    const actualizarAnchoVentana = () => {
      setPantallaPequeña(window.innerWidth < 640);
    };

    window.addEventListener('resize', actualizarAnchoVentana);

    // Limpiar el listener del evento resize cuando el componente se desmonte
    return () => {
      window.removeEventListener('resize', actualizarAnchoVentana);
    };
  }, []);

  const [message, setMessage] = useState("");
  const [conversation, setConversation] = useState([]);
  const chatRef = useRef(null); //para mover el scrollbar

  // Función para enviar el mensaje del usuario al servidor
  const sendMessage = async () => {
    if (message.trim() === "") return;
    try {
      const response = await axios.post("https://serverc-4y5e.onrender.com/assistant", { question: message });
      const answer = response.data.answer;
      // Actualizar el estado de la conversación
      setConversation(prevConversation => [
        ...prevConversation,
        { sender: "user", message },
        { sender: "assistant", message: answer }
      ]);
      // Limpiar el mensaje
      setMessage("");
    } catch (error) {
      console.error("Error al enviar mensaje:", error);
    }
  };


  // Función que maneja el cambio en el campo de mensaje del usuario
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Llamar a la función sendMessage si se presiona Enter
      sendMessage();
    }
  };
  const [showChat, setShowChat] = useState(false); // Estado para controlar la visibilidad del chat

  const desplegarChat = () => {
    setShowChat(!showChat); // Invierte el estado actual al hacer clic en el botón
  };

  useEffect(() => {
    // Desplazar hacia abajo el div cuando se agrega un nuevo mensaje
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight; //chatRef.current = div de la conversacion (que tiene scrollbar). Cada vez que cambie la conversacion, scrollbar.top será el valor de la alturaMaxima del div (se va a abajo).
    }
  }, [conversation]); // Esto se ejecutará cada vez que la conversación cambie

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 27) {
        setShowChat(false);
      }
    };

    if (showChat) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [showChat]);

  return (
    <>

      <div className="">
        {
          !showChat ? (
            <div className="tw-cursor-pointer tw-z-50 tw-bg-white tw-w-14 tw-h-14 tw-fixed tw-right-[2%] tw-bottom-[6%]  tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-p-1"
              onClick={desplegarChat}>
              <svg
                className="tw-pointer-events-none"
                width="38px"
                height="38px"
                viewBox="0 0 24 24"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                fill="rgb(51, 51, 51)"
              >
                <path d="M10,18 L6,22 L6,18 L10,18 Z M17,6 C19.7614237,6 22,8.23857625 22,11 C22,13.7614237 19.7614237,16 17,16 L17,16 L7,16 C4.23857625,16 2,13.7614237 2,11 C2,8.23857625 4.23857625,6 7,6 L7,6 Z" transform="translate(12.000000, 14.000000) scale(-1, 1) translate(-12.000000, -14.000000)"></path>
              </svg>
            </div>
          ) : (
            PantallaPequeña ? (
              <div className="tw-cursor-pointer tw-w-14 tw-h-14 tw-fixed tw-right-[2%] tw-top-[1%]  tw-z-50 tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-p-1"
                onClick={desplegarChat}>
                <svg
                  className="tw-pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="20"
                  viewBox="0 0 21 13"
                  focusable="false"
                  role="presentation"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="currentColor"
                    d="M20.1005 2.7169L10.9931 11.8244C10.4724 12.3451 9.62815 12.3451 9.10745 11.8244L-8.00829e-06 2.7169L1.88561 0.831278L10.0503 8.99593L18.2149 0.831278L20.1005 2.7169Z"
                  ></path>
                </svg>
              </div>
            ) :
              //pantalla no-mobile
              <div className="tw-cursor-pointer tw-z-50 tw-bg-white tw-w-14 tw-h-14 tw-fixed tw-right-[2%] tw-bottom-[6%]  tw-rounded-lg tw-flex tw-items-center tw-justify-center tw-p-1"
                onClick={desplegarChat}>
                <svg
                  className="tw-pointer-events-none"
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="20"
                  viewBox="0 0 21 13"
                  focusable="false"
                  role="presentation"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="currentColor"
                    d="M20.1005 2.7169L10.9931 11.8244C10.4724 12.3451 9.62815 12.3451 9.10745 11.8244L-8.00829e-06 2.7169L1.88561 0.831278L10.0503 8.99593L18.2149 0.831278L20.1005 2.7169Z"
                  ></path>
                </svg>
              </div>
          )
        }

      </div >



      {
        showChat && (
          PantallaPequeña ?
            (<div
              ref={chatRef}
              id="chat"
              className="animate__fadeInUpBig border border-light  tw-bg-gray-200  tw-p-1  tw-top-0 tw-left-0 tw-fixed tw-min-h-screen tw-min-w-full tw-z-40"
              style={{
                maxHeight: "600px",
                maxWidth: "500px",
                backdropFilter: "blur(10px)",
                textAlign: "justify",
              }}
            >
              <nav className="navbar ">
                <div className="container-fluid  d-flex justify-content-left align-items-center">
                  <span className="navbar-brand fw-bold" >
                    <img
                      src={fotoasist}
                      alt="Logo"
                      width="35"
                      height="35"
                      className="d-inline-block me-3 mb-2 align-text-top"
                    />
                    Asistente virtual
                  </span>
                </div>
              </nav>

              {conversation.map((msg, index) => (
                <div key={index} className="tw-w-full tw-py-1 tw-text-justify">
                  {msg.sender === "user" ?
                    <p className="tw-w-full tw-flex ">
                      <span className=" tw-px-2 tw-pr-16 tw-font-bold">Tu:</span>
                      <span className=" tw-pr-4">{msg.message}</span>
                    </p>
                    :
                    <p className="tw-w-full tw-flex ">
                      <span className="tw-font-bold tw-px-2 tw-pr-3 tw-text-cyan-700">Asistente:</span>
                      <span className=" tw-pr-4">{msg.message}</span>
                    </p>}
                </div>
              ))}



              <div className="tw-pt-6 sticky-bottom d-flex justify-content-center align-align-items-center ">
                <input
                  className=" tw-border-2 tw-border-cyan-700 text-center tw-me-1 tw-text-black rounded-2 ms-2 col-8"
                  type="text"
                  value={message}
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                  placeholder="¿Alguna pregunta? ¡Cuéntame!"
                />
                <svg onClick={sendMessage} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-[30px] tw-h-[30px] hover:tw-fill-gray-300 tw-cursor-pointer tw-text-cyan-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </div>
            </div>)

            :
            //pantallas no- mobile

            (<div
              ref={chatRef} id="chat"
              className="animate__fadeInUpBig tw-overflow-y-scroll  sm:tw-w-3/5 md:tw-w-[55%] lg:tw-w-1/2 xl:tw-w-2/5 tw-bg-gray-200  tw-p-1 tw-bottom-[14.5%] tw-right-[2%] tw-fixed tw-h-[73%] tw-min-h-[73%] tw-min-w-[40%] lg:tw-min-w-[30%] tw-rounded-lg tw-z-40"

            >
              <nav className="navbar ">
                <div className="container-fluid  d-flex justify-content-center align-items-center">
                  <span className="navbar-brand fw-bold" >
                    <img
                      src={fotoasist}
                      alt="Logo"
                      width="35"
                      height="35"
                      className="d-inline-block me-3 mb-2 align-text-top"
                    />
                    Asistente virtual
                  </span>
                </div>
              </nav>
              <div id="conversation" className="tw-w-full  lg:tw-px-[5%] lg:tw-mb-[4%]">
                {conversation.map((msg, index) => (
                  <div key={index} className="tw-w-full tw-text-justify tw-py-2">
                    {msg.sender === "user" ?
                      <p className="tw-w-full tw-flex ">
                        <span className="tw-px-2 tw-pr-16 tw-font-bold">Tu: </span>
                        <span className="">{msg.message}</span>
                      </p>
                      :
                      <p className="tw-w-full tw-flex ">
                        <span className="tw-font-bold tw-px-2 tw-pr-3 tw-text-cyan-700">Asistente: </span>
                        <span className="">{msg.message}</span>
                      </p>}
                  </div>
                ))}
              </div>

              <div className=" tw-pt-6 tw-sticky tw-bg-gray-200 tw-bottom-0 d-flex justify-content-center align-align-items-center ">
                <input
                  className="tw-border-2 tw-border-cyan-700 text-center tw-me-1 tw-text-black rounded-2 ms-2 col-8"
                  type="text"
                  value={message}
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                  placeholder="¿Alguna pregunta? ¡Cuéntame!"
                />
                <svg onClick={sendMessage} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-[30px] tw-h-[30px] hover:tw-fill-gray-300 tw-cursor-pointer tw-text-cyan-700">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </div>
            </div>
            )
        )
      }
    </>
  );
}

export default AsistenteVirtual;
