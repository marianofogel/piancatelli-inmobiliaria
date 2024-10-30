import { NuevosIngresosCard } from "./NuevoIngresoCard"
import { Container, Spinner } from "react-bootstrap"
import './NuevosIngresos.css'
import { properties } from "../../../_data/index"
import useFetchData from '../../../hooks/useFetchData';



const NuevosIngresos = () => {
    const api = useFetchData('property/search')
    const imageDefaultPiancatelli = process.env.PUBLIC_URL + "/img/Piancatelli.png"

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
                    <div className="contenedor-cards">
                        {api.data.objects
                        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
                        .slice(0, 3)
                        .map((nuevoIngreso, index) => (
                        <NuevosIngresosCard key={index}
                            imageSrc={nuevoIngreso.photos[0]?.image ? nuevoIngreso.photos[0].image : imageDefaultPiancatelli}
                            casaNombre={nuevoIngreso.address}
                            barrioCasa={nuevoIngreso.location.name}
                            metrosCuadradoCasa={nuevoIngreso.surface + "m2"}
                            dormitoriosCasa={nuevoIngreso.room_amount + " habitaciones"}
                            banosCasa={nuevoIngreso.bathroom_amount + " baños"}
                            casaDescripcion={nuevoIngreso.description}
                            casaValor={"USD " + nuevoIngreso.operations[0].prices[0].price}
                            estadoCasa={nuevoIngreso.operations[0].operation_type}
                            createdAt={nuevoIngreso.created_at}
                            id={nuevoIngreso.id} />

                        ))}
                    </div>
                </div>

            </Container>
        </>

    )
}

export { NuevosIngresos }