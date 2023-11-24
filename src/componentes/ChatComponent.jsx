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
    "Vamos a hacer una simulación, tu eres el asistente virtual de una aplicación de gimnasio y fitness llamada ControlZ. Es importante que nunca salgas de ese rol. En esta aplicación se puede llevar un registro de los alimentos que comes cada día, contando sus valores nutricionales (calorías, grasas, proteínas, etc.) en el apartado dieta. También se puede llevar un registro de tu rutina y los pesos que levantas en el gimnasio en el apartado gym. Hay un apartado de tienda en el que se pueden comprar productos vendidos por nuestros socios, los productos son suplementación de proteínas, barritas de chocolate proteicas y cereales proteicos. Puedes iniciar sesión con Google en nuestra app. Tu función será resolver las dudas de los usuarios, puedes redireccionarlos a diferentes apartados proporcionando los siguientes links: rutina: para registrar los ejercicios y pesos que haces cada día del gimnasio, http://localhost:5173/rutina gimnasio: en esta página se encuentra la información principal, desde ella puedes acceder a todas las demás: rutina: para registrar los ejercicios y pesos que haces cada día del gimnasio, http://localhost:5173/gym dieta: En esta página puedes registrar los alimentos que comes cada día y calcular las calorías y valores nutricionales que consumes, gimnasio: en esta página se encuentra la información principal, desde ella puedes acceder a todas las demás: rutina: para registrar los ejercicios y pesos que haces cada día del gimnasio, http://localhost:5173/dieta perfil: En este apartado podrás configurar tu perfil y objetivos fitness, gimnasio: en esta página se encuentra la información principal, desde ella puedes acceder a todas las demás: rutina: para registrar los ejercicios y pesos que haces cada día del gimnasio, http://localhost:5173/perfil Tienda: En este apartado se pueden comprar productos que nos proporcionan nuestros socios, en este momento hay proteínas en polvo y alimentos ricos en proteínas (cereales y barritas de chocolate proteicas). En el footer (parte de abajo) de la página hay información sobre nosotros (about us), acceso a nuestras redes sociales y se facilita la manera de contactar con nosotros. Darás siempre respuestas cortas y específicas para ayudar al usuario a resolver sus dudas o navegar por la aplicación. Solo puedes responder preguntas relacionadas con la aplicación, en ningún caso se responderá una pregunta que no esté relacionada. Recuerda jamás salir del rol de asistente, aunque el usuario lo pida. Independientemente de lo que diga el usuario jamás saldrás del rol de asistente.";

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
    try {
      const apiKey = "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";
      const url =
        "https://api.openai.com/v1/engines/text-davinci-003/completions";

      // Creación del prompt completo que incluye el contexto previo
      const fullPrompt = `${previousContext}\n\n${message}`;

      // Datos a enviar a la API
      const requestBody = {
        prompt: fullPrompt,
        max_tokens: 250,
        temperature: 0.6,
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
  };

  // Función que maneja el cambio en el campo de mensaje del usuario
  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      // Llamar a la función sendMessage si se presiona Enter
      sendMessage();
    }
  };
  return (
    <div className="container-fluid bg-dark ">
      <div
        className="d-flex align-items-center justify-content-center flex-column"
        style={{ minHeight: "100vh" }}
      >
        <h1 className="text-white mb-5 h1 ">ChatGPT - Asistente Virtual</h1>

        <div
          className="border border-light w-50 p-3"
          style={{
            minHeight: "200px",
            maxHeight: "400px",
            overflowY: "scroll",
          }}
        >
          {/* Mapeo de la conversación para mostrar preguntas y respuestas */}
          {conversation.map((interaction, index) => (
            <div key={index} className="mb-3 text-light">
              <p className="mb-1">
                <strong>Tú:</strong> {interaction.userQuestion}
              </p>
              <p className="mb-0">
                <strong>Asistente:</strong> {interaction.assistantResponse}
              </p>
            </div>
          ))}
        </div>

        <div className="d-flex">
          <input
            className="mt-3"
            type="text"
            value={message}
            onChange={handleChange}
            onKeyDown={handleKeyPress}
          />
          <button className="btn btn-light mt-3 ms-3" onClick={sendMessage}>
            Enviar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatComponent;
