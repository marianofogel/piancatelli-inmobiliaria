import { Col, Row, Container, Stack, Image } from "react-bootstrap";
import "../Contacto/Contacto.css";
import React, { useEffect } from "react";
import ReactGA from "react-ga4";

export default function TerminoCondiciones() {
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/terminos",
      title: "Pagina de Terminos y Condiciones",
    });
  }, []);
  return (
    <Container fluid className="mt-5 py-5">
      <Row className="container-contacto">
        <Col className="col-contacto">
          <h2 style={{ color: "red" }} className="pb-3">
            Terminos y Condiciones
          </h2>
          <div className="col-contacto">
            <p className="pt-5 m-1 text-align-center">
              <h3
                style={{
                  paddingTop: "15px",
                }}
              >
                <b>Al navegar y utilizar el sitio</b>
              </h3>
              <b> www.piancatelli-propiedades.com.ar</b> el usuario declara
              haber leído y aceptado los términos y condiciones detallados aquí.
              Si el usuario no está de acuerdo con los términos y condiciones,
              debe salir inmediatamente del sitio. Piancatelli Propiedades se
              reserva el derecho de cambiar los términos y condiciones de uso de
              su sitio web en cualquier momento y sin previo aviso.
              <h3
                style={{
                  paddingTop: "15px",
                }}
              >
                <b>Uso del contenido</b>
              </h3>
              Los usuarios utilizarán el sitio
              <b> www.piancatelli-propiedades.com.ar</b> exclusivamente para su
              uso personal. Queda expresamente prohibida la reproducción total o
              parcial de los contenidos protegidos por la ley de propiedad
              intelectual, así como el uso comercial de los contenidos del
              sitio, su venta o distribución a terceros, o su modificación.
              Cualquier otro uso requiere autorización previa escrita y
              explícita de Piancatelli Propiedades.
              <h3
                style={{
                  paddingTop: "15px",
                }}
              >
                <b>Logos y Marcas</b>
              </h3>
              Todos los logos y marcas de Piancatelli exhibidos en el sitio
              <b> www.piancatelli-propiedades.com.ar</b> están registrados y
              protegidos por la ley. Queda expresamente prohibida su
              reproducción sin autorización previa escrita y explícita de
              Piancatelli Propiedades. Cualquier otro logos y/o marca utilizados
              en el sitio<b> www.piancatelli-propiedades.com.ar</b> son de
              propiedad de sus respectivos dueños.
              <h3
                style={{
                  paddingTop: "15px",
                }}
              >
                <b>Veracidad del contenido</b>
              </h3>
              Piancatelli Propiedades no garantiza la exactitud del contenido
              expresado en el sitio<b> www.piancatelli-propiedades.com.ar</b> ,
              pudiendo este tener errores u omisiones con respecto a la
              descripción de productos y servicios ofrecidos. Piancatelli
              Propiedades se reserva el derecho de corregir estos errores sin
              previo aviso.
              <h3
                style={{
                  paddingTop: "15px",
                }}
              >
                <b>Opinión</b>
              </h3>
              Las opiniones expresadas en este sitio web son exclusivas de sus
              autores específicos, y no representan necesariamente la opinión,
              consejo o información de Piancatelli Propiedades. Enlaces a otros
              sitios web De existir en el sitio web
              <b> www.piancatelli-propiedades.com.ar</b> enlaces hacia otros
              sitios web o empresas. El usuario acepta que Piancatelli
              Propiedades no acepta ninguna responsabilidad sobre el uso de
              otros sitios web, y que el mismo no recomienda particularmente
              ningún servicio o producto de terceros. Otras Empresas Piancatelli
              Propiedades no asume ninguna responsabilidad por los productos y
              servicios de terceros ofrecidos a través de su sitio web, ni por
              las acciones de ninguna persona, física o jurídica, especificadas
              en su sitio web.
              <h3
                style={{
                  paddingTop: "15px",
                }}
              >
                <b>Legislación </b>
              </h3>
              El uso del sitio
              <b> www.piancatelli-propiedades.com.ar</b> y sus términos y
              condiciones se rigen por la ley argentina. Contraer
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
