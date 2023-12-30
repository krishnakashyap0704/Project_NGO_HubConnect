import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import './Style/Header.css';

export function Header(){
    return (
      <>
        <Navbar
        collapseOnSelect
        expand="lg"
        className="bg-body-tertiary header"
        >
        <Container>
          <Navbar.Brand href="#home">
            <div style={{ width: "100px", height: "50px", overflow: "hidden" }}>
              <img src="./logo1.png" alt="" className="img-fluid h-100" />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/" className="Navlink">Home</Nav.Link>
              <Nav.Link href="/about" className="Navlink">About us</Nav.Link>
              <Nav.Link href="#" className="Navlink">Events</Nav.Link> 

              <NavDropdown title="NGO Directory " id="collapsible-nav-dropdown">
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
              <NavDropdown title="Register/logIn" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#" className="Navlink">Admin</NavDropdown.Item>
                <NavDropdown.Item href="#" className="Navlink">User</NavDropdown.Item>
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