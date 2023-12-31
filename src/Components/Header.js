import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Style/Header.css';
import logo from "./Image/logo.png";

export function Header(){
    return (
      <>
        <Navbar
        collapseOnSelect
        expand="lg"
        className="primary"
        >
        <Container>
          <Navbar.Brand href="#home">
            <div style={{ width: "100px", height: "50px", overflow: "hidden" }}>
              <img src="./logo.png" alt="" className="img-fluid h-100" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/" className="Navlink">Home</Nav.Link>
              <Nav.Link href="/about" className="Navlink">About us</Nav.Link>
              <Nav.Link href="/registerevent" className="Navlink">Events</Nav.Link> 

              <Nav.Link href="#" className="Navlink">NGO Directory</Nav.Link>
              <NavDropdown id="collapsible-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1"> 
                  NGO's (State-wise){" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  NGO's (Sector-wise)
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/contact" className="Navlink">Contact Us</Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link href="#" className="Navlink">Register/Login</Nav.Link>
              <NavDropdown  id="collapsible-nav-dropdown">
                <NavDropdown.Item href="/login">Admin</NavDropdown.Item>
                <NavDropdown.Item href="/login">User</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar  data-bs-theme="dark" className="secondary">
        <Container className="secondary-con">
          <h5 ><span className="navconnect">Connect with NGOHubConnect </span><span className="navquote"> because "There is no exercise better for the heart than reaching down and lifting people up."</span></h5>
        </Container>
      </Navbar>
        
      </>
      );
}