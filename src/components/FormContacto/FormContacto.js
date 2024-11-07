import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./FormContacto.css";

export function FormContacto({ defaultValues = {} }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        text: "",
        property: defaultValues.property || ""  // Usar defaultValues para establecer valor inicial
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendDataToTokko(formData);
    };

    const sendDataToTokko = async (data) => {
        const API_URL = "https://api.tokkobroker.com/api/v1/webcontact/?key=3cbc5baf1ad3ebb4672111e2f3aa215c17f962eb";
        const TOKEN = "3cbc5baf1ad3ebb4672111e2f3aa215c17f962eb"

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",


                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    phone: data.phone,
                    text: data.text,
                    properties: data.property  // Enviar el ID de la propiedad de interés
                })
            });

            // Verificar si la respuesta es correcta antes de intentar parsear JSON
            if (response.ok) {
                const result = await response.text(); // Cambia esto temporalmente para revisar la respuesta como texto.
                console.log("Respuesta de la API:", result);

                alert("Formulario enviado exitosamente");
            } else {
                const errorText = await response.text();
                console.error("Error en la respuesta de la API:", errorText);
                alert("Error al enviar el formulario: " + response.statusText);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Hubo un error al enviar el formulario");
        }
    };

    return (
        <Form className="form-contacto w-100" onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
                <Form.Control
                    className="group-form-contact"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre y Apellido"
                    minLength={2}
                    maxLength={25}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    className="group-form-contact"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Teléfono"
                    minLength={8}
                    maxLength={14}
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    className="group-form-contact"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="E-mail"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    className="group-form-contact"
                    name="property"
                    type="text"
                    value={formData.property}
                    onChange={handleChange}
                    placeholder="Propiedad de interés"
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    className="group-form-contact"
                    as="textarea"
                    rows={5}
                    name="text"
                    value={formData.text}
                    onChange={handleChange}
                    placeholder="Ingrese su consulta"
                    required
                />
            </Form.Group>
            <Button type="submit" className="boton-form">Enviar</Button>
        </Form>
    );
}