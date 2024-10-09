import React from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import './PropiedadesDestacadas.css';  // Estilos personalizados
import DestacadasCard from './DestacadasCard';
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const PropertyCarousel = () => {

    const propiedades = [
        {
            imageSrc: "/img/piancatelli-gris.jpeg",
            title: 'Propiedad 1',
            description: 'Descripcion Prop 1'
        },
        {
            imageSrc: "/img/piancatelli-blanco.jpeg",
            title: 'Propiedad 2',
            description: 'Descripcion Prop 2'
        },
        {
            imageSrc: "/img/piancatelli-gris.jpeg",
            title: 'Propiedad 3',
            description: 'Descripcion Prop 3'
        },
        {
            imageSrc: "/img/piancatelli-blanco.jpeg",
            title: 'Propiedad 4',
            description: 'Descripcion Prop 4'
        }
    ]

    return (
        <Container fluid>
            <div className="property-carousel-container">
                <Carousel
                    interval={3000}  // Duración entre cada slide
                    controls={true}  // Mostrar controles
                    indicators={true} // Ocultar indicadores
                    nextIcon={<span aria-hidden="true" className="carousel-control-siguiente"><i> <VscChevronRight className='flecha'/> </i></span>}
                    prevIcon={<span aria-hidden="true" className="carousel-control-anterior"><i> <VscChevronLeft className='flecha'/></i></span>}
                    fade={true}  // Transición suave
                >
                    {propiedades.map((propiedad, index) => (
                        <Carousel.Item key={index}>
                            <DestacadasCard
                                imageSrc={propiedad.imageSrc}
                                title={propiedad.title}
                                description={propiedad.description}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </Container>
    );
}

export default PropertyCarousel;