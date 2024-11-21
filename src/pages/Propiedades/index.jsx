import React, { useEffect, useState } from "react";
import { Item } from "../../components/Item";
import Masonry from "react-layout-masonry";
import FilterLayout from "./Filters";
import { CgSearchFound } from "react-icons/cg";
import { Container, Spinner, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFilterStore from "../../store";

const PropertiesLayout = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { filters, setFilters, sortKey, setSortKey } = useFilterStore();

  const limit = 25;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        if (filters.bathroom_amount) {
          filters.customFilters = filters.customFilters || [];
          const bathroomFilter = filters.customFilters.find(
            (filter) => filter[0] === "bathroom_amount"
          );
          if (bathroomFilter) {
            filters.customFilters = filters.customFilters.filter(
              (filter) => filter[0] !== "bathroom_amount"
            );
          }
          if (filters.bathroom_amount === 3) {
            filters.customFilters.push(["bathroom_amount", ">", 2]);
          } else {
            filters.customFilters.push([
              "bathroom_amount",
              "=",
              filters.bathroom_amount,
            ]);
          }
        }

        if (filters.room_amount) {
          filters.customFilters = filters.customFilters || [];
          const roomFilter = filters.customFilters.find(
            (filter) => filter[0] === "room_amount"
          );
          if (roomFilter) {
            filters.customFilters = filters.customFilters.filter(
              (filter) => filter[0] !== "room_amount"
            );
          }
          if (filters.room_amount === 4) {
            filters.customFilters.push(["room_amount", ">", 3]);
          } else {
            filters.customFilters.push([
              "room_amount",
              "=",
              filters.room_amount,
            ]);
          }
        }

        const buildFilters = () => {
          const filterObject = {
            current_localization_id: filters.localizationId || 1,
            current_localization_type: filters.localizationType || "country",
            price_from: filters.priceFrom || 0,
            price_to: filters.priceTo || 4500000,
            operation_types: (filters.operationTypes && [
              filters.operationTypes,
            ]) || [1, 2, 3],
            property_types: (filters.propertyTypes && [
              filters.propertyTypes,
            ]) || [1, 2, 3, 4, 5, 6, 7],
            currency: filters.currency || "USD",
            filters: filters.customFilters || [],
            with_tags: filters.withTags || [],
            without_tags: filters.withoutTags || [],
          };

          return filterObject;
        };
        const filterObject = buildFilters();
        const queryParams = new URLSearchParams({
          format: "json",
          key: process.env.REACT_APP_TOKKO_API_KEY,
          lang: "es_ar",
          limit,
          offset: (page - 1) * limit,
        });

        if (Object.keys(filters).length > 0) {
          queryParams.append("data", JSON.stringify(filterObject));
        }

        if (Object.keys(sortKey).length > 0 && sortKey.key !== "") {
          queryParams.append("order", sortKey.order === 1 ? "ASC" : "DESC");
          queryParams.append("order_by", sortKey.key);
        }

        const response = await fetch(
          `http://tokkobroker.com/api/v1/property/search?${queryParams.toString()}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.objects);
        setTotalPages(Math.ceil(result.meta.total_count / limit));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [filters, sortKey, page]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  const handleSortChange = (e) => {
    const [key, order] = e.target.value.split(":");
    setSortKey({ key, order: parseInt(order, 10) });
    setPage(1);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };
  return (
    <div style={{ margin: "5em 2em 2em" }}>
      <FilterLayout
        onFilterChange={handleFilterChange}
        filters={filters}
        handleSortChange={handleSortChange}
        sortKey={sortKey}
      >
        {loading ? (
          <Container
            className="d-flex justify-content-center h-100"
            style={{ alignItems: "center" }}
          >
            <Spinner variant="danger"></Spinner>
          </Container>
        ) : data?.length > 0 ? (
          <>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <span>{`Mostrando ${data.length} ${
                data.length === 1 ? "propiedad" : "propiedades"
              }`}</span>
              <span>{`Página ${page} de ${totalPages}`}</span>
            </div>
            <Masonry
              columns={{ 100: 1, 520: 2, 992: 3, 1200: 4, 1500: 5 }}
              gap={16}
            >
              {data?.map((property) => (
                <Link
                  to={`${property.id}`}
                  style={{ textDecoration: "none" }}
                  key={`${property.id}`}
                >
                  <Item property={property} />
                </Link>
              ))}
            </Masonry>
            <Pagination className="justify-content-center mt-4">
              <Pagination.Prev
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
              />
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === page}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
              <Pagination.Next
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
              />
            </Pagination>
          </>
        ) : (
          Object.keys(filters).length > 0 && (
            <Container className="text-center pt-5">
              <CgSearchFound size={50} />
              <p>No se encontraron propiedades con esos filtros.</p>
            </Container>
          )
        )}
      </FilterLayout>
    </div>
  );
};

export default PropertiesLayout;
