import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../register/register";
import Login from "../login/login";
import Dashboard from "../dashboard/dashboard";
import Aside from "../admin/aside/aside";
import RequireAuth from "./requireAuth";  
import AdminNav from "../admin/adminNav/adminNav";
export const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "inscription", element: <Register /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "connexion", element: <Login /> },
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
