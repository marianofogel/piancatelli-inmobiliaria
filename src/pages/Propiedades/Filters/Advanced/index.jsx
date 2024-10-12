import React, { useState } from "react";
import { Form, Button, FloatingLabel, Container } from "react-bootstrap";
import { formatPrice } from "../../../../utils/formatPrice";

const AdvancedFilters = ({ onFilterChange }) => {
  const [direccion, setDireccion] = useState("");
  const [tipo, setTipo] = useState("");
  const [precio, setPrecio] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ address: direccion, type: tipo, price: precio });
  };

  return (
    <Container>
      <Form>
        <FloatingLabel
          controlId="formDireccion"
          label="Dirección"
          className="mb-3"
        >
          <Form.Control
            type="text"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel controlId="formTipo" label="Tipo" className="mb-3">
          <Form.Select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="">Seleccione un tipo</option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="pozo">Pozo</option>
          </Form.Select>
        </FloatingLabel>

        <FloatingLabel controlId="formPrecio" label="Precio" className="pb-4">
          <Form.Control
            type="text"
            value={formatPrice(precio)}
            onChange={(e) => setPrecio(e.target.value.replace(/\D/g, ""))}
          />
          <Form.Range
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </FloatingLabel>

        <Button variant="primary" onClick={handleFilterChange}>
          Buscar
        </Button>
      </Form>
    </Container>
  );
};

export default AdvancedFilters;
