import { Card, Image } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/pagination';
import "./DestacadasCard.css";

const DestacadasSwiperCard = () => {
    return (
        <div className='div-slide-propiedades'>
            <Image className='slide-imagen'
                src={process.env.PUBLIC_URL + "img/edificio-buscador.jpeg"}
            />
            <div className='datos-destacadas'>
                <Card className="card-destacadas">
                    <Card.Body className='card-destacadas-body'>
                        <Card.Title className='card-destacadas-estado'>Alquiler</Card.Title>
                        <Card.Text className='card-destacadas-textos'>
                            <p>Nombre de la propiedad</p>
                            <p>Barrio</p>
                            <p>Mts2</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>



        </div>
    )
}

export { DestacadasSwiperCard }