import { Image } from "react-bootstrap";
import './NuevoIngresoCard.css'

const NuevosIngresosCard = ({ imageSrc, casaNombre, barrioCasa, casaValor, estadoCasa, metrosCuadradoCasa, dormitoriosCasa, banosCasa }) => {
    return (
        <div className="contenedor-nuevos-ingresos">

            <Image className="imagen-nuevos-ingresos" src={process.env.PUBLIC_URL + imageSrc} alt={casaNombre} />

            <div className="contenedor-textos-nuevos-ingresos">
                <h2 className="nombre-casa">{casaNombre}</h2>
                <p>{barrioCasa}</p>
                <p>{metrosCuadradoCasa}</p>
                <p>{dormitoriosCasa}</p>
                <p>{banosCasa}</p>
                <p className="estado-casa"> {estadoCasa} </p>

            </div>
            <div>
                <h2 className="valor-casa m-0">{casaValor} Valor </h2>
            </div>
        </div>

    )
}

export { NuevosIngresosCard }