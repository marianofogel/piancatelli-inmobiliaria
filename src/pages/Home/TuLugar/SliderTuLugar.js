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
import useFetchData from '../../../hooks/useFetchData';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


const SliderTuLugar = () => {


    const api = useFetchData('property')

    const navigate = useNavigate();
    const setFilters = useFilterStore((state) => state.setFilters); // Era el hjook de Zustand, y con esto solo agarramos el setFilters, es con la que actualizaremos el estado (Localidad) y lo guarda en el useFilterStore.

    const handleCardClick = (localidad) => {
        const localizationId = localidad.location?.id

        setFilters({ localizationId });
        // Lo que le pasemos en localidad va a ser el filtro que va a aparecer despues del navigate
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
                pagination={{
                    clickable: true,
                }}
                navigation={false}
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

                {api.data?.objects

                    .filter((localidad) => localidad.location?.id)
                    .filter(
                        (localidad, index, self) =>
                            self.findIndex((loc) => loc.location.id === localidad.location.id) ===
                            index)
                    .map((localidad, index) => (
                        <SwiperSlide key={index} className='swiper-slide-tulugar'>
                            <TuLugarCard

                                imageSrc={localidad.photos[0]?.image ? localidad.photos[0].image : imageDefaultPiancatelli}
                                localidad={localidad.location?.name}
                                value={localidad.location?.id}
                                onClick={() => handleCardClick(localidad)}
                            />
                        </SwiperSlide>
                    ))}
            </Swiper >
        </div >
    )

}


export { SliderTuLugar }