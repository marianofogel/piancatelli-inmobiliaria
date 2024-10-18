import "./Buscador.css"
import { useRef } from "react";
import { Container, Form, FormGroup, Button } from 'react-bootstrap';
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router";
import useFilterStore from "../../../store";

const Buscador = () => {

    const typeRef = useRef(null);
    const operationRef = useRef(null);
    const addressRef = useRef(null);
    const navigate = useNavigate()

    const setFilters = useFilterStore((state) => state.setFilters)

    const handleBuscar = () => {
        const type = typeRef.current.value;
        const operation = operationRef.current.value;
        const address = addressRef.current.value;

        // Establecer los filtros y navegar a la página de propiedades
        setFilters({ type, operation, address });
        navigate("/propiedades");
    }


    return (
        <Container fluid className="search-container justify-content-center align-items-center p-0 vh-100">
            <div>
                <div className="buscador-contenedor">
                    <div className="buscador-fondo">
                        <h2 className="buscador-titulo">Encontrá tu próximo hogar</h2>

                        <Form className="buscador-form">
                            <FormGroup className="buscador-form-group">
                                <Form.Select className="d-flex" id="buscador-select" ref={typeRef} value={typeRef || ""}>
                                    <option hidden selected> Tipo </option>
                                    <option className="option-select" value="casa">CASA</option>
                                    <option className="option-select" value="departamento">DEPARTAMENTO</option>
                                    <option className="option-select" value="local">LOCAL</option>
                                    <option className="option-select" value="oficina">OFICINA</option>
                                </Form.Select>
                            </FormGroup>
                            <FormGroup className="buscador-form-group">
                                <Form.Select className="d-flex" id="buscador-select" ref={operationRef}>
                                    <option hidden selected> Operación </option>
                                    <option className="option-select" value="venta">VENTA</option>
                                    <option className="option-select" value="alquiler">ALQUILER</option>
                                </Form.Select>
                            </FormGroup>
                            <Form.Group className="buscador-form-group">
                                <Form.Control className="buscador-input-text" type="text" placeholder="Ubicación" id="buscador-select" ref={addressRef} />
                            </Form.Group>
                            <Button id='buscador-boton' className="search-btn mb-3" type="button" onClick={handleBuscar} > Buscar </Button>
                        </Form>
                    </div>

                    <div className="contenedor-boton-conocermas">
                        <Button id="boton-conocermas" onClick={() => {
                            // Inicia el scroll suave
                            document.getElementById("titulo-tu-lugar").scrollIntoView({
                                behavior: "smooth"
                            });
                            setTimeout(() => {
                                window.scrollBy(0, -199);
                            }, 1); // realizo ajuste para que no caiga la navbar en color sobre el titulo de TuLugar
                        }}> Conocé Más <IoIosArrowDown /> </Button>
                    </div>
                </div>
            </div>
        </Container >
    )


}


export { Buscador }