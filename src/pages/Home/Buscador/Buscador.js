import "./Buscador.css"
import { Container, Form, InputGroup } from 'react-bootstrap';

const Buscador = () => {

    return (
        <Container fluid className="p-0 vh-100" >
            <div className="buscador-general-contendor">
                <div className="buscador-contenedor" style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL + "/img/edificio-buscador.jpeg"})`

                }}>
                    <div className="text-center text-white" style={{ padding: "50px 0" }}>
                        <h2 className="buscador-titulo">ENCONTRA TU NUEVO HOGAR</h2>

                        <div className="buscador-form">
                            <InputGroup id='buscador-input-grupo' className="mb-3" style={{ margin: "auto" }}>
                                <Form.Select
                                    className="buscador-select"
                                    aria-label="Tipo"
                                    style={{
                                        backgroundColor: "transparent", // Fondo blanco para los selects
                                        border: "1px solid #ffffff",
                                        color: "white",
                                    }}
                                >
                                    <option hidden selected>Tipo</option>
                                    <option className="option-select">Casa</option>
                                    <option className="option-select">Departamento</option>
                                    <option className="option-select">Local</option>
                                    <option className="option-select">Oficina</option>
                                </Form.Select>
                                <Form.Select
                                    className="buscador-select"
                                    aria-label="Estado"
                                    style={{
                                        backgroundColor: "transparent", // Fondo blanco para los selects
                                        border: "1px solid #ffffff",
                                        color: "white",

                                    }}

                                >
                                    <option hidden selected>Estado</option>
                                    <option className="option-select">Venta</option>
                                    <option className="option-select">Alquiler</option>
                                </Form.Select>
                                <Form.Control
                                    className="buscador-input-text"
                                    type="text"
                                    placeholder="Ubicacion"
                                    style={{
                                        backgroundColor: "transparent", // Fondo blanco para los selects
                                        border: "1px solid #ffffff",
                                    }}
                                />
                                <button
                                    className="buscador-boton"
                                    style={{
                                        backgroundColor: "rgb(232, 169, 106)", // Fondo blanco para los selects
                                        border: "1px solid #ffffff",
                                        color: "black",

                                    }}

                                >Buscar</button>
                            </InputGroup>
                        </div>
                    </div>

                </div>
            </div>
        </Container >
    )


}


export { Buscador }