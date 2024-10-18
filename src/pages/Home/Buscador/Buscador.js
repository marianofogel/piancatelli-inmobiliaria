import "./Buscador.css"
import { useRef } from "react";
import { Container, Form, FormGroup, Button } from 'react-bootstrap';
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router";

const Buscador = () => {

    const tipoPropiedadRef = useRef(null)
    const estadoRef = useRef(null)
    const ubicacionRef = useRef(null)
    const navigate = useNavigate()

    const handleBuscar = () => {
        const tipoPropiedad = tipoPropiedadRef.current.value;
        const estado = estadoRef.current.value;
        const ubicacion = ubicacionRef.current.value;

        if (tipoPropiedad && estado && ubicacion) {
            console.log('buscando')
            navigate(`busqueda?tipo=${tipoPropiedad}&estado=${estado}&ubicacion=${ubicacion}`)
        } else {
            console.log('faltan campos')
        }

    }

    return (
        <Container fluid className="search-container justify-content-center align-items-center p-0 vh-100">
            <div>
                <div className="buscador-contenedor">
                    <div className="buscador-fondo">
                        <h2 className="buscador-titulo">Encontrá tu próximo hogar</h2>

                        <Form className="buscador-form">
                            <FormGroup className="buscador-form-group">
                                <Form.Select className="d-flex" id="buscador-select" ref={tipoPropiedadRef}>
                                    <option hidden selected> Tipo </option>
                                    <option className="option-select">CASA</option>
                                    <option className="option-select">DEPARTAMENTOS</option>
                                    <option className="option-select">LOCAL</option>
                                    <option className="option-select">OFICINA</option>
                                </Form.Select>
                            </FormGroup>
                            <FormGroup className="buscador-form-group">
                                <Form.Select className="d-flex" id="buscador-select" ref={estadoRef}>
                                    <option hidden selected> Operación </option>
                                    <option className="option-select">VENTA</option>
                                    <option className="option-select">ALQUILER</option>
                                </Form.Select>
                            </FormGroup>
                            <Form.Group className="buscador-form-group">
                                <Form.Control className="buscador-input-text" type="text" placeholder="Ubicación" id="buscador-select" ref={ubicacionRef} />
                            </Form.Group>
                            <Button id='buscador-boton' className="search-btn mb-3" type="button" onClick={handleBuscar} > Buscar </Button>
                        </Form>
                    </div>

                    <div className="contenedor-boton-conocermas">
                        <Button id="boton-conocermas" onClick={() => {
                            // Inicia el scroll suave
                            document.getElementById("titulo-tu-lugar").scrollIntoView({
                                block: "start",
                                behavior: "smooth"
                            });
                            setTimeout(() => {
                                window.scrollBy(0, -90);
                            }, 1); // realizo ajuste para que no caiga la navbar en color sobre el titulo de TuLugar
                        }}> Conocé Más <IoIosArrowDown /> </Button>
                    </div>
                </div>
            </div>
        </Container >
    )


}


export { Buscador }