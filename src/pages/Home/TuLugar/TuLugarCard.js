import { Image } from "react-bootstrap";

const TuLugarCard = ({ imageSrc, barrio, onClick }) => {

    return (
        <div className='card-tulugar' onClick={onClick}>
            <Image className='imagen-tulugar'
                src={imageSrc}
            />
            <p className='texto-tulugar'>{barrio}</p>
        </div>
    )



}

export { TuLugarCard }


