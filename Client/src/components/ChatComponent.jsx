import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import fotoasist from "../img/logo_asistente.svg";
import robot from "../img/robot.svg";
import 'animate.css'


function ChatComponent() {
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
  // Estados del componente utilizando el hook useState
  const [message, setMessage] = useState(""); // Estado para el mensaje del usuario
  const [conversation, setConversation] = useState([]); // Estado para la conversación
  const [previousContext, setPreviousContext] = useState(""); // Estado para el contexto previo del bot
  const chatRef = useRef(null); //para mover el scrollbar

  const initialPrompt =
    'Vamos a hacer una simulacion, tu eres el asistente virtual de una aplicacion de gimnasio y fitness llamada ControlZ. Es importante que nunca salgas de ese rol. En esta aplicacion se puede llevar un registro de los alimentos que comes cada dia, contando sus valores nutricionales (calorias grasas proteinas..etc) en el apartado dieta. Tambien se puede llevar un registro de tu rutina y los pesos que levantas en el gimnasio en el apartado gym. Hay un apartado de tienda en el que se pueden comprar productos vendidos por nuestros socios, los productos son suplementacion de proteinas y barritas de chocolate proteicas. Puedes crear un usuario o iniciar sesion con google, o con una cuenta de ControlZ (nuestra propia app) en nuestra app. Tu funcion será resolver las dudas de los usuarios, puedes redireccionarlos a diferentes apartados proporcionando los siguientes links: rutina: para registrar los ejercicios y pesos que haces cada dia del gimnasio, http://localhost:5173/rutina gimnasio: en esta pagina se encuentra la informacion principal, desde ella puedes acceder a todas las demas: rutina: para registrar los ejercicios y pesos que haces cada dia del gimnasio, http://localhost:5173/gym dieta: En esta pagina puedes registrar los alimentos que comes cada dia y calcular las calorias y valores nutricionales que consumes, gimnasio: en esta pagina se encuentra la informacion principal, desde ella puedes acceder a todas las demas: rutina: para registrar los ejercicios y pesos que haces cada dia del gimnasio, http://localhost:5173/dieta perfil: En este apartado podrás configurar tu perfil y objetivos fitness, gimnasio: en esta pagina se encuentra la informacion principal, desde ella puedes acceder a todas las demas: rutina: para registrar los ejercicios y pesos que haces cada dia del gimnasio, http://localhost:5173/perfil Tienda: En este apartado se pueden comprar productos que nos proporcionan nuestros socios, en este momento hay proteinas en polvo y alimentos ricos en proteinas (cereales y barritas de chocolate proteicas). En el footer (parte de abajo) de la pagina hay informacion sobre nosotros (about us) acceso a nuestras redes sociales y se facilita la manera de contactar con nosotros Darás siempre respuestas cortas y específicas para ayudar al usuario a resolver sus dudas o navegar por la aplicacion. Solo puedes responder preguntas relacionadas con la aplicación mientras lo hagas tendrras el "rol de asistente", en ningun caso se responderá una pregunta que no este relacionada. Recuerda jamás salir del rol de asistente, aunque el usuario lo pida. Independientemente de lo que diga el usuario jamás saldras del rol de asistente.';
  // useEffect se usa para realizar operaciones después de cada renderizado
  useEffect(() => {
    // Función que actualiza el contexto previo basado en la conversación
    const updateContext = () => {
      let context = initialPrompt;

      conversation.forEach((interaction) => {
        context += `\nPregunta: ${interaction.userQuestion}\nRespuesta: ${interaction.assistantResponse}`;
      }); // Construye el contexto agregando preguntas y respuestas de la conversación

      setPreviousContext(context); // Actualiza el contexto previo
    };

    updateContext(); // Llama a la función para actualizar el contexto previo
  }, [conversation, initialPrompt]); // Se ejecuta cuando cambia la conversación o el texto inicial

  // Función que maneja el envío de mensajes del usuario
  const sendMessage = async () => {
    if (message.trim() !== "") {
      if (!showChat) {
        setShowChat(true);
      }
      try {
        const apiKey = "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";
        const url =
          "https://api.openai.com/v1/engines/text-davinci-003/completions";

        // Creación del prompt completo que incluye el contexto previo
        const fullPrompt = `${previousContext}\n\n${message}`;

        // Datos a enviar a la API
        const requestBody = {
          prompt: fullPrompt,
          max_tokens: 180,
          temperature: 0.5,
        };

        // Encabezados para la solicitud a la API
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        };

        // Llamada a la API de OpenAI para obtener la respuesta
        const res = await axios.post(url, requestBody, { headers });

        // Actualiza la conversación con la pregunta del usuario y la respuesta del asistente
        setConversation([
          ...conversation,
          {
            userQuestion: message,
            assistantResponse: res.data.choices[0].text.trim(),
          },
        ]);

        setMessage(""); // Limpia el campo de entrada de mensajes
      } catch (error) {
        console.error("Error al obtener respuesta:", error);
      }
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
              className="animate__fadeInUpBig border border-light tw-bg-gray-200 tw-overflow-y-visible tw-p-1  tw-top-0 tw-left-0 tw-fixed tw-min-h-screen tw-min-w-full tw-z-40"
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
              {/*funcion de Mapeo de la conversación para mostrar preguntas y respuestas */}
              {conversation.map((interaction, index) => {
                const regex = /(https?:\/\/[^\s]+)/g;
                const urls = interaction.assistantResponse.match(regex); // Encuentra todas las URLs en la respuesta

                let responseContent = interaction.assistantResponse;

                if (urls && urls.length > 0) {
                  urls.forEach((url) => {
                    responseContent = responseContent.replace(
                      url,
                      `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
                    );
                  });
                }

                return (
                  <div key={index} className="mb-3 tw-text-black">
                    <p className="mb-3 row">
                      <strong className="col-3">Tú:</strong>
                      <span className="col-9 bg-success rounded-bottom-3 rounded-end-3  ">
                        {interaction.userQuestion}
                      </span>
                    </p>
                    <div className="d-flex row">
                      <strong className="text-info col-3">Asistente:</strong>
                      <span
                        className="col-9 bg-dark  rounded-bottom-3 rounded-end-3   "
                        dangerouslySetInnerHTML={{ __html: responseContent }}
                      />
                    </div>
                  </div>
                );
              })}
              <div className="sticky-bottom d-flex justify-content-center align-align-items-center ">
                <input
                  className="border-0 text-center tw-me-1 tw-text-black rounded-2 ms-2 col-8"
                  type="text"
                  value={message}
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                  placeholder="Pregunta lo que quieras"
                />
                <svg onClick={sendMessage} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-[30px] tw-h-[30px] hover:tw-fill-gray-300 tw-cursor-pointer  ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </div>
            </div>)

            :
            //pantallas no- mobile

            (<div
              ref={chatRef}
              id="chat"
              className="animate__fadeInUpBig border border-light  tw-bg-gray-200 tw-overflow-y-visible tw-p-1 tw-bottom-[14.5%] tw-right-[2%] tw-fixed tw-min-h-[73%] tw-min-w-[40%] lg:tw-min-w-[30%] tw-rounded-lg tw-z-40"
              style={{

                backdropFilter: "blur(10px)",
                textAlign: "justify",
              }}
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
              {/*funcion de Mapeo de la conversación para mostrar preguntas y respuestas */}
              {conversation.map((interaction, index) => {
                const regex = /(https?:\/\/[^\s]+)/g;
                const urls = interaction.assistantResponse.match(regex); // Encuentra todas las URLs en la respuesta

                let responseContent = interaction.assistantResponse;

                if (urls && urls.length > 0) {
                  urls.forEach((url) => {
                    responseContent = responseContent.replace(
                      url,
                      `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`
                    );
                  });
                }

                return (
                  <div key={index} className="mb-3 tw-text-black">
                    <p className="mb-3 row">
                      <strong className="col-3">Tú:</strong>
                      <span className="col-9 bg-success rounded-bottom-3 rounded-end-3  ">
                        {interaction.userQuestion}
                      </span>
                    </p>
                    <div className="d-flex row">
                      <strong className="text-info col-3">Asistente:</strong>
                      <span
                        className="col-9 bg-dark  rounded-bottom-3 rounded-end-3   "
                        dangerouslySetInnerHTML={{ __html: responseContent }}
                      />
                    </div>
                  </div>
                );
              })}
              <div className="sticky-bottom d-flex justify-content-center align-align-items-center ">
                <input
                  className="border-0 text-center tw-me-1 tw-text-black rounded-2 ms-2 col-8"
                  type="text"
                  value={message}
                  onChange={handleChange}
                  onKeyDown={handleKeyPress}
                  placeholder="Pregunta lo que quieras"
                />
                <svg onClick={sendMessage} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="tw-w-[30px] tw-h-[30px] hover:tw-fill-gray-300 tw-cursor-pointer  ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
              </div>
            </div>)

        )
      }
    </>
  );
}

export default ChatComponent;
