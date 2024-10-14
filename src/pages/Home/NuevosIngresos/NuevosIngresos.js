import { NuevosIngresosCard } from "./NuevoIngresoCard"
import { Container } from "react-bootstrap"
import './NuevosIngresos.css'

const nuevosIngresos = [
    {
        imageSrc: "/img/piancatelli-gris.jpeg",
        casaNombre: "Casa 1",
        barrioCasa: "Hurlingham",
        metrosCuadradoCasa: "200m2",
        dormitoriosCasa: "4 dormitorios",
        banosCasa: "2 baños",
        casaValor: "200.000.000",
        estadoCasa: "Alquiler"
    },
    {
        imageSrc: "/img/hurlingham.jpg",
        casaNombre: "Casa 2",
        barrioCasa: "Hurlingham",
        metrosCuadradoCasa: "600m2",
        dormitoriosCasa: "2 dormitorios",
        banosCasa: "1 baños",
        casaValor: "100.000.000",
        estadoCasa: "Alquiler"
    },
    {
        imageSrc: "/img/piancatelli-gris.jpeg",
        casaNombre: "Casa 3",
        barrioCasa: "Hurlingham",
        metrosCuadradoCasa: "2000m2",
        dormitoriosCasa: "10 dormitorios",
        banosCasa: "14 baños",
        casaValor: "500.000",
        estadoCasa: "Alquiler"
    },

]


const NuevosIngresos = () => {
    return (
        <>
            <Container fluid className="p-0">
                <div className="contenedor-ingresos">
                    <h1 className="nuevos-ingresos-titulo"> Nuevos Ingresos </h1>
                    <div className="contenedor-cards">
                        {nuevosIngresos.map((nuevoIngreso, index) => (
                            <NuevosIngresosCard key={index}
                                imageSrc={nuevoIngreso.imageSrc}
                                casaNombre={nuevoIngreso.casaNombre}
                                barrioCasa={nuevoIngreso.barrioCasa}
                                metrosCuadradoCasa={nuevoIngreso.metrosCuadradoCasa}
                                dormitoriosCasa={nuevoIngreso.dormitoriosCasa}
                                banosCasa={nuevoIngreso.banosCasa}
                                casaDescripcion={nuevoIngreso.casaDescripcion}
                                casaValor={nuevoIngreso.casaValor}
                                estadoCasa={nuevoIngreso.estadoCasa} />
                        ))}
                    </div>
                </div>

            </Container>
        </>

    )
}

export { NuevosIngresos }