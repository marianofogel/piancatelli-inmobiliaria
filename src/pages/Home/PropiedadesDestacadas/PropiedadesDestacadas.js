import React, { useRef, useState } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./PropiedadesDestacadas.css";
import { DestacadasSwiperCard } from "./DestacadasCard";
import useFetchData from "../../../hooks/useFetchData";
import { Element } from "react-scroll";

const PropertyCarousel = () => {
    const api = useFetchData("property");
    const imageDefaultPiancatelli =
        process.env.PUBLIC_URL + "/img/Piancatelli.png";

    if (api.loading) {
        return <Spinner></Spinner>;
    }

    return (
        <Element name="destacadas">
            <Container fluid className="p-0">
                <h1 id="propiedades-destacadas-piancatelli">
                    {" "}
                    Propiedades Destacadas{" "}
                </h1>
                <div className="swiper-container">
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
                        className="swiperDestacadas"
                    >
                        {api.data?.objects
                            .filter((nuevaDestacada) => nuevaDestacada.is_starred_on_web)
                            .map((nuevaDestacada, index) => (
                                <SwiperSlide className="slide-destacadas">
                                    <DestacadasSwiperCard
                                        key={index}
                                        imageSrc={
                                            nuevaDestacada.photos[0]?.image
                                                ? nuevaDestacada.photos[0].image
                                                : imageDefaultPiancatelli
                                        }
                                        casaNombre={nuevaDestacada.address}
                                        barrioCasa={nuevaDestacada.location.name}
                                        metrosCuadradoCasa={nuevaDestacada.surface + "m2"}
                                        estadoCasa={nuevaDestacada.operations[0].operation_type}
                                        casaValor={
                                            "USD " + nuevaDestacada.operations[0].prices[0].price
                                        }
                                        id={nuevaDestacada.id}
                                    />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </Container>
        </Element>
    );
};

export default PropertyCarousel;
