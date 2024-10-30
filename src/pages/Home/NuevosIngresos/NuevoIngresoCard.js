import { Image } from "react-bootstrap";
import './NuevoIngresoCard.css'
import { Link } from "react-router-dom";

const NuevosIngresosCard = ({ id, imageSrc, casaNombre, barrioCasa, casaValor, estadoCasa, metrosCuadradoCasa, dormitoriosCasa, banosCasa, createdAt }) => {
    return (
        <Link to={`/propiedades/${id}`} className="link-card-nuevos-ingresos">
            <div className="contenedor-nuevos-ingresos">

                <Image className="imagen-nuevos-ingresos" src={process.env.PUBLIC_URL + imageSrc} alt={casaNombre} />

                <div className="contenedor-textos-nuevos-ingresos">
                    <h2 className="nombre-casa">{casaNombre}</h2>
                    <p>{barrioCasa}</p>
                    <p>{metrosCuadradoCasa}</p>
                    <p>{dormitoriosCasa}</p>
                    <p>{banosCasa}</p>
                    <p className="estado-casa"> {estadoCasa} </p>
                    <p className="fecha-de-publicacion"> {createdAt} </p>

                </div>
                <div>
                    <h2 className="valor-casa m-0">{casaValor}</h2>
                </div>
            </div>
        </Link>

        /* 
        import { Image, Card, CardBody, ListGroup } from "react-bootstrap";
        import './NuevoIngresoCard.css'

        const NuevosIngresosCard = ({ imageSrc, casaNombre, barrioCasa, casaValor, estadoCasa, metrosCuadradoCasa, dormitoriosCasa, banosCasa, createdAt }) => {
        return (
            <Card className="contenedor-nuevos-ingresos">
                <Card.Img className="imagen-nuevos-ingresos" src={process.env.PUBLIC_URL + imageSrc} alt={casaNombre} />
                <Card.Body className="contenedor-textos-nuevos-ingresos">
                    <Card.Title className="nombre-casa">{casaNombre}</Card.Title>
                </Card.Body>
                <ListGroup className="contenedor-textos-nuevos-ingresos">
                    <ListGroup.Item>{barrioCasa}</ListGroup.Item>
                    <ListGroup.Item>{metrosCuadradoCasa}</ListGroup.Item>
                    <ListGroup.Item>{dormitoriosCasa}</ListGroup.Item>
                    <ListGroup.Item>{banosCasa}</ListGroup.Item>
                    <p className="estado-casa"> {estadoCasa} </p>
                    <p className="fecha-de-publicacion"> {createdAt} </p>
                </ListGroup>
                <Card.Body>
                    <Card.Link className="valor-casa m-0">{casaValor} Valor </Card.Link>
                </Card.Body>
            </Card>
    );
}
 */

    )
}

export { NuevosIngresosCard }