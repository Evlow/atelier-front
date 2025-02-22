import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../register/register";
import Login from "../login/login";
import Dashboard from "../dashboard/dashboard";
import Aside from "../admin/aside/aside";
import RequireAuth from "./requireAuth";  
import AdminNav from "../admin/adminNav/adminNav";
import CreationDetails from "../creations/creationDetails";
import Animatronics from "../pages/animatronics";
import HomePage from "../pages/homePage";
import EscapeGames from "../pages/escapeGames";
import CreationWorkshops from "../pages/creationWorkshops";
import Holograms from "../pages/holograms";
import VariousCreations from "../pages/variousCreations";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "accueil", element: <HomePage /> },
      { path: "animatroniques", element: <Animatronics /> },
      { path: "escape-games", element: <EscapeGames /> },
      { path: "creations-atelier", element: <CreationWorkshops /> },
      { path: "hologrammes-et-mapping", element: <Holograms /> },
      { path: "creations-diverses", element: <VariousCreations /> },
      { path: "inscription", element: <Register /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "connexion", element: <Login /> },
      { path: ":name/:id", element: <CreationDetails /> },
    ],
  },
  {
    element: <RequireAuth roles={["Admin"]} />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "navBarAdmin", element: <AdminNav /> },
      { path: "admin", element: <Aside /> },
    ],
  },
]);
