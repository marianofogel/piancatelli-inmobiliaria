import "./Buscador.css"
import { Container, Form, FormGroup, Button } from 'react-bootstrap';

const Buscador = () => {

    return (
        <Container fluid className="search-container justify-content-center align-items-center p-0 vh-100">
            <div>
                <div className="buscador-contenedor">
                    <div className="buscador-fondo">
                        <h2 className="buscador-titulo">Encontrá tu próximo hogar</h2>

                        <Form className="buscador-form">
                            <FormGroup  className="buscador-form-group">
                                <Form.Select className="d-flex" id="buscador-select">
                                    <option hidden selected> Tipo </option>
                                    <option className="option-select">CASA</option>
                                    <option className="option-select">DEPARTAMENTOS</option>
                                    <option className="option-select">LOCAL</option>
                                    <option className="option-select">OFICINA</option>
                                </Form.Select>
                            </FormGroup>
                            <FormGroup  className="buscador-form-group">
                                <Form.Select className="d-flex" id="buscador-select">
                                    <option hidden selected> Operación </option>
                                    <option className="option-select">VENTA</option>
                                    <option className="option-select">ALQUILER</option>
                                    <option className="option-select">ALQUILERaaaaaaaa</option>
                                </Form.Select>
                            </FormGroup>
                            <Form.Group className="buscador-form-group">
                                <Form.Control className="buscador-input-text" type="text" placeholder="Ubicación" id="buscador-select" />
                            </Form.Group>
                            
                            <Button id='buscador-boton' className="search-btn mb-3"> Buscar </Button>

                        </Form>
                    </div>
                </div>
            </div>
        </Container >
    )


}


export { Buscador }