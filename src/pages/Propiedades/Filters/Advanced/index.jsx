import {
  Form,
  Container,
  Button,
  ButtonGroup,
  FloatingLabel,
  Dropdown,
} from "react-bootstrap";
import { formatPrice } from "../../../../utils/formatPrice";

const AdvancedFilters = ({ onFilterChange, filters }) => {
  return (
    <Container className="mt-2">
      {filters && (
        <div className="mb-3">
          {filters &&
            Object.keys(filters).length > 0 &&
            Object.values(filters).some((value) => value) && (
              <>
                <h5>Filtros aplicados:</h5>
                {Object.keys(filters).map((key) => {
                  if (filters[key] && key !== "ccy") {
                    return (
                      <Button
                        key={key}
                        variant="outline-primary"
                        className="me-2 mb-2"
                        onClick={() =>
                          onFilterChange({ ...filters, [key]: "" })
                        }
                      >
                        {key === "age" && `< ${filters[key]} años`}
                        {key === "rooms" &&
                          `${
                            filters[key] === 4 ? "+4" : filters[key]
                          } dormitorio${filters[key] !== 1 ? "s" : ""}`}
                        {key === "bathroom_amount" &&
                          `${filters[key]} baño${
                            filters[key] !== 1 ? "s" : ""
                          }`}
                        {key === "price_from" &&
                          `Min: ${formatPrice(filters[key])}`}
                        {key === "price_to" &&
                          `Max: ${formatPrice(filters[key])}`}
                        {[
                          "age",
                          "rooms",
                          "bathroom_amount",
                          "price_from",
                          "price_to",
                        ].includes(key)
                          ? ""
                          : filters[key]}{" "}
                        &times;
                      </Button>
                    );
                  }
                  return null;
                })}
                <div
                  style={{ cursor: "pointer", color: "red" }}
                  className="me-2 mb-2"
                  onClick={() => onFilterChange({})}
                >
                  Limpiar filtros
                </div>
              </>
            )}
        </div>
      )}
      <Form>
        <Form.Group
          controlId="formLocalidad"
          className="border rounded p-2 mb-3"
        >
          <Form.Label style={{ color: "red" }}>Localidad</Form.Label>
          <Form.Select
            value={filters?.localidad}
            onChange={(e) =>
              onFilterChange({ ...filters, localidad: e.target.value })
            }
          >
            <option value="">Seleccione una localidad</option>
            <option value="localidad1">Localidad 1</option>
            <option value="localidad2">Localidad 2</option>
            <option value="localidad3">Localidad 3</option>
            <option value="localidad4">Localidad 4</option>
          </Form.Select>
        </Form.Group>
        <Form.Group controlId="formTipo" className="border rounded p-2 mb-3">
          <Form.Label style={{ color: "red" }}>Tipo de propiedad</Form.Label>
          <Form.Select
            value={filters?.type}
            onChange={(e) =>
              onFilterChange({ ...filters, type: e.target.value })
            }
          >
            <option value="">Seleccione un tipo</option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="pozo">Terreno o lote</option>
          </Form.Select>
        </Form.Group>
        <Form.Group
          controlId="formOperacion"
          className="border rounded p-2 mb-3"
        >
          <Form.Label style={{ color: "red" }}>Tipo de operación</Form.Label>
          <Form.Select
            value={filters?.operation}
            onChange={(e) =>
              onFilterChange({ ...filters, operation: e.target.value })
            }
          >
            <option value="">Seleccione un tipo de operación</option>
            <option value="venta">Venta</option>
            <option value="alquiler">Alquiler</option>
            <option value="alquiler temporal">Alquiler Temporal</option>
          </Form.Select>
        </Form.Group>
        <div className="border rounded p-2 mb-3">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "0.5em",
            }}
          >
            <Form.Label className="d-block" style={{ color: "red" }}>
              Precio
            </Form.Label>
            <Form.Select
              size="sm"
              value={filters?.currency}
              onChange={(e) =>
                onFilterChange({ ...filters, currency: e.target.value })
              }
              className="w-50"
            >
              <option value="">Moneda</option>
              <option value="ARS">ARS</option>
              <option value="USD">USD</option>
            </Form.Select>
          </div>
          <div className="d-flex justify-content-between">
            <FloatingLabel
              controlId="formMinPrecio"
              label="Mínimo"
              className="me-2"
            >
              <Form.Control
                type="text"
                value={formatPrice(filters?.price_from)}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    price_from: e.target.value.replace(/\D/g, ""),
                  })
                }
                disabled={!filters?.currency}
              />
            </FloatingLabel>
            <FloatingLabel controlId="formMaxPrecio" label="Máximo">
              <Form.Control
                type="text"
                value={formatPrice(filters?.price_to)}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    price_to: e.target.value.replace(/\D/g, ""),
                  })
                }
                disabled={!filters?.currency}
              />
            </FloatingLabel>
          </div>
        </div>
        <Form.Group
          controlId="formAntiguedad"
          className="border rounded p-2 mb-3"
        >
          <Form.Label style={{ color: "red" }}>Antiguedad</Form.Label>
          <Form.Select
            value={filters?.age}
            onChange={(e) =>
              onFilterChange({ ...filters, age: e.target.value })
            }
          >
            <option value="">Seleccione la antiguedad</option>
            <option value="1">Menos de 1 año</option>
            <option value="5">Menos de 5 años</option>
            <option value="10">Menos de 10 años</option>
            <option value="20">Menos de 20 años</option>
            <option value="30">Menos de 30 años</option>
            <option value="50">Más de 50 años</option>
          </Form.Select>
        </Form.Group>
        <div className="border rounded p-2 mb-3">
          <h6 style={{ color: "red" }}>Dormitorios</h6>
          <ButtonGroup className="mb-2">
            {[1, 2, 3, 4].map((num) => (
              <Button
                key={num}
                variant={
                  filters?.rooms === num ? "secondary" : "outline-secondary"
                }
                onClick={() => onFilterChange({ ...filters, rooms: num })}
              >
                {num === 4 ? "+4" : num}
              </Button>
            ))}
          </ButtonGroup>
        </div>
        <div className="border rounded p-2 mb-3">
          <h6 style={{ color: "red" }}>Baños</h6>
          <ButtonGroup className="mb-2">
            {[1, 2, 3].map((num) => (
              <Button
                key={num}
                variant={
                  filters?.bathroom_amount === num ? "secondary" : "outline-secondary"
                }
                onClick={() => onFilterChange({ ...filters, bathroom_amount: num })}
              >
                {num}
              </Button>
            ))}
          </ButtonGroup>
        </div>
      </Form>
    </Container>
  );
};

export default AdvancedFilters;
