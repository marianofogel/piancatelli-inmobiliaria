import { Col, Container, Dropdown, Row } from "react-bootstrap";
import AdvancedFilters from "../Filters/Advanced";
import "./style.css";

const FilterLayout = ({ children, filters, handleSortChange, sortKey }) => {
  return (
    <div className="filter-layout mb-5">
      <aside className="filter-layout__aside">
        <AdvancedFilters />
      </aside>
      <header className="filter-layout__header">
        <Container fluid className="pt-2">
          <Row className="mb-2 d-flex justify-content-between flex-column flex-md-row p-0">
            <Col>
              <h3 style={{ color: "red" }}>
                Propiedades {filters.operation ? `en ${filters.operation}` : ""}
              </h3>
            </Col>
            <Col sm={12} xxl={2} lg={3} className="mt-2 mt-md-0">
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-danger"
                  id="dropdown-basic"
                  className="w-100"
                >
                  {sortKey.key === ""
                    ? "Ordenar por:"
                    : sortKey.key === "price" && sortKey.order === -1
                    ? "Mayor precio"
                    : "Menor precio"}
                </Dropdown.Toggle>
                <Dropdown.Menu className="w-100">
                  <Dropdown.Item
                    onClick={() =>
                      handleSortChange({ target: { value: "price:-1" } })
                    }
                  >
                    Mayor precio
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() =>
                      handleSortChange({ target: { value: "price:1" } })
                    }
                  >
                    Menor precio
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
        </Container>
      </header>
      <main className="filter-layout__main h-100">
        <Container fluid className="h-100">
          {children}
        </Container>
      </main>
    </div>
  );
};

export default FilterLayout;
