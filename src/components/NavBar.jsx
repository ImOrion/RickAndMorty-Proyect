import { Link } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useState } from "react";
import logo from "../Img/LogoNav.png";
import s from "../CSS/NavBar.module.css";

export default function NavBar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    <Navbar key="xxl" bg="light" expand="xxl" className={`mb-4`}>
      <Container  fluid >
        <Link className={`nav-link`} to={"/home"}>
        <img className={s.img} src={logo}/>
        </Link>
        <Navbar.Toggle
        
          onClick={handleShow}
          aria-controls={`offcanvasNavbar-expand-xxl`}
        />
        <Navbar.Offcanvas
          show={show}
          onHide={handleClose}
          id={`offcanvasNavbar-expand-$"xxl"`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
          placement="end"
          className={s.navCont}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
              Rick & Morty App
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <SearchBar
                show={handleClose}
                onSearch={props.onSearch}
                closeButton
              />
              <Link className="nav-link" to={"/home"}>
                Home
              </Link>
              <Link className="nav-link" to={"/favorites"}>
                Favorites
              </Link>
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
    </div>
  );
}
