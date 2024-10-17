import React from 'react';
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
            navigation={true}
            loop={true}
            modules={[Pagination, Navigation, EffectCoverflow]}
            className='swiper-tulugar'
            breakpoints={{
                768: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            }}
        >
            <div className='swipper-div-contenedor'>
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
            </div>
        </Swiper>
    )

}


export { SliderTuLugar }