import React, { useRef, useState } from 'react';
import { Card, Image, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
import "./PropiedadesDestacadas.css"
import { DestacadasSwiperCard } from './DestacadasCard';

const PropertyCarousel = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <Container fluid className='p-0'>
            <div className='swiper-container'>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className='swiperDestacadas'
                >

                    <SwiperSlide className="slide-destacadas">
                        <DestacadasSwiperCard />
                    </SwiperSlide>

                    <SwiperSlide className="slide-destacadas">
                        <DestacadasSwiperCard />
                    </SwiperSlide>

                    <SwiperSlide className="slide-destacadas">
                        <DestacadasSwiperCard />
                    </SwiperSlide>


                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>

                </Swiper>
            </div>
        </Container >


    )
}

export default PropertyCarousel;