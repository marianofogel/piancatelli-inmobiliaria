import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container, Stack, Image } from "react-bootstrap";
import { FaMapMarkerAlt, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import useFilterStore from "../../store";
import useFetchTiposYLocalidad from "../../hooks/useFetchTiposYLocalidad";

const fecha = new Date(); //tomamos la fecha actual
const anioActual = fecha.getFullYear(); //se toma el año actual
const mensajeParaWhatsapp =
  "Hola, Piancatelli Propiedades, quería saber si me podia contactar con un tasador. Muchas gracias.";
const enlaceWhatsApp = `https://wa.me/1144113191?text=${mensajeParaWhatsapp}`;

const Footer = () => {
  useFetchTiposYLocalidad();
  const { setFilters, localidades } = useFilterStore();
  const navigate = useNavigate();

  const handleFooterClick = (localidad) => {
    const localizationId = localidad.location_id;

    setFilters({ localizationId });
    navigate("/propiedades");
  };

  return (
    <>
      <footer id="contact-form">
        <Container fluid>
          <Row className="footer-row">
            <Col className="py-3 sm=true">
              <Stack className="stack-logo-name">
                <Image
                  className="logo-footer"
                  src={process.env.PUBLIC_URL + "img/piancatelli logo.png"}
                  alt="Company Logo"
                  width={180}
                  height={100}
                />
                <h2 className="nombre-footer">Christian Piancatelli</h2>
                <h5 className="matricula-footer">
                  CMCPDJMGR.MATRICULA: N°349
                </h5>
                <h6 className="matricula-footer">
                  Colegio Martilleros y Corresores Públicos del Departamento Judicial Moreno-General Rodriguez
                </h6>
              </Stack>
            </Col>


            <Col className="py-3 sm=true">
              <div className="mx-auto">
                <h2 className="footer-busqueda">Contacto</h2>
                <Stack>
                  <Row>
                    <Col className="columnas-footer">
                      <div className="footer-contact">
                        <p>
                          {" "}
                          <FaMapMarkerAlt /> Dirección DISTRITO T - Oficina 118
                          - Colectora Norte Acceso Oeste km 47 - General
                          Rodriguez - Bs As
                        </p>
                      </div>
                      <div className="footer-contact">
                        <a
                          className="enlace-whatsapp-footer"
                        >
                          <FaEnvelope /> info@piancatelli-propiedades.com.ar
                        </a>
                      </div>

                      <div className="footer-contact">
                        <a
                          href={enlaceWhatsApp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="enlace-whatsapp-footer"
                        >
                          <FaWhatsapp /> 11 4411 3191
                        </a>
                      </div>
                    </Col>
                  </Row>
                  <div className="link-insta">
                    <Link className="link-seguinos">Seguinos en Instagram</Link>
                  </div>
                </Stack>
              </div>
            </Col>

            <Col className="py-3 sm=true manejo-de-accesos-rapidos">
              <div className="mx-auto">
                <h2 className="footer-busqueda">Búsqueda Rápida</h2>
                <Stack>
                  <Row>
                    <Col className="columnas-footer-rapidos">
                      <Row>
                        <Col className="links-rapidos-columnas">
                          {localidades
                            .sort((a, b) => b.count - a.count)
                            .slice(0, 5)
                            .map((localidad, index) => {
                              if (localidad.location_name === "Moreno") return null;
                              return (
                                <p
                                  className="footer-links-rapidos"
                                  key={index}
                                  onClick={() => handleFooterClick(localidad)}
                                  style={{
                                    cursor: "pointer",
                                    gap: "0px",
                                  }}
                                >
                                  {localidad.location_name}
                                </p>
                              )
                            })}
                        </Col>
                        <Col className="links-rapidos-columnas">
                          {localidades
                            .sort((a, b) => b.count - a.count)
                            .slice(5, 11)
                            .map((localidad, index) => {
                              if (localidad.location_name === "Moreno") return null;
                              return (
                                <p
                                  className="footer-links-rapidos"
                                  key={index}
                                  onClick={() => handleFooterClick(localidad)}
                                  style={{
                                    cursor: "pointer",
                                    gap: "0px",
                                  }}
                                >
                                  {localidad.location_name}
                                </p>
                              )
                            })}
                        </Col>
                      </Row>

                    </Col>
                  </Row>
                </Stack>
              </div>
            </Col>
          </Row>


        </Container>
      </footer>

      <footer>
        <Container fluid>
          <Row className="footer-bottom">
            <div className="footer-rights">
              © {anioActual} Todos los derechos reservados.
              <a href="/condiciones" className="links-legales">
                {" "}
                - Terminos y condiciones{" "}
              </a>
              <a href="/privacidad" className="links-legales">
                {" "}
                - Politica de Privacidad{" "}
              </a>
            </div>
          </Row>
        </Container>
      </footer>
    </>
  );

};

export { Footer };
