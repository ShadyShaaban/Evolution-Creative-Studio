import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, Link } from 'react-router-dom';
import logo from "../Resources/Asset 14@4x.png";
import classes from "./navbar.module.css"



function NavBar() {
    
return(

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
  <Container>
 
      <Navbar.Brand to="/home" as={Link}>
        <img
          alt=""
          src={logo}
          width="auto"
          height="50"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <Nav.Link as={Link} to="/home">Home</Nav.Link>
    <Nav.Link as={Link} to="/services">Services</Nav.Link>
    <Nav.Link as={Link} to="/about">About</Nav.Link>
    <Nav.Link as={Link} to="/contactus">Contact</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)
}
export default NavBar;