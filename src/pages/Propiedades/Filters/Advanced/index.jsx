import {
  Form,
  Container,
  Button,
  ButtonGroup,
  FloatingLabel,
  Dropdown,
} from "react-bootstrap";
import { formatPrice } from "../../../../utils/formatPrice";
import { useState, useEffect } from "react";
import useFilterStore from "../../../../store";
const AdvancedFilters = () => {
  const { cleanFilters, filters, setFilters } = useFilterStore();
  const [dataTypes, setDataTypes] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams({
          format: "json",
          key: "3cbc5baf1ad3ebb4672111e2f3aa215c17f962eb",
          lang: "es_ar",
          limit: 25,
          offset: 0,
        });

        const response = await fetch(
          `http://tokkobroker.com/api/v1/property_type?${queryParams.toString()}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setDataTypes(result);
      } catch (err) {}
    };
    fetchData();
  }, []);
  return (
    <Container className="mt-2">
      {filters && (
        <div className="mb-3">
          {filters &&
            Object.keys(filters).length > 0 &&
            Object.values(filters).some(
              (value) => value && (!Array.isArray(value) || value.length > 0)
            ) && (
              <>
                <h5>Filtros aplicados:</h5>
                {Object.keys(filters).map((key) => {
                  if (
                    filters[key] &&
                    key !== "currency" &&
                    key !== "customFilters"
                  ) {
                    return (
                      <Button
                        key={key}
                        variant="outline-primary"
                        className="me-2 mb-2"
                        onClick={() => {
                          setFilters({
                            ...filters,
                            [key]: "",
                            customFilters:
                              key === "bathroom_amount" || key === "room_amount"
                                ? filters.customFilters.filter(
                                    (filter) => filter[0] !== key
                                  )
                                : filters.customFilters,
                          });
                        }}
                      >
                        {key === "operationTypes" &&
                          ["Venta", "Alquiler", "Alquiler Temporal"][
                            filters[key] - 1
                          ]}
                        {key === "propertyTypes" &&
                          dataTypes?.objects.find(
                            (type) => type.id === +filters[key]
                          )?.name}
                        {key === "age" && `< ${filters[key]} años`}
                        {key === "room_amount" &&
                          `${
                            filters[key] === 4 ? "+4" : filters[key]
                          } dormitorio${filters[key] !== 1 ? "s" : ""}`}
                        {key === "bathroom_amount" &&
                          `${filters[key]} baño${
                            filters[key] !== 1 ? "s" : ""
                          }`}
                        {key === "price_from" &&
                          `Min: ${
                            filters["currency"] === "ARS" ? "$" : "USD"
                          } ${formatPrice(filters[key])}`}
                        {key === "price_to" &&
                          `Max: ${
                            filters["currency"] === "ARS" ? "$" : "USD"
                          } ${formatPrice(filters[key])}`}
                        &nbsp; &times;
                      </Button>
                    );
                  }
                  return null;
                })}
                <div
                  style={{ cursor: "pointer", color: "red" }}
                  className="me-2 mb-2"
                  onClick={() => cleanFilters()}
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
              setFilters({ ...filters, localidad: e.target.value })
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
            value={filters?.propertyTypes}
            onChange={(e) =>
              setFilters({ ...filters, propertyTypes: e.target.value })
            }
          >
            <option value="">Seleccione un tipo</option>
            {dataTypes?.objects.map((type) => (
              <option key={type.id} value={type.id}>
                {type.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <Form.Group
          controlId="formOperacion"
          className="border rounded p-2 mb-3"
        >
          <Form.Label style={{ color: "red" }}>Tipo de operación</Form.Label>
          <Form.Select
            value={filters?.operationTypes}
            onChange={(e) =>
              setFilters({ ...filters, operationTypes: e.target.value })
            }
          >
            <option value="">Seleccione un tipo de operación</option>
            <option value="1">Venta</option>
            <option value="2">Alquiler</option>
            <option value="3">Alquiler Temporal</option>
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
                setFilters({ ...filters, currency: e.target.value })
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
                  setFilters({
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
                  setFilters({
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
            onChange={(e) => setFilters({ ...filters, age: e.target.value })}
          >
            <option value="">Seleccione la antiguedad</option>
            <option value="1">Menos de 1 año</option>
            <option value="5">Menos de 5 años</option>
            <option value="10">Menos de 10 años</option>
            <option value="20">Menos de 20 años</option>
            <option value="30">Menos de 30 años</option>
            <option value="50">Menos de 50 años</option>
          </Form.Select>
        </Form.Group>
        <div className="border rounded p-2 mb-3">
          <h6 style={{ color: "red" }}>Dormitorios</h6>
          <ButtonGroup className="mb-2">
            {[1, 2, 3, 4].map((num) => (
              <Button
                key={num}
                variant={
                  filters?.room_amount === num
                    ? "secondary"
                    : "outline-secondary"
                }
                onClick={() =>
                  setFilters({
                    ...filters,
                    room_amount: filters?.room_amount === num ? null : num,
                    customFilters:
                      filters?.room_amount === num
                        ? filters.customFilters.filter(
                            (filter) => filter[0] !== "room_amount"
                          )
                        : filters.customFilters,
                  })
                }
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
                  filters?.bathroom_amount === num
                    ? "secondary"
                    : "outline-secondary"
                }
                onClick={() =>
                  setFilters({
                    ...filters,
                    bathroom_amount:
                      filters?.bathroom_amount === num ? null : num,
                    customFilters:
                      filters?.bathroom_amount === num
                        ? filters.customFilters.filter(
                            (filter) => filter[0] !== "bathroom_amount"
                          )
                        : filters.customFilters,
                  })
                }
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
