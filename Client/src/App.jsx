import Gym from "./pages/Gym.jsx";
import Rutina from "./pages/Rutina.jsx";
import Dieta from "./pages/Dieta.jsx";
import Perfil from "./pages/Perfil.jsx";
import Principal from "./pages/Principal.jsx";
import Tienda from "./pages/Tienda.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./pages/Index.jsx";

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
