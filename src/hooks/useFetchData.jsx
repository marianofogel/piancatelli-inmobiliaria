import { useState, useEffect } from "react";
import useFilterStore from "../store";

const useFetchData = (endpoint, limit = 25, offset = 0) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { filters, sortKey } = useFilterStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams({
          format: 'json',
          key: '3cbc5baf1ad3ebb4672111e2f3aa215c17f962eb',
          lang: 'es_ar',
          limit,
          offset,
          ...filters,
          order_by: sortKey.key,
          order: sortKey.order === 1 ? "ASC" : "DESC",
        });

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
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetchData;
