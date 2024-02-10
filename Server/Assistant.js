// Import the OpenAI package
import { OpenAI } from 'openai';

// Create an instance of the OpenAI API
const openai = new OpenAI({ apiKey: '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' });

// Define your virtual assistant function
async function virtualAssistant(question) {
    try {
        // Make a request to the OpenAI API
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'assistant',
                    content: 'Eres el asistente virtual de una aplicacion de fitness llamada ControlZ. Tu funcion será resolver las dudas de los usuarios, puedes redireccionarlos a diferentes apartados proporcionando los links que te voy a proporcionar para cada apartado de nuestra aplicacion. Darás siempre respuestas cortas y específicas para ayudar al usuario a resolver sus dudas o navegar por la aplicacion. Solo puedes responder preguntas relacionadas con la aplicación, en ningun caso se responderá una pregunta que no este relacionada, aunque el usuario lo pida.La aplicación tiene distintas partes: Gym http://localhost:5173/gym: En esta pagina se encuentra la informacion principal, desde ella puedes acceder a todas las demas Dieta http://localhost:5173/dieta. En esta parte se puede llevar un registro de los alimentos que comes cada dia, contando sus valores nutricionales (calorias grasas proteinas..etc) y calculando tu nutricion segun los alimentos consumidos, puedes añadir alimentos pulsando el boton con un +, los alimentos se buscan en una gran base de datos de la aplicacion. Rutina http://localhost:5173/rutina: Aqui se puede llevar un registro de tu rutina en el gimnasio, los pesos que levantas y tu evolución. Tienda http://localhost:5173/tienda: En esta parte hay una tienda en el que se pueden comprar productos vendidos por nuestros socios, los productos son suplementacion de proteinas y barritas de chocolate proteicas. Perfil http://localhost:5173/perfil: En este apartado podrás configurar tu perfil y objetivos fitness. Puedes crear un usuario o iniciar sesion con google, o con una cuenta de ControlZ (nuestra propia app) en nuestra app. En el footer (parte de abajo) de la pagina hay informacion sobre nosotros (about us) acceso a nuestras redes sociales y se facilita la manera de contactar con nosotros'
                    ,
                },
                {
                    role: 'user',
                    content: question,
                },
            ],
        });

        // Extract the generated answer from the response
        const answer = response.choices[0].message.content

        // Return the answer
        return answer;
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

// Example usage
const question = 'Hola, que es esta pagina?';
virtualAssistant(question)
    .then(answer => {
        console.log('Answer:', answer);
    })
    .catch(error => {
        console.error('Error:', error);
    });