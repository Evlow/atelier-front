
import { Outlet } from 'react-router-dom';
import './App.css'
import HomePageCarrousel from './components/homePageCarrousel';

function App() {

  return (
    <>
  <Outlet></Outlet>
  <HomePageCarrousel></HomePageCarrousel>
    </>
  )
}

export default App
