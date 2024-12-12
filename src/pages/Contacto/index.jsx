import { FormContacto } from "../../components/FormContacto/FormContacto";
import { Col, Row, Container, Stack, Image } from "react-bootstrap";
import "../Contacto/Contacto.css";
import ReactGA from "react-ga4";
import { useEffect } from "react";

export default function Contacto() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/contacto",
      title: "Pagina de contacto",
    });
  }, []);

  return (
    <Container fluid className="mt-5 py-5">
      <Row className="container-contacto">
        <Col
          xs={12}
          md={6}
          className="col-contacto d-flex justify-content-center align-items-center py-5"
        >
          <Image
            src={process.env.PUBLIC_URL + "/img/contacto-pianca.jpg"}
            alt="Piancatelli Company"
            className="imagen-contacto img-fluid"
            width={600}
            height={420}
          />
        </Col>
        <Col xs={12} md={6} className="col-contacto">
          <Stack>
            <h2 className="pb-3 titulo-mensaje">Envianos tu Mensaje!</h2>
            <div className="col-contacto">
              <FormContacto />
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
}
