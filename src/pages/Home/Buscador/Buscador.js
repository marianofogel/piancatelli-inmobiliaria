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

        const filters = {}

        if (type && type !== "Tipo") {
            filters.type = type;
        }

        if (operation && operation !== "Operación") {
            filters.operation = operation;
        }

        if (address) {
            filters.address = address;
        }
        // Establecer los filtros y navegar a la página de propiedades
        setFilters(filters);
        navigate("/propiedades");
    }

    const goToTuLugar = () => {
        if (location.pathname !== "/") {
            navigate("/#propiedades-destacadas-piancatelli"); // Navegar a Home con el hash
        } else {
            const element = document.querySelector("#propiedades-destacadas-piancatelli");
            if (element) {
                const navbarCompensacion = 94; // Ajusta este valor a la altura de tu navbar
                const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Obtener la posición del elemento
                window.scrollTo({ top: elementPosition - navbarCompensacion, behavior: "smooth" }); // Desplazarse

                window.history.replaceState(null, "", " ");
            }
        }
    };


    return (
        <Container fluid className="perro justify-content-center align-items-center p-0 vh-100">
            <div>
                <div className="buscador-contenedor">
                    <div className="buscador-fondo">
                        <h2 className="buscador-titulo">Encontrá tu próximo hogar</h2>

                        <Form className="buscador-form">
                            <FormGroup className="buscador-form-group">
                                <Form.Select className="d-flex" id="buscador-select" ref={typeRef}>
                                    <option hidden> Tipo </option>
                                    <option className="option-select" value="casa">CASA</option>
                                    <option className="option-select" value="departamento">DEPARTAMENTO</option>
                                    <option className="option-select" value="local">LOCAL</option>
                                    <option className="option-select" value="oficina">OFICINA</option>
                                </Form.Select>
                            </FormGroup>
                            <FormGroup className="buscador-form-group">
                                <Form.Select className="d-flex" id="buscador-select" ref={operationRef}>
                                    <option hidden> Operación </option>
                                    <option className="option-select" value="venta">VENTA</option>
                                    <option className="option-select" value="alquiler">ALQUILER</option>
                                    <option className="option-select" value="alquiler temporal">ALQUILER TEMPORAL</option>
                                </Form.Select>
                            </FormGroup>
                            <Form.Group className="buscador-form-group">
                                <Form.Control className="buscador-input-text" type="text" placeholder="Localidad    " id="buscador-select" ref={addressRef} />
                            </Form.Group>
                            <Button id='buscador-boton' className="search-btn mb-3" type="button" onClick={handleBuscar} > Buscar </Button>
                        </Form>
                    </div>

                    <div className="contenedor-boton-conocermas">
                        <Button id="boton-conocermas" type="button" onClick={goToTuLugar}><IoIosArrowDown /> Conocé Más <IoIosArrowDown /> </Button>
                    </div>
                </div>
            </div>
        </Container >
    )


}


export { Buscador }