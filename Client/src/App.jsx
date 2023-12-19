import Gym from "./paginas/Gym.jsx";
import Rutina from "./paginas/Rutina.jsx";
import Dieta from "./paginas/Dieta.jsx";
import Perfil from "./paginas/Perfil.jsx";
import Principal from "./paginas/Principal.jsx";
import Tienda from "./paginas/Tienda.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./paginas/Index.jsx";

const router = createBrowserRouter([
  { path: "/gym", element: <Gym /> },
  { path: "/rutina", element: <Rutina /> },
  { path: "/dieta", element: <Dieta /> },
  { path: "/perfil", element: <Perfil /> },
  { path: "/principal", element: <Principal /> },
  { path: "/tienda", element: <Tienda /> },
  { path: "/", element: <Index /> },



]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
