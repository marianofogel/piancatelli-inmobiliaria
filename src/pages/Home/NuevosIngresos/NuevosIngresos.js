import { Row } from "reactstrap";
import { ItemDestacadas } from "./ItemDestacadas";
import { Col, Container, Spinner } from "react-bootstrap"
import './NuevosIngresos.css'
import useFetchData from '../../../hooks/useFetchData';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


const NuevosIngresos = () => {
    const api = useFetchData('property')

    const [properties, setProperties] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://www.tokkobroker.com/api/v1/property/search/?lang=es_ar&format=json&limit=3&data={"operation_types":[1,2,3],"property_types":[1,2,3,4,5,6,7],"price_from":0,"price_to":99999999,"filters":[]}&key=${process.env.REACT_APP_TOKKO_API_KEY}&lang=es_ar&order_by=-id`
                );

                // Verifica si el response es exitoso
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }

                const data = await response.json();
                setProperties(data.objects); // Asegúrate de que la estructura de datos sea correcta
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, []);

    if (error) {
        return <p>Error al cargar propiedades: {error}</p>;
    }


    if (api.loading) {
        return (
            <Spinner></Spinner>
        )
    }


    return (
        <>
            <Container fluid className="p-0">
                <div id="contenedor-ingresos">
                    <h1 className="nuevos-ingresos-titulo"> Nuevos Ingresos </h1>
                    <div className="width">
                        <Row style={{padding: '2em'}} className="contenedor-cards">
                            {properties
                                .map((nuevoIngreso, index) => (
                                    <Col sm={12} md={4} key={`${nuevoIngreso.id}`}>
                                        <Link
                                            to={`/propiedades/${nuevoIngreso.id}`}
                                            style={{ textDecoration: "none" }}
                                        >
                                            <ItemDestacadas
                                                property={nuevoIngreso}
                                                className="item-card"
                                            />
                                        </Link>
                                    </Col>
                                ))}
                        </Row>
                    </div>
                </div>
            </Container>


        </>

    )
}

export { NuevosIngresos }