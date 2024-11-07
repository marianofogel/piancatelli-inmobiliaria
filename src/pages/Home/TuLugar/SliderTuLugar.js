import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide, } from 'swiper/react';
import { TuLugarCard } from './TuLugarCard';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./slider.css"

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
const SliderTuLugar = () => {
    const imageDefaultPiancatelli = process.env.PUBLIC_URL + "/img/piancatelli-gris.jpeg"


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

                <SwiperSlide className='swiper-slide-tulugar'
                >
                    <TuLugarCard
                        imageSrc={imageDefaultPiancatelli}
                        localidad={"Hurlingham"}
                    />

                </SwiperSlide>
                <SwiperSlide>
                    <TuLugarCard
                        imageSrc={imageDefaultPiancatelli}
                        localidad={"Jose C Paz"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TuLugarCard
                        imageSrc={imageDefaultPiancatelli}
                        localidad={"Moron"}
                    />
                </SwiperSlide>
                <SwiperSlide
                >
                    <TuLugarCard
                        imageSrc={imageDefaultPiancatelli}
                        localidad={"La Boca"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TuLugarCard
                        imageSrc={imageDefaultPiancatelli}
                        localidad={"Avellaneda"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <TuLugarCard
                        imageSrc={imageDefaultPiancatelli}
                        localidad={"Hurlingham"}
                    />
                </SwiperSlide>

            </Swiper >
        </div >
    )

}


export { SliderTuLugar }