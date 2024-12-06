import { Image, Button } from "react-bootstrap";


const TuLugarCard = ({ imageSrc, barrio, onClick, data, onButtonClick }) => {

    return (
        <>
            <div className='card-tulugar' onClick={onClick}>
                <Image className='imagen-tulugar'
                    src={imageSrc}
                />
                <p className='texto-tulugar'>{barrio}</p>

                {data && data.length ? (
                    <Button
                        variant="danger"
                        className="mt-2 mb-3 boton-filtros-tulugar"
                        onClick={ 
                            onButtonClick
                        }
                    >
                        Ver más propiedades
                    </Button>
                ) : " "}
            </div>
        </>

    )
}

export { TuLugarCard }


