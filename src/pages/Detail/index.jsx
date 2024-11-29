import { useRef, useState, useEffect } from "react";
import { FormContacto } from "../../components/FormContacto";
import {
  Container,
  Card,
  Row,
  Col,
  Badge,
  Button,
  Spinner,
} from "react-bootstrap";
import {
  FaRulerCombined,
  FaBuilding,
  FaBath,
  FaBed,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { useParams, useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { formatPrice } from "../../utils";
import MapComponent from "../../components/Map";
import "./styles.css";

const Detail = () => {
  const imageGalleryRef = useRef();
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams({
          format: "json",
          key: process.env.REACT_APP_TOKKO_API_KEY,
          lang: "es_ar",
          limit: 1,
          offset: 0,
        });

        const response = await fetch(
          `http://tokkobroker.com/api/v1/property/${id}?${queryParams.toString()}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (!data) {
    return null;
  }

  if (!data.photos || !data.photos.length) {
    data.photos = [
      {
        image: process.env.PUBLIC_URL + "/img/edificio-buscador.jpeg",
        thumb: process.env.PUBLIC_URL + "/img/edificio-buscador.jpeg",
      },
    ];
  }

  const onClickHandler = () => {
    imageGalleryRef.current.fullScreen();
  };

  return (
    <Container style={{ marginTop: "5em" }}>
      <Button
        variant="danger"
        onClick={() => navigate("/propiedades")}
        className="mb-2 mt-2"
      >
        <MdOutlineArrowBackIosNew />
        &nbsp;Volver
      </Button>
      <h2>{data.publication_title}</h2>
      <ImageGallery
        className="rounded"
        items={data.photos.map((img) => ({
          original: img.image,
          thumbnail: img.thumb,
        }))}
        fullScreen
        infinite
        showThumbnails
        showFullscreenButton={false}
        showPlayButton={false}
        thumbnailPosition="right"
        showIndex
        ref={imageGalleryRef}
        onClick={onClickHandler}
      />
      <Row>
        <Col md={8}>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <Row className="mb-2">
                <Col>
                  {data.operations.map((operation, index) => (
                    <div key={index}>
                      <Badge
                        bg="light"
                        text="dark"
                        className="me-2"
                        style={{ textTransform: "capitalize" }}
                      >
                        {operation.operation_type}
                      </Badge>
                      <Card.Title
                        className="mt-2 mb-2"
                        style={{ fontSize: "24px", fontWeight: "bold" }}
                      >
                        {formatPrice(operation.prices[0])}{" "}
                        {operation.prices[0].currency}
                      </Card.Title>

                      {operation.operation_type === "Alquiler" && (
                        <Card.Text className="text-muted">
                          Expensas: ${" "}
                          {formatPrice(data.expenses.toString())}
                        </Card.Text>
                      )}
                    </div>
                  ))}
                  {data.reserved && <Badge bg="danger">Reservada</Badge>}
                </Col>
              </Row>
              <Row className="mb-3" style={{ fontWeight: 500, lineHeight: 2 }}>
                <Col xs="auto">
                  <FaRulerCombined className="me-2" />
                  <strong>
                    {data.type.id === 1
                      ? data.surface
                      : data.total_surface}
                  </strong>{" "}
                  m² totales
                </Col>
                <Col xs="auto">
                  <FaRulerCombined className="me-2" />
                  <strong>{data.roofed_surface}</strong> m² cubiertos
                </Col>
                <Col xs="auto">
                  <FaBuilding className="me-2" />
                  <strong>{data.room_amount}</strong> ambientes
                </Col>
                <Col xs="auto">
                  <FaBath className="me-2" />
                  <strong>{data.bathroom_amount}</strong> baño
                </Col>
                <Col xs="auto">
                  <FaBed className="me-2" />
                  <strong>{data.suite_amount}</strong> dormitorios
                </Col>
                <Col xs="auto">
                  <FaCalendarAlt className="me-2" />
                  <strong>
                    {data.age === 0 ? "A estrenar" : data.age}
                  </strong>
                  {data.age === 0 ? "" : " años de antigüedad"}
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <Card.Title>Descripción</Card.Title>
              <Card.Text style={{ whiteSpace: "pre-wrap" }}>
                {data.description || "No tiene descripción"}
              </Card.Text>
            </Card.Body>
          </Card>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <Card.Title>Ubicación</Card.Title>
              <Card.Text>{data.address}</Card.Text>
              <MapComponent
                address={{ lat: +data.geo_lat, lng: +data.geo_long }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <FormContacto defaultValues={{ property: data.id }} />
            </Card.Body>
          </Card>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <Card.Title>Características</Card.Title>
              <Card.Body className="d-flex flex-wrap gap-1">
                {data.tags.map((tag, index) => (
                  <Badge key={index} bg="secondary">
                    {tag.name}
                  </Badge>
                ))}
              </Card.Body>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
