import { Col, Row, Container, Stack, Image } from "react-bootstrap";
import "../Contacto/Contacto.css";

export default function PoliticasDePrivacidad() {
  return (
    <Container fluid className="mt-5 py-5">
      <Row className="container-contacto">
        <Col className="col-contacto">
          <h2 className="pb-3" style={{ color: "red" }}>
            Politicas de Privacidad
          </h2>
          <div className="col-contacto">
            <p className="pt-5 m-1" style={{ textAlign: "justify" }}>
              La Política de Privacidad que se enuncia a continuación se aplica
              a toda información personal que los usuarios brinden durante la
              utilización del sitio www.piancatelli-propiedades.com.ar.
              <p
                style={{
                  margin: "15px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  1- Destino de la información recopilada:
                </span>{" "}
                Los datos personales que los usuarios brinden, serán utilizados
                para proveerle al usuario información sobre ventas y alquileres,
                así como otros intereses relacionados. Piancatelli Propiedades
                expresa que los datos personales objeto de tratamiento no serán
                utilizados para finalidades distintas o incompatibles con las
                que motivaron su obtención, y serán utilizados únicamente por
                este.
              </p>
              <p
                style={{
                  margin: "15px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  2- Aceptación de los términos y condiciones:
                </span>{" "}
                Al brindar sus datos personales, los usuarios autorizan a
                Piancatelli Propiedades a comunicarse con ellos por vía
                telefónica o electrónica enviando información que pueda ser de
                su interés, incluyendo publicidad e información sobre temas
                inmobiliarios.
              </p>
              <p
                style={{
                  margin: "15px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>3- Base de Datos:</span>{" "}
                Los datos recabados por los formularios correspondientes serán
                incorporados a una base de datos de Piancatelli Propiedades,
                sita en Dirección DISTRITO T - Oficina 118 - Colectora Norte
                Acceso Oeste km 47 - General Rodriguez - Buenos Aires,
                Argentina. Los usuarios tendrán derecho a solicitar el retiro o
                bloqueo de su nombre de los bancos de datos en cualquier
                momento. En caso de que los usuarios no deseen ser contactados
                con estos fines, podrán notificarlo fehacientemente a
                info@piancatelli-propiedades.com.ar , y se procederá a
                interrumpir este tipo de comunicaciones en el menor tiempo que
                le sea posible.
              </p>
              <p
                style={{
                  margin: "15px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  4- Seguridad de protección de los datos:
                </span>{" "}
                Piancatelli Propiedades realiza su mejor esfuerzo para la
                protección de los datos personales legalmente requeridos y
                procura instalar medios y medidas técnicas de protección. No
                obstante, el usuario debe ser consciente de que las medidas de
                seguridad en Internet no son infranqueables.
              </p>
              <p
                style={{
                  margin: "15px",
                }}
              >
                <span style={{ fontWeight: "bold" }}>
                  5- Exclusión de garantías y de responsabilidad:
                </span>{" "}
                Piancatelli Propiedades excluye, con toda la extensión permitida
                por el ordenamiento jurídico, cualquier responsabilidad por los
                daños y perjuicios de toda naturaleza que puedan llegar a
                ocurrir. En todo aspecto, resultará aplicable los términos y
                condiciones que regula el uso del servicio del sitio
                www.piancatelli-propiedades.com.ar que Piancatelli Propiedades
                pone a disposición de los usuarios de Internet.{" "}
              </p>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
