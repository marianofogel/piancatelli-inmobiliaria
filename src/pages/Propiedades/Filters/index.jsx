import { Col, Container, Form, Row } from "react-bootstrap";
import AdvancedFilters from "../Filters/Advanced";
import FilterChips from "../Filters/Chips";
import "./style.css";

const FilterLayout = ({
  children,
  onFilterChange,
  filters,
  handleSortChange,
  sortKey,
}) => {
  return (
    <div className="filter-layout">
      <aside className="filter-layout__aside">
        <AdvancedFilters onFilterChange={onFilterChange} filters={filters} />
      </aside>
      <header className="filter-layout__header">
        <Container>
          <Row className="mb-2 d-flex justify-content-between flex-column flex-md-row p-0">
            <Col sm={12} md={9} lg={10}>
              <FilterChips onFilterChange={onFilterChange} filters={filters} />
            </Col>
            <Col sm={12} md={3} lg={2} className="mt-2 mt-md-0">
              <Form.Select
                aria-label="Ordenar por"
                onChange={handleSortChange}
                value={sortKey}
              >
                <option value="">Ordenar por</option>
                <option
                  value={`createdAt:${
                    sortKey?.key === "createdAt" && sortKey?.order === -1
                      ? "1"
                      : "-1"
                  }`}
                >
                  Recientes
                </option>
                <option
                  value={`price:${
                    sortKey?.key === "price" && sortKey?.order === -1
                      ? "1"
                      : "-1"
                  }`}
                >
                  Precio
                </option>
                <option
                  value={`rooms:${
                    sortKey?.key === "rooms" && sortKey?.order === -1
                      ? "1"
                      : "-1"
                  }`}
                >
                  Ambientes
                </option>
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
