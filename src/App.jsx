import Gym from "./paginas/Gym.jsx";
import Rutina from "./paginas/Rutina.jsx";
import Dieta from "./paginas/Dieta.jsx";
import Perfil from "./paginas/Perfil.jsx";
import Principal from "./paginas/Principal.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/gym", element: <Gym /> },
  { path: "/rutina", element: <Rutina /> },
  { path: "/dieta", element: <Dieta /> },
  { path: "/perfil", element: <Perfil /> },
  { path: "/principal", element: <Principal /> }

]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
