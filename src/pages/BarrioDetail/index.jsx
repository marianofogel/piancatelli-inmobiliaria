import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { useParams } from "react-router";
import { barrios } from "../../utils";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineRoute } from "react-icons/md";
import { ItemDestacadas } from "../Home/NuevosIngresos/ItemDestacadas"
import "./barrioDetail.css"
import { useNavigate } from "react-router-dom";
import useFilterStore from "../../../src/store/index";
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
          limit: 4,
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


  const { setFilters } = useFilterStore();
  const navigate = useNavigate();

  const handleCardClick = () => {


    setFilters({ localizationId: +barrio.location_id });
    // Lo que le pasemos en localidad va a ser el filtro que va a aparecer despues del navigate
    navigate("/propiedades");
  };

  return (
    <Container>
      <h1 className="barrio-titulo p-5 mt-5">{barrio.nombre}</h1>
      <div className="infra-barrio shadow h-100 mb-3 pt-3">
        <p>
          <IoLocationSharp /> <strong>Ubicación:</strong> {barrio.ubicacion}
        </p>
      </div>
      <div className="infra-barrio shadow h-100 mb-3 pt-3">
        <p>
          <MdOutlineRoute /> <strong>Acceso:</strong> {barrio.acceso}
        </p>
      </div>
      <div className="infra-barrio shadow h-100 mb-3 pt-3">
        <h2>Características Generales</h2>
        <p>{barrio.caracteristicas_generales}</p>
      </div>
      <div className="d-flex mb-3">
        <div className="infra-barrio shadow h-100 card-foto pt-3">
          <Row>
            <Col>
              <h2>Infraestructura Deportiva y de Esparcimiento</h2>
              <ul>
                {barrio.infraestructura_deportiva.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </Col>

            <Col>
              <div>
                <Image
                  className="img-barrio"
                  src={process.env.PUBLIC_URL + "/img/barrios/" + barrio.location_id + ".webp"}
                  alt="Company Logo"

                />
              </div>
            </Col>
          </Row>
        </div>

      </div>
      <div className="infra-barrio shadow h-100 mb-3 pt-3">
        <h2>Infraestructura de Servicios</h2>
        <ul>
          {barrio.infraestructura_servicios.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="infra-barrio shadow h-100 mb-3 pt-3">
        <h2>Lotes</h2>
        <p>{barrio.lotes}</p>
      </div>


      <h2>Propiedades</h2>
      <Row>
        {data && data.length ? (
          data.map((nuevoIngreso, index) => (
            <Col key={index} xs={12} md={4} lg={3} className="mb-3">
              <Link
                to={`/propiedades/${nuevoIngreso.id}`}
                style={{ textDecoration: "none" }}
              >
                <ItemDestacadas property={nuevoIngreso} className="item-card" />
              </Link>
            </Col>

          ))


        ) : (
          < h5 > No hay propiedades disponibles</h5>
        )}
      </Row>


      {
        data && data.length && <Button className="mt-2 mb-3 boton-barrio" onClick={() => handleCardClick()}
        >Ver mas propiedades </Button>
        || ""
      }

    </Container >
  );
};

export default BarrioInfo;
