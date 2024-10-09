import React from "react";
import { Form } from "react-bootstrap";
import { WithContext as ReactTags } from "react-tag-input";
import "./styles.css";

const AdminForm = ({ formData, handleChange }) => {
  return (
    <Form>
      <div className="row">
        <div className="col-md-6">
          <Form.Group controlId="formPropertyType" className="mb-3">
            <Form.Label>Tipo de Propiedad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el tipo de propiedad"
              name="propertyType"
              value={formData.propertyType}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group controlId="formOperationType" className="mb-3">
            <Form.Label>Tipo de Operación</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el tipo de operación"
              name="operationType"
              value={formData.operationType}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Form.Group controlId="formAddress" className="mb-3">
            <Form.Label>Dirección</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese la dirección"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group controlId="formPrice" className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese el precio"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Form.Group controlId="formSurface" className="mb-3">
            <Form.Label>Superficie</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese la superficie"
              name="surface"
              value={formData.surface}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group controlId="formBedrooms" className="mb-3">
            <Form.Label>Dormitorios</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese la cantidad de dormitorios"
              name="bedrooms"
              value={formData.bedrooms}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Form.Group controlId="formBathrooms" className="mb-3">
            <Form.Label>Baños</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese la cantidad de baños"
              name="bathrooms"
              value={formData.bathrooms}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
        <div className="col-md-6">
          <Form.Group controlId="formAge" className="mb-3">
            <Form.Label>Antigüedad</Form.Label>
            <Form.Control
              type="number"
              placeholder="Ingrese la antigüedad"
              name="age"
              value={formData.age}
              onChange={handleChange}
            />
          </Form.Group>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Form.Group controlId="formTags" className="mb-3">
            <Form.Label>Tags</Form.Label>
            <ReactTags
              tags={
                formData.tags.map((tag) => ({
                  id: tag.id.toString(),
                  text: tag.text,
                })) || []
              }
              handleDelete={(tag) => {
                const newTags = formData.tags.filter(
                  (t) => t.id !== parseInt(tag) + 1
                );
                handleChange({ target: { name: "tags", value: newTags } });
              }}
              handleAddition={(tag) => {
                const newTags = [
                  ...formData.tags,
                  { id: formData.tags.length + 1, text: tag.text },
                ];
                handleChange({ target: { name: "tags", value: newTags } });
              }}
              handleDrag={(tag, currPos, newPos) => {
                const newTags = formData.tags.slice();
                newTags.splice(currPos, 1);
                newTags.splice(newPos, 0, tag);
                const updatedTags = newTags.map((tag, index) => ({
                  ...tag,
                  id: index + 1,
                }));
                handleChange({ target: { name: "tags", value: updatedTags } });
              }}
              placeholder="Agregue un tag"
            />
          </Form.Group>
        </div>
      </div>
    </Form>
  );
};

export default AdminForm;
