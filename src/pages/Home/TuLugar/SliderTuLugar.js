import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { TuLugarCard } from "./TuLugarCard";
import useFilterStore from "../../../store";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import useFetchTiposYLocalidad from "../../../hooks/useFetchTiposYLocalidad";

const SliderTuLugar = () => {
  useFetchTiposYLocalidad();
  const { setFilters, localidades } = useFilterStore();
  const navigate = useNavigate();

  const handleCardClick = (localidad) => {
    const localizationId = localidad.location_id;

    setFilters({ localizationId });
    // Lo que le pasemos en localidad va a ser el filtro que va a aparecer despues del navigate
    navigate("/propiedades");
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
        slidesPerView={1}
        spaceBetween={12}
        draggable={false}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        loop={true}
        modules={[Pagination, EffectCoverflow, Navigation]}
        className="swiper-tulugar"
        breakpoints={{
          1000: {
            slidesPerView: 3,
            spaceBetween: 22,
          },
        }}
      >
        {localidades.map((localidad, index) => (
          <SwiperSlide key={index} className="swiper-slide-tulugar">
            <TuLugarCard
              imageSrc={process.env.PUBLIC_URL + "/img/Piancatelli.png"}
              localidad={localidad.location_name}
              value={localidad.location_id}
              onClick={() => handleCardClick(localidad)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { SliderTuLugar };
