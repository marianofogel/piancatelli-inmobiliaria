import { Col, Container, Form, Row } from "react-bootstrap";
import AdvancedFilters from "../Filters/Advanced";
import "./style.css";

const FilterLayout = ({
  children,
  filters,
  handleSortChange,
  sortKey,
}) => {
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
              <Form.Select
                aria-label="Ordenar por"
                onChange={handleSortChange}
                value={`${sortKey.key}:${sortKey.order}`}
                style={{ color: "#c59f37", borderColor: "#c59f37" }}
              >
                <option value="">Ordenar por</option>
                <option value={`price:-1`}>Mayor precio</option>
                <option value={`price:1`}>Menor precio</option>
              </Form.Select>
            </Col>
          </Row>
        </Container>
      </header>
      <main className="filter-layout__main">
        <Container fluid>{children}</Container>
      </main>
    </div>
  );
};

export default FilterLayout;
