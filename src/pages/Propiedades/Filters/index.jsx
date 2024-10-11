import React, { useState } from "react";
import { Container } from "react-bootstrap";
import AdvancedFilters from "../Filters/Advanced";
import FilterChips from "../Filters/Chips";
import './style.css'

const FilterLayout = ({ children, onFilterChange }) => {
  return (
    <div className="filter-layout">
      <aside className="filter-layout__aside">
        <AdvancedFilters onFilterChange={onFilterChange} />
      </aside>
      <header className="filter-layout__header">
        <FilterChips onFilterChange={onFilterChange} />
      </header>
      <main className="filter-layout__main">
        <Container fluid>{children}</Container>
      </main>
    </div>
  );
};

export default FilterLayout;