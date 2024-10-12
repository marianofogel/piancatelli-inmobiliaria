import { Form, FloatingLabel, Container, Button } from "react-bootstrap";
import { formatPrice } from "../../../../utils/formatPrice";

const AdvancedFilters = ({ onFilterChange, filters }) => {
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
            value={filters?.address}
            onChange={(e) =>
              onFilterChange({ ...filters, address: e.target.value })
            }
          />
        </FloatingLabel>

        <FloatingLabel controlId="formTipo" label="Tipo" className="mb-3">
          <Form.Select
            value={filters?.type}
            onChange={(e) =>
              onFilterChange({ ...filters, type: e.target.value })
            }
          >
            <option value="">Seleccione un tipo</option>
            <option value="casa">Casa</option>
            <option value="departamento">Departamento</option>
            <option value="pozo">Pozo</option>
          </Form.Select>
        </FloatingLabel>
        <div className="border rounded p-2">
          <Form.Label className="d-block ">Precio</Form.Label>
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
        <div className="d-flex justify-content-end mt-3">
          <Button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              onFilterChange({
                address: "",
                type: "",
                minPrice: "",
                maxPrice: "",
              })
            }
          >
            Resetear Filtros
          </Button>
        </div>
      </Form>
    </Container>
  );
};

export default AdvancedFilters;
