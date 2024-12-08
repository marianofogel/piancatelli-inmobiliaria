import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { TuLugarCard } from "./TuLugarCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { barrios } from "../../../utils";
import useFilterStore from "../../../store";


const SliderTuLugar = () => {
  const { setFilters } = useFilterStore();
  const navigate = useNavigate();

  const handleButtonClick = (barrioId) => {
    console.log(barrioId)
    setFilters({ localizationId: barrioId });
    // Lo que le pasemos en localidad va a ser el filtro que va a aparecer despues del navigate
    navigate("/propiedades");
  };

  const handleCardClick = (barrioId) => {
    navigate(`/barrios/${barrioId}`); // Redirige a la página individual del barrio
  };


  return (
    <div className="swiper-contenedor-tulugar container-fluid" style={{padding: '0 1.5em'}}>
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
