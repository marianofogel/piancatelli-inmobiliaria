import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { TuLugarCard } from './TuLugarCard';
import useFilterStore from "../../../store";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./slider.css"
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { localidades } from './localidades'

const SliderTuLugar = () => {

    const navigate = useNavigate();
    const setFilters = useFilterStore((state) => state.setFilters); // Era el hjook de Zustand, y con esto solo agarramos el setFilters, es con la que actualizaremos el estado (Localidad) y lo guarda en el useFilterStore.

    const handleCardClick = (localidad) => {
        setFilters({ address: localidad });  // Lo que le pasemos en localidad va a ser el filtro que va a aparecer despues del navigate
        navigate("/propiedades");
    };

    return (
        <div className='swiper-contenedor-tulugar'>
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
                pagination={false}
                navigation={true}
                loop={true}
                modules={[Pagination, EffectCoverflow, Navigation]}
                className='swiper-tulugar'
                breakpoints={{
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 22,
                    },
                }}
            >

                {
                    localidades.map((localidad, index) => (
                        <SwiperSlide key={index} className='swiper-slide-tulugar'>
                            <TuLugarCard
                                imageSrc={localidad.imageSrc}
                                localidad={localidad.localidad}
                                onClick={() => handleCardClick(localidad.localidad)}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper >
        </div >
    )

}


export { SliderTuLugar }