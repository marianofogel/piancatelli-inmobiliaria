import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { TuLugarCard } from "./TuLugarCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { barrios } from "../../../utils";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFilterStore from "../../../store";


const SliderTuLugar = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const barrio = barrios.find((item) => item.location_id === +id);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const queryParams = new URLSearchParams({
          format: "json",
          key: process.env.REACT_APP_TOKKO_API_KEY,
          lang: "es_ar",
          limit: 4,
          data: JSON.stringify({
            operation_types: [1, 2, 3],
            property_types: [1, 2, 3, 4, 5, 6, 7],
            price_from: 0,
            price_to: 99999999,
            current_localization_id: [+id],
            current_localization_type: "division",
          }),
        });

        const response = await fetch(
          `http://tokkobroker.com/api/v1/property/search?${queryParams.toString()}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.objects);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const { setFilters } = useFilterStore();
  const navigate = useNavigate();

  const handleButtonClick = (barrioId) => {
    setFilters({ localizationId: barrioId });
    // Lo que le pasemos en localidad va a ser el filtro que va a aparecer despues del navigate
    navigate("/propiedades");
  };

  const handleCardClick = (barrioId) => {
    navigate(`/barrios/${barrioId}`); // Redirige a la página individual del barrio
  };


  return (
    <div className="swiper-contenedor-tulugar container-fluid">
      <Swiper
        overflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={12}
        draggable={false}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        loop={true}
        modules={[Pagination, Autoplay, Navigation]}
        className="swiper-tulugar"
        breakpoints={{
          1000: {
            slidesPerView: 3,
            spaceBetween: 22,
          },
        }}
      >
        {barrios.map((barrio, index) => (
          <SwiperSlide key={index} className="swiper-slide-tulugar">
            
              <TuLugarCard
                imageSrc={process.env.PUBLIC_URL + "/img/barrios/" + barrio.location_id + ".webp"}
                barrio={barrio.location_name}
                data={data} // Pasamos los datos a la card
                onClick={() => handleCardClick(barrio.location_id)}
                onButtonClick={() => handleButtonClick(barrio.location_id)} // Pasamos la función
              />
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { SliderTuLugar };
