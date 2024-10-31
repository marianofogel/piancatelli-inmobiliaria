import React, { useEffect, useState } from "react";
import { Item } from "../../components/Item";
import Masonry from "react-layout-masonry";
import FilterLayout from "./Filters";
import { CgSearchFound } from "react-icons/cg";
import { Container, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import useFilterStore from "../../store";

const PropertiesLayout = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { filters, setFilters, sortKey, setSortKey } = useFilterStore();

  const limit = 25;
  const offset = 0;

  if (filters.bathroom_amount) {
    if (filters.bathroom_amount === 3) {
      filters.customFilters = [["bathroom_amount", ">", 2]];
    } else {
      filters.customFilters = [
        ["bathroom_amount", "=", filters.bathroom_amount],
      ];
    }
  }

  if (filters.rooms) {
    if (filters.rooms === 4) {
      filters.customFilters = [["room_amount", ">", 3]];
    } else {
      filters.customFilters = [["room_amount", "=", filters.rooms]];
    }
  }

  const buildFilters = () => {
    const filterObject = {
      current_localization_id: filters.localizationId || 1,
      current_localization_type: filters.localizationType || "country",
      price_from: filters.priceFrom || 0,
      price_to: filters.priceTo || 4500000,
      operation_types: (filters.operationTypes && [filters.operationTypes]) || [
        1, 2, 3,
      ],
      property_types: (filters.propertyTypes && [filters.propertyTypes]) || [
        1, 2, 3, 4, 5, 6, 7,
      ],
      currency: filters.currency || "USD",
      filters: filters.customFilters || [],
      with_tags: filters.withTags || [],
      without_tags: filters.withoutTags || [],
    };

    return filterObject;
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const filterObject = buildFilters();
        const queryParams = new URLSearchParams({
          format: "json",
          key: "3cbc5baf1ad3ebb4672111e2f3aa215c17f962eb",
          lang: "es_ar",
          limit,
          offset,
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
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [filters, sortKey]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSortChange = (e) => {
    const [key, order] = e.target.value.split(":");
    setSortKey({ key, order: parseInt(order, 10) });
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
          <Spinner></Spinner>
        ) : data?.objects.length > 0 ? (
          <Masonry
            columns={{ 100: 1, 520: 2, 992: 3, 1200: 4, 1500: 5 }}
            gap={16}
          >
            {data?.objects.map((property) => (
              <Link
                to={`${property.id}`}
                style={{ textDecoration: "none" }}
                key={`${property.id}`}
              >
                <Item property={property} />
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
    </div>
  );
};

export default PropertiesLayout;
