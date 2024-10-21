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
                  if (filters[key]) {
                    return (
                      <Button
                        key={key}
                        variant="outline-primary"
                        className="me-2 mb-2"
                        onClick={() =>
                          onFilterChange({ ...filters, [key]: "" })
                        }
                      >
                        {filters[key]} &times;
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
          controlId="formDireccion"
          className="border rounded p-2 mb-3"
        >
          <Form.Label style={{ color: "red" }}>Dirección</Form.Label>
          <Form.Control
            type="text"
            value={filters?.address}
            onChange={(e) =>
              onFilterChange({ ...filters, address: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="formTipo" className="border rounded p-2 mb-3">
          <Form.Label style={{ color: "red" }}>Tipo de propiedad</Form.Label>
          <Form.Select
            value={filters?.type}
            onChange={
              ((e) => onFilterChange({ ...filters, type: e.target.value }),
              console.log(filters))
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
              value={filters?.ccy}
              onChange={(e) =>
                onFilterChange({ ...filters, ccy: e.target.value })
              }
              className="w-50"
            >
              <option value="">Moneda</option>
              <option value="ars">ARS</option>
              <option value="usd">USD</option>
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
                value={formatPrice(filters?.minPrice)}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    minPrice: e.target.value.replace(/\D/g, ""),
                  })
                }
              />
            </FloatingLabel>
            <FloatingLabel controlId="formMaxPrecio" label="Máximo">
              <Form.Control
                type="text"
                value={formatPrice(filters?.maxPrice)}
                onChange={(e) =>
                  onFilterChange({
                    ...filters,
                    maxPrice: e.target.value.replace(/\D/g, ""),
                  })
                }
              />
            </FloatingLabel>
          </div>
        </div>
        <div className="border rounded p-2 mb-3">
          <h6 style={{ color: "red" }}>Dormitorios</h6>
          <ButtonGroup className="mb-2">
            {[0, 1, 2, 3, 4].map((num) => (
              <Button
                key={num}
                variant={filters?.rooms === num ? "warning" : "outline-warning"}
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
            {[0, 1, 2, 3].map((num) => (
              <Button
                key={num}
                variant={
                  filters?.bathrooms === num ? "warning" : "outline-warning"
                }
                onClick={() => onFilterChange({ ...filters, bathrooms: num })}
              >
                {num}
              </Button>
            ))}
          </ButtonGroup>
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
      </Form>
    </Container>
  );
};

export default AdvancedFilters;
