import {Routes, Route} from "react-router"
import HomePage from "../pages/HomePage";
import About from '../pages/About';
import DishMenu from '../pages/DishMenu';
import Example from "./Example";
import Reservations from "../pages/Reservations";
import OrderOnline from "../pages/OrderOnline";


function Main() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/DishMenu" element={<DishMenu/>} />
        <Route path="/Example" element={<Example/>} />
        <Route path="/Reservations" element={<Reservations/>} />
        <Route path="/OrderOnline" element={<OrderOnline/>} />
      </Routes>
    </main>
  )
}

export default Main;