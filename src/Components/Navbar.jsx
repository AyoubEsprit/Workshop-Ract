import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>My Shop</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link as={NavLink} to="/" end>
          Home
        </Nav.Link>
        <Nav.Link as={NavLink} to="/events">
          Events
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
