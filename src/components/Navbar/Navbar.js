import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Link, NavLink, useNavigate } from "react-router-dom";

import "./Navbar.css";

const NavbarComponent = () => {
  const [navbarTransparente, setNavbarTransparente] = useState(false);
  const navigate = useNavigate();

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

  const goToServicios = () => {
    if (location.pathname !== "/") {
      navigate("/#servicios-piancatelli"); // Navegar a Home con el hash
    } else {
      const element = document.querySelector("#servicios-piancatelli");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });

        window.history.replaceState(null, "", " ");
      }
    }
  };

  const goToDestacadas = () => {
    if (location.pathname !== "/") {
      navigate("/#propiedades-destacadas-piancatelli"); // Navegar a Home con el hash
    } else {
      const element = document.querySelector(
        "#propiedades-destacadas-piancatelli"
      );
      if (element) {
        const navbarCompensacion = 94; // Ajusta este valor a la altura de tu navbar
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY; // Obtener la posición del elemento
        window.scrollTo({
          top: elementPosition - navbarCompensacion,
          behavior: "smooth",
        }); // Desplazarse

        window.history.replaceState(null, "", " ");
      }
    }
  };

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
                  fontWeight: location.pathname == "/propiedades" ? "bold" : "",
                }}
              >
                PROPIEDADES
              </Nav.Link>
              <Nav.Link as="a" className="links-navbar" onClick={goToServicios}>
                SERVICIOS
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="links-navbar"
                onClick={() => {
                  document
                    .getElementById("titulo-swiper-destacadas")
                    .scrollIntoView({});

                  setTimeout(() => {
                    window.scrollBy(0, -98);
                  }, 1);
                }}
              >
                DESTACADAS
              </Nav.Link>
              <Nav.Link
                as={NavLink}
                className="links-navbar"
                to="contacto"
                style={{
                  fontWeight: location.pathname == "/contacto" ? "bold" : "",
                }}
              >
                CONTACTO
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export { NavbarComponent };
