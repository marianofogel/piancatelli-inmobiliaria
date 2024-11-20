import { useState, useEffect, useCallback } from "react";

const useFetchData = (
  endpoint,
  { limit = 25, offset = 0, filters = {}, sortKey = {} } = {}
) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const filterObject = buildFilters();
      const queryParams = new URLSearchParams({
        format: "json",
        key: process.env.REACT_APP_TOKKO_API_KEY,
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
        `http://tokkobroker.com/api/v1/${endpoint}?${queryParams.toString()}`
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
  }, [endpoint, limit, offset]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error, refetch: fetchData };
};

export default useFetchData;
