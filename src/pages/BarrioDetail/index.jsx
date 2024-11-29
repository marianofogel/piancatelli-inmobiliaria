import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { barrios } from "../../utils";
import { Item } from "../../components/Item";

const BarrioInfo = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const barrio = barrios.find((item) => item.location_id === +id);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const queryParams = new URLSearchParams({
          format: "json",
          key: process.env.REACT_APP_TOKKO_API_KEY,
          lang: "es_ar",
          limit: 10,
          data: JSON.stringify({
            operation_types: [1, 2, 3],
            property_types: [1, 2, 3, 4, 5, 6, 7],
            price_from: 0,
            price_to: 99999999,
            current_localization_id: [+id],
            current_localization_type: "division"
          }),
        });

        const response = await fetch(
          `http://tokkobroker.com/api/v1/property/search?${queryParams.toString()}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.objects);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <h1>{barrio.nombre}</h1>
      <p>
        <strong>Ubicación:</strong> {barrio.ubicacion}
      </p>
      <p>
        <strong>Acceso:</strong> {barrio.acceso}
      </p>
      <h2>Características Generales</h2>
      <p>{barrio.caracteristicas_generales}</p>
      <h2>Infraestructura Deportiva y de Esparcimiento</h2>
      <ul>
        {barrio.infraestructura_deportiva.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Infraestructura de Servicios</h2>
      <ul>
        {barrio.infraestructura_servicios.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2>Lotes</h2>
      <p>{barrio.lotes}</p>
      <h2>Propiedades</h2>
      <Row>
        {data && data.length ? (
          data.map((nuevoIngreso, index) => (
            <Col key={index} xs={12} md={4} lg={3} className="mb-3">
              <Link
                to={`/propiedades/${nuevoIngreso.id}`}
                style={{ textDecoration: "none" }}
              >
                <Item property={nuevoIngreso} className="item-card" />
              </Link>
            </Col>
          ))
        ) : (
          <h2>No hay propiedades disponibles</h2>
        )}
      </Row>
    </Container>
  );
};

export default BarrioInfo;
