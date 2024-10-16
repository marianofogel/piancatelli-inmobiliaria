import React from "react";
import { Item } from "../../components/Item";
import Masonry from "react-layout-masonry";
import FilterLayout from "./Filters";
import { CgSearchFound } from "react-icons/cg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFilterStore from "../../store";
import { properties } from "../../_data";
import { filterAndSort } from "../../utils";

const PropertiesLayout = () => {
  const { filters, setFilters, sortKey, setSortKey } = useFilterStore();

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (e) => {
    const [key, order] = e.target.value.split(":");
    setSortKey({ key, order: parseInt(order, 10) });
  };

  const filteredProperties = filterAndSort(properties, filters, sortKey);

  return (
    <FilterLayout
      onFilterChange={handleFilterChange}
      filters={filters}
      handleSortChange={handleSortChange}
      sortKey={sortKey}
    >
      {filteredProperties.length > 0 ? (
        <Masonry
          columns={{ 100: 1, 520: 2, 992: 3, 1200: 4, 1500: 5 }}
          gap={16}
        >
          {filteredProperties.map((property) => (
            <Link
              to={`${property.id}`}
              style={{ textDecoration: "none" }}
              key={`${property.id}`}
            >
              <Item key={property.id} property={property} />
            </Link>
          ))}
        </Masonry>
      ) : (
        Object.keys(filters).length > 0 && (
          <Container className="text-center pt-5">
            <CgSearchFound size={50} />
            <p>No se encontraron propiedades con esos filtros.</p>
          </Container>
        )
      )}
    </FilterLayout>
  );
};

export default PropertiesLayout;
