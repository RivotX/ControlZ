import Gym from "./paginas/Gym.jsx";
import Rutina from "./paginas/Rutina.jsx";
import Dieta from "./paginas/Dieta.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Gym /> },
  { path: "/rutina", element: <Rutina /> },
  { path: "/dieta", element: <Dieta /> }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
