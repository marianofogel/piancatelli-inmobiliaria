import React from "react";
import { Link } from "react-router-dom";
import {
    Col,
    Row,
    Container,
    Stack,
    Image,

} from "react-bootstrap";
import { GoDot } from "react-icons/go";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp,
    FaDotCircle,
    FaInstagram

} from "react-icons/fa"
import "./Footer.css";
import { useNavigate } from "react-router";


const fecha = new Date(); //tomamos la fecha actual
const anioActual = fecha.getFullYear(); //se toma el año actual
const mensajeParaWhatsapp = "Hola, Piancatelli Propiedades, quería saber si me podia contactar con un tasador. Muchas gracias."
const enlaceWhatsApp = `https://wa.me/1141746012?text=${mensajeParaWhatsapp}`


const Footer = () => {

    const navigate = useNavigate();
    return (
        <>
            <footer id="contact-form">
                <Container fluid>
                    <Row className="footer-row">
                        <Col className="py-3 sm=true">
                            <Stack className="stack-logo-name">
                                <Image className="logo-footer"
                                    src={process.env.PUBLIC_URL + "/img/Piancatelli.png"}
                                    alt="Company Logo"
                                    width={230}
                                    height={100}
                                />
                                <h2 className="nombre-footer">Alejandra Baeta</h2>
                                <h5 className="nombre-footer">Matricula</h5>
                            </Stack>
                        </Col>

                        <Col className="py-3 sm=true">
                            <div className="mx-auto">
                                <h2 className="footer-busqueda">Contacto</h2>
                                <Stack>
                                    <Row>
                                        <Col className="columnas-footer">
                                            <div className="footer-contact">
                                                <p> <FaMapMarkerAlt /> Ricchieri 1534 - Hurlingham</p>
                                            </div>
                                            <div className="footer-contact">
                                                <p><FaEnvelope /> tumail@gmail.com</p>
                                            </div>
                                            <div className="footer-contact">
                                                <p><FaPhoneAlt /> 4665-2438</p>
                                            </div>
                                            <div className="footer-contact">
                                                <a href={enlaceWhatsApp} target="_blank" rel="noopener noreferrer" className="enlace-whatsapp-footer"><FaWhatsapp /> 1132817839 </a>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="link-insta" >
                                        <Link className="link-seguinos">Seguinos en Instagram</Link>

                                    </div>
                                </Stack>

                            </div>
                        </Col>


                        {/* <div className="data-fiscal">
                                        <Image
                                            src={process.env.PUBLIC_URL + "/img/data-fiscal-ejemplo.jpg"}
                                            alt="Company Logo"
                                            width={50}
                                            height={65}
                                        />
                                    </div>
                                     */}


                        <Col className="py-3 sm=true manejo-de-accesos-rapidos">
                            <div className="mx-auto">
                                <h2 className="footer-busqueda">Búsqueda Rápida</h2>
                                <Stack >
                                    <Row>
                                        <Col className="columnas-footer">
                                            <p><Link className="footer-links" >Ventas en Barrio Privados</Link></p>
                                            <p><Link className="footer-links">Ventas en Countries</Link></p>
                                            <p><Link className="footer-links" >Casas en zona</Link></p>
                                            <p><Link className="footer-links">Lotes en zona</Link></p>
                                        </Col>
                                        <Col className="columnas-footer">
                                            <p><Link className="footer-links">Alquileres en Barrios Privados</Link></p>
                                            <p><Link className="footer-links">Alquileres en Countries</Link></p>
                                            <p><Link className="footer-links">Casas en zona</Link></p>
                                            <p><Link className="footer-links">Lotes en zona</Link></p>
                                        </Col>
                                    </Row>
                                </Stack>
                            </div>
                        </Col>
                    </Row>
                </Container >
            </footer >

            <footer>
                <Container fluid>
                    <Row className="footer-bottom">
                        <div className="footer-rights">
                            © {anioActual}  Todos los derechos reservados.
                            <a href="/condiciones" className="links-legales"> - Terminos y condiciones </a>
                            <a href="/privacidad" className="links-legales"> - Politica de Privacidad </a>
                        </div>

                    </Row>
                </Container>

            </footer>

        </>
    );
};

export { Footer };
