
import { Outlet } from 'react-router-dom';
import './App.css'
import Login from './login/login';

function App() {

  return (
    <>
  <Outlet></Outlet>
    <Login />
    </>
  )
}

export default App
