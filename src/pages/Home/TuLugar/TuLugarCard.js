import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
const TuLugarCard = ({ imageSrc, localidad }) => {

    return (
        <Link value="localidad1" >
            <div className='card-tulugar'>
                <Image className='imagen-tulugar'
                    src={imageSrc}
                />
                <p className='texto-tulugar'>{localidad}</p>
            </div>
        </Link >

    )



}

export { TuLugarCard }


