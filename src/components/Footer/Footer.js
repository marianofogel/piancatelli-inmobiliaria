import React from "react";
import { Link } from "react-router-dom";
import {
    Col,
    Row,
    Container,
    Stack,
    Image,
    NavLink,
} from "react-bootstrap";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp,

} from "react-icons/fa"
import "./Footer.css";



const fecha = new Date(); //tomamos la fecha actual
const anioActual = fecha.getFullYear(); //se toma el año actual


const Footer = () => {
    return (
        <>
            <footer id="contact-form">
                <Container fluid>
                    <Row className="footer-row">
                        <Col className="py-3">
                            <Stack>
                                <div className="mx-auto">
                                    <Image
                                        src={process.env.PUBLIC_URL + "/img/Piancatelli.png"}
                                        alt="Company Logo"
                                        width={230}
                                        height={100}
                                    />
                                    <h2>Juana Piancatelli</h2>

                                    <div className="footer-contact">
                                        <FaMapMarkerAlt />
                                        Ricchieri 1534 - Hurlingham
                                    </div>

                                    <div className="footer-contact">
                                        <FaEnvelope />
                                        tumail@gmail.com
                                    </div>

                                    <div className="footer-contact">
                                        <FaPhoneAlt />
                                        4665-2438
                                    </div>

                                    <div className="footer-contact">
                                        <FaWhatsapp />
                                        1132817839
                                    </div>

                                    <div className="link-insta" >
                                        <Link className="link-seguinos">Seguinos en Instagram
                                        </Link>
                                    </div>



                                    {/* <div className="data-fiscal">
                                        <Image
                                            src={process.env.PUBLIC_URL + "/img/data-fiscal-ejemplo.jpg"}
                                            alt="Company Logo"
                                            width={50}
                                            height={65}
                                        />
                                    </div>
                                     */}
                                </div>

                            </Stack>
                        </Col>

                        <Col className="py-3">
                            <Stack >
                                <div className="mx-auto">
                                    <h2 className="footer-titulo">Búsqueda Rápida</h2>
                                    <Link className="footer-links" >Ventas en Barrio Privados</Link>
                                    <Link className="footer-links">Ventas en Countries</Link>
                                    <Link className="footer-links">Alquileres en Barrios Privados</Link>
                                    <Link className="footer-links">Alquileres en Countries</Link>
                                    <Link className="footer-links">Casas en zona</Link>
                                    <Link className="footer-links">Lotes en zona</Link>
                                    <Link className="footer-links">Casas en zona</Link>
                                    <Link className="footer-links">Lotes en zona</Link>
                                </div>
                            </Stack>
                        </Col>


                    </Row>
                </Container>
            </footer >

            <footer>
                <Container fluid>
                    <Row className="footer-bottom">
                        <div className="footer-rights">
                            © {anioActual}  Todos los derechos reservados
                        </div>

                    </Row>
                </Container>

            </footer>

        </>
    );
};

export { Footer };
