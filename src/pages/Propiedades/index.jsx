import React, { useState } from "react";
import { Item } from "../../components/Item";
import Masonry from "react-layout-masonry";
import FilterLayout from "./Filters";
import { CgSearchFound } from "react-icons/cg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFilterStore from "../../store";

export const properties = [
  {
    id: 1,
    title: "Property 1",
    address: "123 Main St",
    description: "Description for property 1",
    price: "$100000",
    images: [
      "https://via.placeholder.com/300x150",
      "https://via.placeholder.com/300x150",
      "https://via.placeholder.com/300x150",
      "https://via.placeholder.com/300x150",
    ],
    bedrooms: 3,
    bathrooms: 2,
    garage: 1,
    surface: "150",
    type: "casa",
  },
  {
    id: 2,
    title: "Property 2",
    address: "456 Elm St",
    description: "Description for property 2",
    price: "$200000",
    images: ["https://via.placeholder.com/300x150"],
    bedrooms: 4,
    bathrooms: 3,
    garage: 2,
    surface: "200",
    type: "departamento",
  },
  {
    id: 3,
    title: "Property 3",
    address: "789 Oak St",
    description: "Description for property 3",
    price: "$300000",
    images: ["https://via.placeholder.com/300"],
    bedrooms: 2,
    bathrooms: 1,
    garage: 1,
    surface: "120",
    type: "pozo",
  },
  {
    id: 4,
    title: "Property 4",
    address: "101 Pine St",
    description: "Description for property 4",
    price: "$400000",
    images: ["https://via.placeholder.com/150"],
    bedrooms: 5,
    bathrooms: 4,
    garage: 3,
    surface: "250",
    type: "casa",
  },
  {
    id: 5,
    title: "Property 5",
    address: "202 Maple St",
    description: "Description for property 5",
    price: "$500000",
    images: ["https://via.placeholder.com/100x150"],
    bedrooms: 6,
    bathrooms: 5,
    garage: 4,
    surface: "300",
    type: "departamento",
  },
  {
    id: 6,
    title: "Property 6",
    address: "303 Birch St",
    description: "Description for property 6",
    price: "$600000",
    images: ["https://via.placeholder.com/300x250"],
    bedrooms: 7,
    bathrooms: 6,
    garage: 5,
    surface: "350",
    type: "departamento",
  },
  {
    id: 7,
    title: "Property 7",
    address: "404 Cedar St",
    description: "Description for property 7",
    price: "$700000",
    images: ["https://via.placeholder.com/200x150"],
    bedrooms: 8,
    bathrooms: 7,
    garage: 6,
    surface: "400",
    type: "casa",
  },
  {
    id: 8,
    title: "Property 8",
    address: "505 Walnut St",
    description: "Description for property 8",
    price: "$800000",
    images: ["https://via.placeholder.com/250x200"],
    bedrooms: 9,
    bathrooms: 8,
    garage: 7,
    surface: "450",
    type: "casa",
  },
  {
    id: 9,
    title: "Property 9",
    address: "606 Chestnut St",
    description: "Description for property 9",
    price: "$900000",
    images: ["https://via.placeholder.com/350x150"],
    bedrooms: 10,
    bathrooms: 9,
    garage: 8,
    surface: "500",
    type: "departamento",
  },
  {
    id: 10,
    title: "Property 10",
    address: "707 Spruce St",
    description: "Description for property 10",
    price: "$1000000",
    images: ["https://via.placeholder.com/300x200"],
    bedrooms: 11,
    bathrooms: 10,
    garage: 9,
    surface: "550",
    type: "pozo",
  },
  {
    id: 11,
    title: "Property 11",
    address: "808 Fir St",
    description: "Description for property 11",
    price: "$1100000",
    images: ["https://via.placeholder.com/400x300"],
    bedrooms: 12,
    bathrooms: 11,
    garage: 10,
    surface: "600",
    type: "casa",
  },
  {
    id: 12,
    title: "Property 12",
    address: "909 Redwood St",
    description: "Description for property 12",
    price: "$1200000",
    images: ["https://via.placeholder.com/150x100"],
    bedrooms: 13,
    bathrooms: 12,
    garage: 11,
    surface: "650",
    type: "departamento",
  },
];

const PropertiesLayout = () => {
  const { filters, setFilters } = useFilterStore();

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const filteredProperties = properties.filter((property) => {
    return Object.keys(filters).every((key) => {
      if (!filters[key]) return true;
      if (key === "bedrooms" && filters[key] === 4) {
        return property[key] > 4;
      }
      if (key === "minPrice") {
        const propertyPrice = parseFloat(
          property["price"].replace(/[^0-9.-]+/g, "")
        );
        const minPrice = parseFloat(filters[key].replace(/[^0-9.-]+/g, ""));
        return propertyPrice >= minPrice;
      }
      if (key === "maxPrice") {
        const propertyPrice = parseFloat(
          property["price"].replace(/[^0-9.-]+/g, "")
        );
        const maxPrice = parseFloat(filters[key].replace(/[^0-9.-]+/g, ""));
        return propertyPrice <= maxPrice;
      }
      return property[key] === filters[key];
    });
  });

  return (
    <FilterLayout onFilterChange={handleFilterChange} filters={filters}>
      {filteredProperties.length > 0 ? (
        <Masonry
          columns={{ 100: 1, 520: 2, 992: 3, 1200: 4, 1500: 5 }}
          gap={16}
        >
          {filteredProperties.map((property) => (
            <Link to={`${property.id}`} style={{ textDecoration: "none" }}>
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
