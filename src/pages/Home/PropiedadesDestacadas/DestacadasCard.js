import { Card, Image } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/pagination';
import "./DestacadasCard.css";
import { Link } from 'react-router-dom';
import { FaCity, FaRulerCombined, FaHandHoldingUsd } from "react-icons/fa";

const DestacadasSwiperCard = ({ id, imageSrc, casaNombre, barrioCasa, casaValor, estadoCasa, metrosCuadradoCasa, destacadaCasa }) => {
    return (
        <Link to={`propiedades/${id}`} className="link-card-propiedades-destacadas">
            <div className='div-slide-propiedades'>
                <Image className='slide-imagen'
                    src={process.env.PUBLIC_URL + imageSrc} alt={casaNombre}
                />
                <div className='datos-destacadas'>
                    <Card className="card-destacadas">
                        <Card.Body className='card-destacadas-body'>
                            <div className='card-fondo-title'>
                                <Card.Title className='card-destacadas-estado'>{estadoCasa}</Card.Title>
                            </div>
                            <Card.Text className='card-destacadas-textos'>
                                <p className='card-destacada-propiedad-name'>{casaNombre}</p>
                                <p> <FaCity color="#white" /> {barrioCasa}</p>
                                <p> <FaRulerCombined color="#white" /> {metrosCuadradoCasa}</p>
                                <p> <FaHandHoldingUsd color='#white'/> {casaValor}</p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </Link>
    )
}

export { DestacadasSwiperCard }