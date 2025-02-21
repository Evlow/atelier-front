import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Register from '../register/register';
import Login from '../login/login';
import Dashboard from '../dashboard/dashboard';

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
]);
