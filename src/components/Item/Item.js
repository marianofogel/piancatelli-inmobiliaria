import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";
import { Card, Col, Row, Badge } from "react-bootstrap";
import { formatPrice } from "../../utils/formatPrice";

const Item = ({ property, onClick }) => {
  return (
    <Col
      xs={6}
      md={4}
      lg={3}
      xl={3}
      className="card-container rounded w-100"
      style={{ cursor: "pointer" }}
      onClick={() => onClick(property)}
    >
      <Card className="shadow p-0" style={{ borderRadius: "100" }}>
        <div style={{ position: "relative" }}>
          <Card.Img variant="top" src={property.images[0]} alt="..." />
          <Badge
            bg="light"
            text="dark"
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              padding: "5px 10px",
              fontSize: "0.75rem",
              textTransform: "capitalize",
            }}
          >
            {property.type}
          </Badge>
        </div>
        <Card.Body className="pb-0">
          <Card.Title>
            <div
              style={{
                color: "green",
                fontWeight: "bold",
                fontSize: "1.25rem",
              }}
            >
              {formatPrice(property.price)}
            </div>
          </Card.Title>
          <Row>
            <Col xs={12}>
              <div style={{ fontWeight: "bold" }}>{property.title}</div>
              <div style={{ color: "gray" }}>{property.address}</div>
            </Col>
            <Col xs={12} className="mt-auto m-1 p-2">
              <div className="d-flex justify-content-around">
                <div>
                  <FaBed color="cornflowerblue" /> {property.bedrooms}
                </div>
                <div>
                  <FaBath color="cornflowerblue" /> {property.bathrooms}
                </div>
                <div>
                  <FaCar color="cornflowerblue" /> {property.garage}
                </div>
                <div>
                  <FaRulerCombined color="cornflowerblue" /> {property.surface}{" "}
                  m²
                </div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export { Item };
