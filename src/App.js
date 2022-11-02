import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar1 } from './components/Navbar1';
import { Car } from './components/Car';
import { Terms } from './paginas/Terms';
import { Tienda } from './paginas/Tienda';
import {Route, Routes} from 'react-router-dom';
import { TripleColumnbutton } from './components/TripleColumnbutton';
import { Modal1 } from './components/NewsletterModal';
import { Modal2 } from './components/ReservationModal';
// import { Formioreservation } from './components/Formioreservation';
import { CarritoComprasProvider } from './context/ShoppingCartContext.tsx';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { Paypal } from './components/Paypal';
import { CarritoCompras } from './components/CarritoCompras.tsx';
// // Componente principal
//El archivo tiene el mismo nombre que la funcion

export const App = () => {
  return (
    <div>
      <CarritoComprasProvider>
      <Navbar1/>
      <Routes>
        <Route  path = "/" element = {<><Car/> <br/> <TripleColumnbutton/> <Modal1/> <Modal2/> </>}/>
        {/* <Route  path = "/" element = {<> <Car/> <Terms/> </>}/> */}
        <Route  path = "/terms" element = {<Terms/>}/>
        <Route  path = "/tienda" element = {<><Tienda/> <Paypal/> </>}/>
        <Route  path = "/carrito" element = {<><CarritoCompras/> </>}/>

      </Routes>
    </CarritoComprasProvider>
    </div>
  )
}
