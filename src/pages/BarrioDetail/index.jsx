import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { ItemDestacadas } from "../Home/NuevosIngresos/ItemDestacadas";
import "./barrioDetail.css";
import { useNavigate } from "react-router-dom";
import useFilterStore from "../../../src/store/index";
import { FaCheck } from "react-icons/fa";
import { IoMdArrowRoundForward } from "react-icons/io";
import ReactGA from "react-ga4";
import MapComponent from "../../components/Map";

const BarrioInfo = ({ barrio, selectedTab }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: "/barrios",
      title: "Pagina de barrio",
    });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const queryParams = new URLSearchParams({
          format: "json",
          key: process.env.REACT_APP_TOKKO_API_KEY,
          lang: "es_ar",
          limit: 3,
          data: JSON.stringify({
            operation_types: [1, 2, 3],
            property_types: [1, 2, 3, 4, 5, 6, 7],
            price_from: 0,
            price_to: 99999999,
            current_localization_id: [+barrio.location_id],
            current_localization_type: "division",
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

  const { setFilters } = useFilterStore();
  const navigate = useNavigate();

  const handleCardClick = () => {
    setFilters({ localizationId: +barrio.location_id });
    // Lo que le pasemos en localidad va a ser el filtro que va a aparecer despues del navigate
    navigate("/propiedades");
  };

  return (
    <Container>
      <h1 className="barrio-titulo">{barrio.nombre}</h1>
      <p>
        {" "}
        {barrio.ubicacion} - {barrio.acceso ? barrio.acceso : ""}
      </p>
      <MapComponent
        address={{ lat: +barrio.geo_lat, lng: +barrio.geo_long }}
        selectedTab={selectedTab}
      />
      <div className="m-3"> </div>
      {barrio.caracteristicas_generales ? (
        <div className=" h-100 mb-3">
          <h2>Características Generales</h2>
          <p>{barrio.caracteristicas_generales}</p>
        </div>
      ) : (
        ""
      )}
      {barrio.infraestructura_deportiva &&
      barrio.infraestructura_deportiva.length ? (
        <div className="d-flex mb-3">
          <div className=" h-100 card-foto">
            <Row>
              <h2>Infraestructura Deportiva y de Esparcimiento</h2>
              <Col
                className="d-flex"
                style={{
                  flexDirection: "column",
                  justifyContent: "space-evenly",
                }}
              >
                {barrio.infraestructura_deportiva.map((item, index) => (
                  <div key={index}>
                    <FaCheck color="green" /> &nbsp;
                    {item}
                  </div>
                ))}
              </Col>

              <Col>
                <div style={{ textAlign: "center" }}>
                  <Image
                    className="img-barrio"
                    src={
                      process.env.PUBLIC_URL +
                      "/img/barrios/" +
                      barrio.location_id +
                      ".webp"
                    }
                    alt="Company Logo"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className=" h-100 mb-3">
        <h2>Infraestructura de Servicios</h2>
        {barrio.infraestructura_servicios &&
        barrio.infraestructura_servicios.length
          ? barrio.infraestructura_servicios.map((item, index) => (
              <div key={index}>
                <IoMdArrowRoundForward /> &nbsp;
                {item}
              </div>
            ))
          : ""}
      </div>

      {barrio.lotes ? (
        <div className=" h-100 mb-3">
          <h2>Lotes</h2>
          <p>{barrio.lotes}</p>
        </div>
      ) : (
        ""
      )}

      <h2>Propiedades</h2>
      <Row>
        {data && data.length ? (
          data.map((nuevoIngreso, index) => (
            <Col key={index} xs={12} md={6} lg={4} className="mb-3">
              <Link
                to={`/propiedades/${nuevoIngreso.id}`}
                style={{ textDecoration: "none" }}
              >
                <ItemDestacadas property={nuevoIngreso} className="item-card" />
              </Link>
            </Col>
          ))
        ) : (
          <h6> No hay propiedades disponibles</h6>
        )}
      </Row>

      {data && data.length ? (
        <Button
          variant="danger"
          className="mt-2 mb-3 boton-barrio"
          onClick={() => handleCardClick()}
        >
          Ver más propiedades{" "}
        </Button>
      ) : (
        ""
      )}
    </Container>
  );
};

export default BarrioInfo;
