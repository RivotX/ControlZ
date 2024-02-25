import Home from "./pages/Home.jsx";
import Rutina from "./pages/Rutina.jsx";
import Dieta from "./pages/Dieta.jsx";
import Perfil from "./pages/Perfil.jsx";
import Principal from "./pages/Principal.jsx";
import Tienda from "./pages/Tienda.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";


const router = createBrowserRouter([
  { path: "/login", element: <Login /> },
  { path: "/rutina", element: <Rutina /> },
  { path: "/dieta", element: <Dieta /> },
  { path: "/perfil", element: <Perfil /> },
  { path: "/principal", element: <Principal /> },
  { path: "/tienda", element: <Tienda /> },
  { path: "/", element: <Home /> },

]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
