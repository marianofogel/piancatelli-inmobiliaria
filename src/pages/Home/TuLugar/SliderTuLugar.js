import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { TuLugarCard } from "./TuLugarCard";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { barrios } from "../../../utils";

const SliderTuLugar = () => {
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
        {barrios.map((barrio, index) => (
          <SwiperSlide key={index} className="swiper-slide-tulugar">
            <Link to={`/barrios/${barrio.location_id}`}>
              <TuLugarCard
                imageSrc={process.env.PUBLIC_URL + "/img/barrios/" + barrio.location_id + ".webp"}
                barrio={barrio.location_name}
                value={barrio.location_id}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export { SliderTuLugar };
