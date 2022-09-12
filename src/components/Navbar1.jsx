import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
// import { useShoppingCart } from "../context/ShoppingCartContext"

export function Navbar1() {
//   const { openCart, cartQuantity } = useShoppingCart()
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
        </Nav>
        </Container>
    </NavbarBs>
  )
}