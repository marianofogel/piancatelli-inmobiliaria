import React, { useState } from "react";
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
import { properties } from "../../_data";
import { useParams, useNavigate } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import { formatPrice } from "../../utils";
import GoogleMapComponent from "../../components/Map";
import useFetchData from "../../hooks/useFetchData";
import "./styles.css";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: property, loading } = useFetchData(`property/${id}`);

  if (loading) {
    <Spinner />;
  }

  if (!property) {
    return null;
  }

  return (
    <Container style={{ marginTop: "5em" }}>
      <Button onClick={() => navigate("/propiedades")}>Volver</Button>
      <h2>{property.publication_title}</h2>
      <ImageGallery
        className="rounded"
        items={property.photos.map((img) => ({
          original: img.image,
          thumbnail: img.thumb,
        }))}
        infinite
        showThumbnails
        showFullscreenButton={false}
        showPlayButton={false}
        thumbnailPosition="right"
        showIndex
      />
      <Row>
        <Col md={8}>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <Row className="mb-2">
                <Col>
                  <Badge
                    bg="light"
                    text="dark"
                    className="me-2"
                    style={{ textTransform: "capitalize" }}
                  >
                    {property.operations[0].operation_type}
                  </Badge>
                  {property.reserved && <Badge bg="primary">Reservada</Badge>}
                </Col>
              </Row>

              <Card.Title
                className="mb-2"
                style={{ fontSize: "24px", fontWeight: "bold" }}
              >
                {formatPrice(property.operations[0].prices[0].price.toString())}{" "}
                {property.operations[0].prices[0].currency}
              </Card.Title>

              {property.operation === "alquiler" && (
                <Card.Text className="text-muted">
                  Expensas: 90.000 ARS
                </Card.Text>
              )}

              <Row className="mb-3">
                <Col xs="auto">
                  <FaRulerCombined className="me-2" />
                  <strong>{property.surface}</strong> m² totales
                </Col>
                <Col xs="auto">
                  <FaRulerCombined className="me-2" />
                  <strong>{property.roofed_surface}</strong> m² cubiertos
                </Col>
                <Col xs="auto">
                  <FaBuilding className="me-2" />
                  <strong>{property.room_amount}</strong> ambientes
                </Col>
                <Col xs="auto">
                  <FaBath className="me-2" />
                  <strong>{property.bathroom_amount}</strong> baño
                </Col>
                <Col xs="auto">
                  <FaBed className="me-2" />
                  <strong>{property.suite_amount}</strong> dormitorios
                </Col>
                <Col xs="auto">
                  <FaCalendarAlt className="me-2" />
                  <strong>{property.age}</strong> años antigüedad
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <Card.Title>Ubicación</Card.Title>
              <Card.Text>{property.address}</Card.Text>
              <GoogleMapComponent
                address={{ lat: +property.geo_lat, lng: +property.geo_long }}
              />
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mt-3 shadow-sm">
            <Card.Body>
              <FormContacto defaultValues={{ property: property.id }} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Detail;
