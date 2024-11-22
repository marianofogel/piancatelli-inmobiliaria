import { Image } from "react-bootstrap";

const TuLugarCard = ({ imageSrc, localidad, onClick }) => {

    return (
        <div className='card-tulugar' onClick={onClick}>
            <Image className='imagen-tulugar'
                src={imageSrc}
            />
            <p className='texto-tulugar'>{localidad}</p>
        </div>
    )



}

export { TuLugarCard }


