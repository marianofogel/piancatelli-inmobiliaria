import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import emailjs from "@emailjs/browser"
export default function FormContacto() {

    const refForm = useRef();

    const handleSubmit = (event) => {
        event.preventDefault(); //no ejecuta el evento con el que llega el form

        /*DATOS QUE CAMBIARAN CON EL MAIL DE LA EMPRESA*/

        const serviceId = "service_82i2mh6";
        const templateId = "template_3p9qzu9";
        const apikey = "J0A6kghPxd3qMWkuW";
        //refForm.current : referencia al form actual
        emailjs.sendForm(serviceId, templateId, refForm.current, apikey) //lo q enviamos a la libreria
            .then(result => console.log(result.text)) //trae el valor de referencia de si se cumplio o no la peticion
            .catch(error => console.error(error))
    }

    return (
        <Form ref={refForm} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Control
                    name="from_name"
                    type="text"
                    placeholder="Nombre Completo"
                    required
                    minLength={2}
                    maxLength={25}
                />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Control

                    name="email"
                    id="email"
                    type="email"
                    placeholder="Correo electronico"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    className="number"
                    type="number"
                    name="number"
                    placeholder="Numero de Telefono"
                    minLength={8}
                    maxLength={14}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    name="asunto"
                    placeholder="Asunto"
                    minLength={3}
                    maxLength={40}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="message"
                    placeholder="Ingrese su consulta"
                    required
                />
            </Form.Group>
            <button className="boton-form">Enviar</button>
        </Form>
    )




};

