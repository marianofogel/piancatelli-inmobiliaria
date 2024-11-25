import { Row } from "reactstrap";
import { ItemDestacadas } from "./ItemDestacadas";
import { Container, Spinner } from "react-bootstrap"
import './NuevosIngresos.css'
import useFetchData from '../../../hooks/useFetchData';
import { Link } from "react-router-dom";


const NuevosIngresos = () => {
    const api = useFetchData('property')

    if (api.loading) {
        return (
            <Spinner></Spinner>
        )
    }

    const formatDate = (created_at) => {
        if (!created_at) return "";

        const date = new Date(created_at);

        // Obtenemos los componentes de la fecha
        const day = date.getDate();
        const month = date.toLocaleString('es-ES', { month: 'short' });
        const year = date.getFullYear();

        // Devolvemos la fecha en formato "día mes año"
        return `${day} ${month.toUpperCase()} ${year}`;
    };

    return (
        <>
            <Container fluid className="p-0">
                <div id="contenedor-ingresos">
                    <h1 className="nuevos-ingresos-titulo"> Nuevos Ingresos </h1>
                    <div className="width">
                        <Row className="contenedor-cards">
                            {api.data?.objects
                                .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                                .slice(0, 3)
                                .map((nuevoIngreso, index) => (
                                    <div className="div-item-destecada" key={`${nuevoIngreso.id}`}>
                                        <Link
                                            to={`/propiedades/${nuevoIngreso.id}`}
                                            style={{ textDecoration: "none" }}
                                        >
                                            <ItemDestacadas
                                                property={nuevoIngreso}
                                                className="item-card"
                                            />
                                        </Link>
                                    </div>
                                ))}
                        </Row>
                    </div>
                </div>
            </Container>


        </>

    )
}

export { NuevosIngresos }