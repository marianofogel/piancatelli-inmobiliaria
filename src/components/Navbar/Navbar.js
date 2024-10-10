import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./Navbar.css";

const NavbarComponent = () => {
  const [estaLogeado, setEstaLogeado] = useState(false);
  const [navbarTransparente, setNavbarTransparente] = useState(false);

  const handleNavbarTransparente = () => {
    const pixeles = window.scrollY; // Mide cuantos pixeles se scrollearon
    if (pixeles > 50) {
      // Si fueron mas de 50...
      setNavbarTransparente(true);
    } else {
      setNavbarTransparente(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarTransparente); //Cada vez que se haga scroll se llama a la funcion navbar transparente
    return () => {
      window.removeEventListener("scroll", handleNavbarTransparente); //Cuando el componente no se usa, lo desmonta, y vuelve a ser transparente
    };
  });

  const navbarClasses = ["navbar"];
  if (navbarTransparente) {
    //si esto es true
    navbarClasses.push("scrolled"); //se agrega al array y queda todo en un cadena con el JOIN en el return.
  }

  const handleLogeado = (event) => {
    event.preventDefault();
    setEstaLogeado(!estaLogeado);
  };

  return (
    <>
      <Navbar
        className={`navbar sticky-top ${navbarTransparente ? "scrolled" : ""}`}
        expand="md"
      >
        <Container fluid>
          <Navbar.Brand>
            <Link href="#">
              <Image
                src={process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"}
                alt="Company Logo"
                width={125}
                height={100}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="colapse" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" id="nav-general">
              <Nav.Link href="/home" className="links-navbar" id="inicio-navbar">
                INICIO
              </Nav.Link>
              <NavDropdown title="PROPIEDADES" id="basic-nav-dropdown">
                <NavDropdown.Item href="/casas" id="navbar-item-drop">CASAS</NavDropdown.Item>
                <NavDropdown.Item href="/departamentos" id="navbar-item-drop">
                  DEPARTAMENTOS
                </NavDropdown.Item>
                <NavDropdown.Item href="./monoambiente" id="navbar-item-drop">
                  MONOAMBIENTE
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/servicios" className="links-navbar">
                SERVICIOS
              </Nav.Link>
              <Nav.Link href="/destacadas" className="links-navbar">
                DESTACADAS
              </Nav.Link>
              <Nav.Link
                className="links-navbar"
                onClick={() => {
                  document.getElementById("contact-form").scrollIntoView({
                  });
                }}
              >
                CONTACTO
              </Nav.Link>
              {/*
              <Button href="/Login" id="link-admin" onClick={handleLogeado}>
                <Image
                  src={process.env.PUBLIC_URL + "/img/casa.png"}
                  width={17}
                />
                {estaLogeado ? "Log Out" : "Sign In"}{" "}
                {/* Pasarle un sistema que valide el inicio de sesion 
              </Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export { NavbarComponent };
