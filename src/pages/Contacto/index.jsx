import FormContacto from "../../components/FormContacto/FormContacto";
import {
    Col,
    Row,
    Container,
    Stack,
    Image,
} from "react-bootstrap";
import "../Contacto/Contacto.css"





export default function Contacto () {


return(

    <Container fluid className="mt-5">
        <Row className="container-contacto">
            <Col className="col-contacto">
            <Image
             src={process.env.PUBLIC_URL + "/img/Piancatelli.png"}
             alt="Company Logo"
             width={350}
             height={400}
            />
            </Col>
            <Col className="col-contacto">
            <Stack>
                <h2 className="pb-3">Envianos tu Mensaje!    </h2>
                <div className="col-contacto">
             <FormContacto/>
            </div>
            </Stack>
            </Col>
        </Row>

    </Container>
)



}