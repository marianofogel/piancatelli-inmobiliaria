import { Container } from "react-bootstrap";
import './ServiceOptions.css'
import { ServiceCard } from "./ServiceCard";
import { Element } from 'react-scroll';

const servicios = [
    {
        imageSrc: "/img/logo-asistencia.png",
        nameService: 'Servicio 1',
        descriptionService: 'Descripcion Servicio 1'
    },
    {
        imageSrc: "/img/logo-asistencia.png",
        nameService: 'Servicio 2',
        descriptionService: 'Descripcion Servicio 2'
    },
    {
        imageSrc: "/img/logo-asistencia.png",
        nameService: 'Servicio 3',
        descriptionService: 'Descripcion Servicio 3'
    },
]

const ServiceOptions = () => {
    return (
        <Element name="servicios">
            <Container fluid className="p-0">
                <div id="servicios-piancatelli">
                    <h1 className="grid-que-hacen-titulo"> Servicios </h1>
                    <h2 className="grid-que-hacen-titulo"> En Piancatelli Propiedades entendemos que... por eso, tambien ofrecemos... para que ...</h2>

                    <div className="services-card-contenedor">
                        {servicios.map((servicio, index) => (
                            <ServiceCard key={index}
                                imageSrc={servicio.imageSrc}
                                nameService={servicio.nameService}
                                descriptionService={servicio.descriptionService} />
                        ))}
                    </div>
                </div>
            </Container>
        </Element>
    );
};

export { ServiceOptions };
