import { Image } from "react-bootstrap";
import './ServiceCard.css'


const ServiceCard = ({ imageSrc, nameService, descriptionService }) => {
    return (
        <div className="contenedor-actividades">
            <div className="actividades">
                <Image className="foto-circulo" src={process.env.PUBLIC_URL + imageSrc} alt={nameService} />
                <div>
                    <h2 className="nombre-actividades">{nameService}</h2>
                    <p className="descripcion-actividades">{descriptionService}</p>
                </div>
            </div>
        </div>
    )
}

export { ServiceCard }