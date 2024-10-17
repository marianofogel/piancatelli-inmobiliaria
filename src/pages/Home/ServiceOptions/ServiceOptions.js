import { Container } from "react-bootstrap";
import './ServiceOptions.css'
import { ServiceCard } from "./ServiceCard";

const servicios = [
    {
        imageSrc: "/img/qweqweqwe.png",
        nameService: 'Servicio 1',
        descriptionService: 'Descripcion Servicio 1'
    },
    {
        imageSrc: "/img/qweqweqwe.png",
        nameService: 'Servicio 2',
        descriptionService: 'Descripcion Servicio 2'
    },
    {
        imageSrc: "/img/qweqweqwe.png",
        nameService: 'Servicio 3',
        descriptionService: 'Descripcion Servicio 3'
    },
]

const ServiceOptions = () => {
    return (
        <Container fluid className="p-0">
            <div id="contenedor-principal-servicios">
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
    );
};

export { ServiceOptions };
