import { Modal, Image } from "react-bootstrap";
import "./styles.css";

import { Carousel } from "react-bootstrap";

const PropertyModal = ({ show, property, onHide }) => (
  <Modal show={show} onHide={onHide} centered className="modal-expand">
    <Modal.Header closeButton>
      <Modal.Title>{property.title}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Carousel>
        {property.images.map((image, index) => (
          <Carousel.Item key={index}>
            <Image
              variant="top"
              className="d-block w-100"
              src={image}
              alt={`Slide ${index + 1}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
      <p>
        <strong>Address:</strong> {property.address}
      </p>
      <p>
        <strong>Description:</strong> {property.description}
      </p>
      <p>
        <strong>Price:</strong> {property.price}
      </p>
    </Modal.Body>
  </Modal>
);

export default PropertyModal;
