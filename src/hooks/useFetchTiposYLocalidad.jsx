import { useEffect } from "react";
import useFilterStore from "../store";

const useFetchTiposYLocalidad = () => {
  const { localidades, tipos, setTypes, setLocalidades } = useFilterStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const queryParams = new URLSearchParams({
          format: "json",
          key: process.env.REACT_APP_TOKKO_API_KEY,
          lang: "es_ar",
          limit: 25,
          offset: 0,
        });

        if (!tipos.length) {
          const response = await fetch(
            `http://tokkobroker.com/api/v1/property_type?${queryParams.toString()}`
          );
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const result = await response.json();
          setTypes(result.objects);
        }

        if (!localidades.length) {
          const apiLocalidad = await fetch(
            `http://tokkobroker.com/api/v1/property/by_location?${queryParams.toString()}&data={"current_localization_id":1,"price_from": 0,"price_to": 9999999999,"operation_types": [],"property_types": []}`
          );
          const localidadResponse = await apiLocalidad.json();
          setLocalidades(localidadResponse.objects);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [tipos, localidades, setTypes, setLocalidades]);
};

export default useFetchTiposYLocalidad;
