import { Container } from "react-bootstrap";
import { Image } from "react-bootstrap";
import './GridQueHacen.css'


const GridQueHacen = () => {
    return (
        <Container fluid>
            <div className="contenedor-principal">
                <h1 className="grid-que-hacen-titulo"> Cosas que hace la inmobiliaria (texto a cambiar): </h1>
                <div className="contenedor-actividades">
                    <div className="actividades">
                        <Image src={process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"}
                            alt="Company Logo"
                            className="fotos-grid"
                            loading='lazy' />
                        <div className="textos">
                            <h2>Actividad 1</h2>
                            <p>Actividad 1</p>
                        </div>
                    </div>
                    <div className="actividades">
                        <Image src={process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"}
                            alt="Company Logo"
                            className="fotos-grid"
                            loading='lazy' />
                        <div className="textos">
                            <h2>Actividad 2</h2>
                            <p>Actividad 2</p>
                        </div>
                    </div>
                    <div className="actividades">
                        <Image src={process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"}
                            alt="Company Logo"
                            className="fotos-grid"
                            loading='lazy' />
                        <div className="textos">
                            <h2>Actividad 3</h2>
                            <p>Actividad 3</p>
                        </div>
                    </div>
                    <div className="actividades">
                        <Image src={process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"}
                            alt="Company Logo"
                            className="fotos-grid"
                            loading='lazy' />
                        <div className="textos">
                            <h2>Actividad 4</h2>
                            <p>Actividad 4</p>
                        </div>
                    </div>
                    <div className="actividades">
                        <Image src={process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"}
                            alt="Company Logo"
                            className="fotos-grid"
                            loading='lazy' />
                        <div className="textos">
                            <h2>Actividad 5</h2>
                            <p>Actividad 5</p>
                        </div>
                    </div>
                    <div className="actividades">
                        <Image src={process.env.PUBLIC_URL + "/img/piancatelli-blanco.jpeg"}
                            alt="Company Logo"
                            className="fotos-grid"
                            loading='lazy' />
                        <div className="textos">
                            <h2>Actividad 6</h2>
                            <p>Actividad 6</p>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export { GridQueHacen };
