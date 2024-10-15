import { NuevosIngresosCard } from "./NuevoIngresoCard"
import { Container } from "react-bootstrap"
import './NuevosIngresos.css'
import { properties } from "../../../_data/index"

const sortCreatedAt = properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
const lastThree = sortCreatedAt.slice(0, 3)

const NuevosIngresos = () => {
    return (
        <>
            <Container fluid className="p-0">
                <div className="contenedor-ingresos">
                    <h1 className="nuevos-ingresos-titulo"> Nuevos Ingresos </h1>
                    <div className="contenedor-cards">
                        {lastThree.map((nuevoIngreso, index) => (
                            <NuevosIngresosCard key={index}
                                imageSrc={nuevoIngreso.images}
                                casaNombre={nuevoIngreso.title}
                                barrioCasa={nuevoIngreso.address}
                                metrosCuadradoCasa={nuevoIngreso.surface + "m2"}
                                dormitoriosCasa={nuevoIngreso.rooms + " habitaciones"}
                                banosCasa={nuevoIngreso.bathrooms + " baños"}
                                casaDescripcion={nuevoIngreso.description}
                                casaValor={nuevoIngreso.price}
                                estadoCasa={nuevoIngreso.operation}
                                createdAt={nuevoIngreso.createdAt} />

                        ))}
                    </div>
                </div>

            </Container>
        </>

    )
}

export { NuevosIngresos }