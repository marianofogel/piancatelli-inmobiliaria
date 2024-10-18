import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from "react-bootstrap";
import { Swiper, SwiperSlide, } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./slider.css"

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
const SliderTuLugar = () => {

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
                spaceBetween={10}
                draggable={false}
                centeredSlides={true}
                pagination={true}
                navigation={false}
                loop={true}
                modules={[Pagination, EffectCoverflow, Navigation]}
                className='swiper-tulugar'
                breakpoints={{
                    1000: {
                        slidesPerView: 4,
                        spaceBetween: 22,
                    },
                }}
            >

                <SwiperSlide className='swiper-slide-tulugar'
                >

                    <Image
                        src={process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"}
                    />

                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={process.env.PUBLIC_URL + "/img/piancatelli-gris.jpeg"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"}
                    />
                </SwiperSlide>
                <SwiperSlide
                >
                    <Image
                        src={process.env.PUBLIC_URL + "/img/piancatelli-gris.jpeg"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        src={process.env.PUBLIC_URL + "/img/piancatelli-gris.jpeg"}
                    />
                </SwiperSlide>

            </Swiper >
        </div>
    )

}


export { SliderTuLugar }