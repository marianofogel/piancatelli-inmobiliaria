import React, { useRef, useState, useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./PropiedadesDestacadas.css";
import { DestacadasSwiperCard } from "./DestacadasCard";
import { Element } from "react-scroll";

const PropertyCarousel = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const queryParams = new URLSearchParams({
          format: "json",
          key: process.env.REACT_APP_TOKKO_API_KEY,
          lang: "es_ar",
          limit: 5,
          data: JSON.stringify({
            operation_types: [1, 2, 3],
            property_types: [1, 2, 3, 4, 5, 6, 7],
            price_from: 0,
            price_to: 99999999,
            filters: [["is_starred_on_web", "Yes", 0]],
          }),
        });

        const response = await fetch(
          `http://tokkobroker.com/api/v1/property/search?${queryParams.toString()}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.objects);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const imageDefaultPiancatelli =
    process.env.PUBLIC_URL + "/img/Piancatelli.png";

  if (loading) {
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
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            allowTouchMove={false}
            modules={[Autoplay, Pagination]}
            className="swiperDestacadas"
          >
            {data
              .filter((nuevaDestacada) => nuevaDestacada.is_starred_on_web)
              .map((nuevaDestacada, index) => (
                <SwiperSlide className="slide-destacadas" key={index}>
                  <DestacadasSwiperCard
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
