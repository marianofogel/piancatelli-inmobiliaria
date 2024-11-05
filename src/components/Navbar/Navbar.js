import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

import "./Navbar.css";

const NavbarComponent = () => {
  const [navbarTransparente, setNavbarTransparente] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [targetSection, setTargetSection] = useState(null); // Sección a la que queremos hacer scroll

  const handleNavbarTransparente = () => {
    const pixeles = window.scrollY;
    setNavbarTransparente(pixeles > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavbarTransparente);
    return () => {
      window.removeEventListener("scroll", handleNavbarTransparente);
    };
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && targetSection) {
      // Espera un poco antes de hacer el scroll para que el contenido se cargue
      const timeoutId = setTimeout(() => {
        scroller.scrollTo(targetSection, {
          smooth: true,
          duration: 500,
          offset: -100,
        });
        setTargetSection(null); // Resetear el targetSection después del scroll
      }, 450); // Ajusta el tiempo según sea necesario
  
      return () => clearTimeout(timeoutId); // Limpia el timeout al desmontar
    }
  }, [location.pathname, targetSection]);

  const handleScrollToSection = (sectionName) => {
    if (location.pathname !== '/') {
      setTargetSection(sectionName);
      navigate('/'); // Navegar a inicio
    } else {
      // Si ya estamos en inicio, hace scroll inmediatamente
      scroller.scrollTo(sectionName, {
        smooth: true,
        duration: 500,
        offset: -100,
      });
    }
  };

  return (
    <Navbar
      className={`navbar ${navbarTransparente ? "scrolled" : ""}`}
      expand="lg"
      fixed="top"
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
              width={110}
              height={45}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="colapse" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" id="nav-general">
            <Nav.Link as={NavLink} to="/" className="links-navbar" style={{ fontWeight: location.pathname === "/" ? "bold" : "" }}>
              INICIO
            </Nav.Link>
            <Nav.Link as={NavLink} to="/propiedades" className="links-navbar" style={{ fontWeight: location.pathname === "/propiedades" ? "bold" : "" }}>
              PROPIEDADES
            </Nav.Link>
            <Nav.Link className="links-navbar" onClick={() => handleScrollToSection('servicios')}>
              SERVICIOS
            </Nav.Link>
            <Nav.Link className="links-navbar" onClick={() => handleScrollToSection('destacadas')}>
              DESTACADAS
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacto" className="links-navbar" style={{ fontWeight: location.pathname === "/contacto" ? "bold" : "" }}>
              CONTACTO
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { NavbarComponent };
