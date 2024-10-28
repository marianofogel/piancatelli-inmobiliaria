import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser"
import "./FormContacto.css"
export function FormContacto({ defaultValues }) {

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

        <Form className="form-contacto w-100" ref={refForm} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" >
                <Form.Control
                    className="group-form-contact"
                    name="from_name"
                    type="text"
                    placeholder="Nombre y Apellido"
                    required
                    minLength={2}
                    maxLength={25}
                />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Control
                    className="group-form-contact"
                    type="number"
                    name="number"
                    placeholder="Telefono"
                    minLength={8}
                    maxLength={14}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    className="group-form-contact"
                    name="email"
                    id="email"
                    type="email"
                    placeholder="E-mail"
                    required
                />

            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Control
                    className="group-form-contact"
                    name="property"
                    type="text"
                    placeholder="Propiedad de interes"
                    value={defaultValues?.property}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    className="group-form-contact"
                    as="textarea"
                    rows={5}
                    name="message"
                    placeholder="Ingrese su consulta"
                    required
                />

            </Form.Group>
            <Button
                type="submit"
                className="boton-form">Enviar</Button>
        </Form >

    )




};

