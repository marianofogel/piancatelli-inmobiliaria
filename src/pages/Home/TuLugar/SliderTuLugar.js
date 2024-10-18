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
                    <Link>
                        <div className='card-tulugar'>
                            <Image className='imagen-tulugar'
                                src={process.env.PUBLIC_URL + "/img/piancatelli-gris.jpeg"}
                            />
                            <p className='texto-tulugar'>Hurlingham</p>
                        </div>
                    </Link>

                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <div className='card-tulugar'>
                            <Image className='imagen-tulugar'
                                src={process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"}
                            />
                            <p className='texto-tulugar'>Moron</p>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <div className='card-tulugar'>
                            <Image className='imagen-tulugar'
                                src={process.env.PUBLIC_URL + "/img/piancatelli-gris.jpeg"}
                            />
                            <p className='texto-tulugar'>Haedo</p>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide
                >
                    <Link>
                        <div className='card-tulugar'>
                            <Image className='imagen-tulugar'
                                src={process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"}
                            />
                            <p className='texto-tulugar'>Bella Vista</p>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <div className='card-tulugar'>
                            <Image className='imagen-tulugar'
                                src={process.env.PUBLIC_URL + "/img/piancatelli-gris.jpeg"}
                            />
                            <p className='texto-tulugar'>San Miguel</p>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <div className='card-tulugar'>
                            <Image className='imagen-tulugar'
                                src={process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"}
                            />
                            <p className='texto-tulugar'>Hurlingham</p>
                        </div>
                    </Link>
                </SwiperSlide>

            </Swiper >
        </div >
    )

}


export { SliderTuLugar }