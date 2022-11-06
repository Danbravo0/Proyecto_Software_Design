import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { UsarCarritoCompras } from '../context/ShoppingCartContext.tsx'

export function Navbar1() {
  // const 
  const { cantidadCarrito } = UsarCarritoCompras()
  return (
    <NavbarBs sticky="top" className="color-nav">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink} className = "nav-item-text">
            Home
          </Nav.Link>
          <Nav.Link to="/terms" as={NavLink} className = "nav-item-text">
            Terms
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink} className = "nav-item-text">
            About
          </Nav.Link>
          <Nav.Link to="/tienda" as={NavLink} className = "nav-item-text">
            Tienda
          </Nav.Link>
          <Nav.Link to="/eventos" as={NavLink} className = "nav-item-text">
            Eventos
          </Nav.Link>




        </Nav>

        {cantidadCarrito > 0 && (<Button
         style = {{width : "3rem", height : "3rem", position :"relative", color : "white", backgroundColor : "#333333"}} className="btn-outline-dark rounded-circle">
          <Nav.Link to="/carrito" as={NavLink} style={{position: "relative"}}>
                  <span className="material-symbols-outlined">
                    shopping_cart 
                  </span>
              </Nav.Link>

          <div className="rounded-circle d-flex justify-content-center align-items-center" style =
          {{color : "black", width : "1.5rem", height : "1.5rem", position : "absolute" ,bottom : 0, right:0, transform : "translate(25%,25%)" ,  backgroundColor : "white"}}>
          {cantidadCarrito}
          </div>

        </Button>
        )}
        </Container>
    </NavbarBs>
  )
}