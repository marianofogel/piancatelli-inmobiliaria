import React, { useRef, useState } from 'react';
import { Card, Image, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";
import "./PropiedadesDestacadas.css"
import { DestacadasSwiperCard } from './DestacadasCard';
import { properties } from "../../../_data/index"

const filterByHighlighted = properties.filter(casa => casa.highlighted)
const sortCreatedAt = filterByHighlighted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
const lastThreeAndHighlighted = sortCreatedAt.slice(0, 5)

const PropertyCarousel = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <Container fluid className='p-0'>
            <h1 id='titulo-swiper-destacadas'> Propiedades Destacadas </h1>
            <div className='swiper-container'>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}

                    allowTouchMove={false}

                    modules={[Autoplay, Pagination]}

                    className='swiperDestacadas'
                >

                    {lastThreeAndHighlighted.map((nuevaDestacada, index) => (
                        <SwiperSlide className="slide-destacadas">
                            <DestacadasSwiperCard key={index}
                                imageSrc={nuevaDestacada.images}
                                casaNombre={nuevaDestacada.title}
                                barrioCasa={nuevaDestacada.address}
                                metrosCuadradoCasa={nuevaDestacada.surface + "m2"}
                                estadoCasa={nuevaDestacada.operation}
                                casaValor={nuevaDestacada.price} />
                        </SwiperSlide>
                    ))}



                </Swiper>
            </div>
        </Container >


    )
}

export default PropertyCarousel;