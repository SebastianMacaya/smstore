import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavDropdown from "react-bootstrap/NavDropdown";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <Navbar bg="ligth" expand="lg">
        <Link to="/" exact>
          <Navbar.Brand href="#">SM STORE</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <Link to="/categoria/motorola" exact>
                <NavDropdown.Item href="#action/3.1">Motorola</NavDropdown.Item>
              </Link>
              <Link to="/categoria/samsung" exact>
                <NavDropdown.Item href="#action/3.2">Samsung </NavDropdown.Item>
              </Link>
              <Link to="/categoria/nokia" exact>
                <NavDropdown.Item href="/categoria/nokia">
                  Nokia
                </NavDropdown.Item>
              </Link>
            </NavDropdown>
            <Nav.Link href="#action3">Contacto</Nav.Link>
            <CartWidget />
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
