
import React, { useRef, useState } from 'react';
import { Card, Image, Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from "swiper/modules";

import "./PropiedadesDestacadas.css"

const PropertyCarousel = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <Container fluid>
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
                    modules={[Pagination]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className='swiperDestacadas'


                >

                    <SwiperSlide className="slide-destacadas">
                        <div className='div-slide-propiedades'>
                            <Image className='slide-imagen'
                                src={process.env.PUBLIC_URL + "/img/edificio-buscador.jpeg"}
                            />

                            <Card className="card-destacadas">
                                <Card.Body>
                                    <Card.Title>Alquiler</Card.Title>
                                    <Card.Text>
                                        Nombre de la propiedad<br />
                                        Barrio<br />
                                        Mts²
                                    </Card.Text>
                                </Card.Body>
                            </Card>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-destacadas">
                        <div className='div-slide-propiedades'>
                            <Image className='slide-imagen'
                                src={process.env.PUBLIC_URL + "/img/edificio-buscador.jpeg"}
                            />

                            <Card className="card-destacadas">
                                <Card.Body>
                                    <Card.Title>Alquiler</Card.Title>
                                    <Card.Text>
                                        Nombre de la propiedad<br />
                                        Barrio<br />
                                        Mts²
                                    </Card.Text>
                                </Card.Body>
                            </Card>



                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-destacadas">
                        <div className='div-slide-propiedades'>
                            <Image className='slide-imagen'
                                src={process.env.PUBLIC_URL + "/img/edificio-buscador.jpeg"}
                            />

                            <Card className="card-destacadas">
                                <Card.Body>
                                    <Card.Title>Alquiler</Card.Title>
                                    <Card.Text>
                                        Nombre de la propiedad<br />
                                        Barrio<br />
                                        Mts²
                                    </Card.Text>
                                </Card.Body>
                            </Card>



                        </div>
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