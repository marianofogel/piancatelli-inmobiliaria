import React, { useState } from "react";
import { Container, Card, Row, Col, Badge, Button } from "react-bootstrap";
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
import "./styles.css";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = properties.find((p) => p.id === parseInt(id));
  return (
    <Container>
      <Button onClick={() => navigate("/propiedades")}>Volver</Button>
      <h2>{property.title}</h2>
      <ImageGallery
        className="rounded"
        items={property.images.map((img) => ({
          original: img,
          thumbnail: img,
        }))}
        infinite
        showBullets
        showThumbnails
        showFullscreenButton={false}
        showPlayButton={false}
        thumbnailPosition="right"
        showIndex
      />
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
                {property.operation}
              </Badge>
              {property.reserved && <Badge bg="primary">Reservada</Badge>}
            </Col>
          </Row>

          <Card.Title
            className="mb-2"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          >
            {formatPrice(property.price)} USD
          </Card.Title>

          {property.operation === "alquiler" && (
            <Card.Text className="text-muted">Expensas: 90.000 ARS</Card.Text>
          )}

          <Row className="mb-3">
            <Col xs="auto">
              <FaRulerCombined className="me-2" />
              <strong>{property.surface}</strong> m² totales
            </Col>
            <Col xs="auto">
              <FaRulerCombined className="me-2" />
              <strong>{property.surface}</strong> m² cubiertos
            </Col>
            <Col xs="auto">
              <FaBuilding className="me-2" />
              <strong>{property.rooms}</strong> ambientes
            </Col>
            <Col xs="auto">
              <FaBath className="me-2" />
              <strong>{property.bathrooms}</strong> baño
            </Col>
            <Col xs="auto">
              <FaBed className="me-2" />
              <strong>{property.rooms}</strong> dormitorios
            </Col>
            <Col xs="auto">
              <FaCalendarAlt className="me-2" />
              <strong>{property.age}</strong> años antigüedad
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Detail;
