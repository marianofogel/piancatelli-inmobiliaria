import { FaBed, FaBath, FaCar, FaRulerCombined } from "react-icons/fa";
import { Card, Col, Row, Badge } from "react-bootstrap";
import { formatPrice } from "../../utils";

const Item = ({ property }) => {
  return (
    <Col
      xs={6}
      md={4}
      lg={3}
      xl={3}
      className="card-container rounded w-100 h-100"
      style={{ cursor: "pointer" }}
    >
      <Card className="shadow p-0 h-100" style={{ borderRadius: "100" }}>
        <div style={{ position: "relative" }}>
          <Card.Img variant="top" src={property.photos[0]?.image || process.env.PUBLIC_URL + '/img/edificio-buscador.jpeg' } alt="..." />
          <Badge
            bg="danger"
            style={{
              position: "absolute",
              top: window.innerWidth > 230 ? "10px" : "40px",
              right: window.innerWidth > 230 ? "10px" : "",
              left: window.innerWidth <= 230 ? "10px" : "",
              padding: "5px 10px",
              fontSize: "0.75rem",
              textTransform: "capitalize",
            }}
          >
            {property.operations[0].operation_type}
          </Badge>
          <Badge
            bg="warning"
            style={{
              position: "absolute",
              backgroundColor: "#c59f37",
              top: "10px",
              left: "10px",
              padding: "5px 10px",
              fontSize: "0.75rem",
              textTransform: "capitalize",
            }}
          >
            {property.type.name}
          </Badge>
        </div>
        <Card.Body className="pb-0">
          <Card.Title>
            <div
              style={{
                color: "#c59f37",
                fontWeight: "bold",
                fontSize: "1.25rem",
              }}
            >
              {formatPrice(property.operations[0].prices[0])}
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
                  <FaBed color="#c59f37" /> {property.room_amount}
                </div>
                <div>
                  <FaBath color="#c59f37" /> {property.bathroom_amount}
                </div>
                <div>
                  <FaCar color="#c59f37" /> {property.parking_lot_amount}
                </div>
                <div>
                  <FaRulerCombined color="#c59f37" /> {property.surface} m²
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
