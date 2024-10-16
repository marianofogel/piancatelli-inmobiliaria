import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Navbar.css";

const NavbarComponent = () => {
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

  const location = useLocation();

  return (
    <>
      <Navbar
        className={`navbar sticky-top ${navbarTransparente ? "scrolled" : ""}`}
        expand="lg"
        style={{
          backgroundColor: location.pathname !== "/" ? "#42505a" : "",
        }}
      >
        <Container fluid>
          <Navbar.Brand>
            <Link to="/">
              <Image
                src={process.env.PUBLIC_URL + "/img/Piancatelli.png"}
                alt="Company Logo"
                width={130}
                height={60}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="colapse" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto" id="nav-general">
              <Nav.Link
                as={NavLink}
                to="/"
                className="links-navbar"
                style={{
                  fontWeight: location.pathname === "/" ? "bold" : "",
                }}
              >
                INICIO
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="links-navbar"
                to="propiedades"
                style={{
                  fontWeight: location.pathname !== "/" ? "bold" : "",
                }}
              >
                PROPIEDADES
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="links-navbar"
                onClick={() => {
                  document
                    .getElementById("contenedor-principal-servicios")
                    .scrollIntoView({});
                  setTimeout(() => {
                    window.scrollBy(0, -78);
                  }, 1);
                }}
              >
                SERVICIOS
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="links-navbar"
                onClick={() => {
                  document
                    .getElementById("contenedor-ingresos")
                    .scrollIntoView({});

                  setTimeout(() => {
                    window.scrollBy(0, -78);
                  }, 1);
                }}
              >
                DESTACADAS
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="links-navbar"
                onClick={() => {
                  document.getElementById("contact-form").scrollIntoView({});
                }}
              >
                CONTACTO
              </Nav.Link>
              {/*
              <Button to="/Login" id="link-admin" onClick={handleLogeado}>
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
