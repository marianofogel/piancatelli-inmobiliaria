import React from "react";
import {
    Col,
    Row,
    Container,
    Stack,
    Image,
    NavLink
} from "react-bootstrap";
import {
    FaInstagram,
    FaFacebook,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaWhatsapp,
    FaRegCopyright,
} from "react-icons/fa"
import "./Footer.css";
import FormContacto from "./Contacto";


const fecha = new Date(); //tomamos la fecha actual
const anioActual = fecha.getFullYear(); //se toma el año actual


const Footer = () => {
    return (
        <>
            <footer id="contact-form">
                <Container fluid>
                    <Row>
                        <Col className="py-3">
                            <Stack>
                                <div className="col1">
                                    <Image
                                        src={process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"}
                                        alt="Company Logo"
                                        width={150}
                                        height={150}
                                    />
                                    <h2>Juana Piancatelli</h2>
                                    <div className="footer-icons">
                                        <NavLink>
                                            <FaInstagram size={25} />
                                        </NavLink>
                                        <NavLink>
                                            <FaFacebook size={25} />
                                        </NavLink>
                                        <NavLink>
                                            <FaLinkedin size={25} />
                                        </NavLink>
                                    </div>

                                    <div className="data-fiscal">
                                        <Image
                                            src={process.env.PUBLIC_URL + "/img/data-fiscal-ejemplo.jpg"}
                                            alt="Company Logo"
                                            width={50}
                                            height={65}
                                        />
                                    </div>
                                </div>
                            </Stack>
                        </Col>

                        <Col className="py-3">
                            <Stack>
                                <h2>Contactanos</h2>

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



                            </Stack>
                        </Col>

                        <Col className="py-3">
                            <h2>Envianos tu mensaje!</h2>

                            <FormContacto />
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
