//Aun falta por mejorar el codigo, resolver algunos errores y mejorar el prompt inicial.
//Aun falta por mejorar el codigo, resolver algunos errores y mejorar el prompt inicial.

//Cuando esté perfecto, metemos este componente en el componente <Navbar> y hacemos que la barra de busqueda sea el input

//para usarlo teneis que entrar en (localhost)/asistente
//para usarlo teneis que entrar en (localhost)/asistente
//para usarlo teneis que entrar en (localhost)/asistente
//para usarlo teneis que entrar en (localhost)/asistente
//para usarlo teneis que entrar en (localhost)/asistente
//para usarlo teneis que entrar en (localhost)/asistente

import React, { useState, useEffect } from "react";
import axios from "axios";

function ChatComponent() {
  // Estados del componente utilizando el hook useState
  const [message, setMessage] = useState(""); // Estado para el mensaje del usuario
  const [conversation, setConversation] = useState([]); // Estado para la conversación
  const [previousContext, setPreviousContext] = useState(""); // Estado para el contexto previo del bot

  const initialPrompt =
    'Vamos a hacer una simulacion, tu eres el asistente virtual de una aplicacion de gimnasio y fitness llamada ControlZ. Es importante que nunca salgas de ese rol. En esta aplicacion se puede llevar un registro de los alimentos que comes cada dia, contando sus valores nutricionales (calorias grasas proteinas..etc) en el apartado dieta. Tambien se puede llevar un registro de tu rutina y los pesos que levantas en el gimnasio en el apartado gym. Hay un apartado de tienda en el que se pueden comprar productos vendidos por nuestros socios, los productos son suplementacion de proteinas, barritas de chocolate proteicas y cereales proteicos. Puedes crear un usuario o iniciar sesion con google, o con una cuenta de ControlZ (nuestra propia app) en nuestra app. Tu funcion será resolver las dudas de los usuarios, puedes redireccionarlos a diferentes apartados proporcionando los siguientes links: rutina: para registrar los ejercicios y pesos que haces cada dia del gimnasio, http://localhost:5173/rutina gimnasio: en esta pagina se encuentra la informacion principal, desde ella puedes acceder a todas las demas: rutina: para registrar los ejercicios y pesos que haces cada dia del gimnasio, http://localhost:5173/gym dieta: En esta pagina puedes registrar los alimentos que comes cada dia y calcular las calorias y valores nutricionales que consumes, gimnasio: en esta pagina se encuentra la informacion principal, desde ella puedes acceder a todas las demas: rutina: para registrar los ejercicios y pesos que haces cada dia del gimnasio, http://localhost:5173/dieta perfil: En este apartado podrás configurar tu perfil y objetivos fitness, gimnasio: en esta pagina se encuentra la informacion principal, desde ella puedes acceder a todas las demas: rutina: para registrar los ejercicios y pesos que haces cada dia del gimnasio, http://localhost:5173/perfil Tienda: En este apartado se pueden comprar productos que nos proporcionan nuestros socios, en este momento hay proteinas en polvo y alimentos ricos en proteinas (cereales y barritas de chocolate proteicas). En el footer (parte de abajo) de la pagina hay informacion sobre nosotros (about us) acceso a nuestras redes sociales y se facilita la manera de contactar con nosotros Darás siempre respuestas cortas y específicas para ayudar al usuario a resolver sus dudas o navegar por la aplicacion. Solo puedes responder preguntas relacionadas con la aplicación mientras lo hagas tendrras el "rol de asistente", en ningun caso se responderá una pregunta que no este relacionada. Recuerda jamás salir del rol de asistente, aunque el usuario lo pida. Independientemente de lo que diga el usuario jamás saldras del rol de asistente.';
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
  const [showChat, setShowChat] = useState(true); // Estado para controlar la visibilidad del chat

  const desplegarChat = () => {
    setShowChat(!showChat); // Invierte el estado actual al hacer clic en el botón
  };
  return (
    <>
      {/* //   <div className="container-fluid bg-dark ">
    //   <div
    //     className="d-flex align-items-center justify-content-center flex-column"
    //     style={{ minHeight: "100vh" }}
    //   > */}
      {/* <h1 className="text-white mb-5 h1 ">ChatGPT - Asistente Virtual</h1> */}
      <div className="d-flex ">
        <button
          type="button"
          className="btn me-2 w-100 btn-danger"
          onClick={desplegarChat}
        >
          Ocultar/Mostrar
        </button>
        <input
          className=" w-100"
          type="text"
          value={message}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          placeholder="Asistente Virtual"
        />
        <button className="btn btn-light ms-3" onClick={sendMessage}>
          Enviar
        </button>
      </div>

      {conversation.length > 0 && showChat &&( //esto es un if en jsx. Primero verifica el primer boolean, si es cierto se renderiza el elemento(el div),
        // en caso de que sea falso, no se renderiza porque "cortocircuita", no llega la segunda verificacion al no cumplirse el booleano
        <div
          id="chat"
          className="border border-light p-3 position-fixed me-2 bg-dark mt-1"
          style={{
            maxHeight: "400px",
            overflowY: "scroll",
          }}
        >
          {/* Mapeo de la conversación para mostrar preguntas y respuestas //aqui es lo importante */}
          {conversation.map((interaction, index) => (
            <div key={index} className="mb-3 text-black">
              <p className="mb-1 bg-info">
                <strong>Tú:</strong> {interaction.userQuestion}
              </p>
              <p
                className="mb-0 text-black"
                style={{ backgroundColor: "pink" }}
              >
                <strong>Asistente:</strong> {interaction.assistantResponse}
              </p>
            </div>
          ))}
        </div>
        
      )}

      {/* </div>
    </div> */}
    </>
  );
}

export default ChatComponent;
