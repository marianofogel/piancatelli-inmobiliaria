import React, { useState } from "react";
import { Badge, Container, Stack } from "react-bootstrap";

const FilterChips = ({ onFilterChange, filters }) => {
  const [selected, setSelected] = useState(filters.rooms || 0);

  const handleSelect = (index) => {
    setSelected(index);
    const rooms = index === 0 ? 0 : index;
    onFilterChange({ ...filters, rooms });
  };

  const badges = [
    "Todos los ambientes",
    "1 ambiente",
    "2 ambientes",
    "3 ambientes",
    "Más de 3 ambientes",
  ];

  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      {badges.map((badge, index) => (
        <Badge
          key={index}
          bg="white"
          text="dark"
          className={`p-2 border ${
            selected === index ? "border-3 border-dark" : ""
          }`}
          onClick={() => handleSelect(index)}
          style={{ cursor: "pointer", fontSize: "0.9rem" }}
        >
          {badge}
        </Badge>
      ))}
    </Stack>
  );
};

export default FilterChips;
