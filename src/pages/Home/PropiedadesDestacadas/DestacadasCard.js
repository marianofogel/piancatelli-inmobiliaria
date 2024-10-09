import './DestacadasCard.css'


const DestacadasCard = ({ imageSrc, title, description }) => {
    return (
        <>
            <div className="destacadas-div">
                <img src={imageSrc} alt={title} className="destacadas-card-image" /> 
            </div>
            <div className="destacadas-text-div">
            <h5>{title}</h5>
            <p>{description}</p>
            </div>
        </>
    )
}

export default DestacadasCard