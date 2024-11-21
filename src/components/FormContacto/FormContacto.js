import React, { useState } from "react";
import { Form, Button, Spinner, Alert } from "react-bootstrap";
import "./FormContacto.css";

export function FormContacto({ defaultValues = {} }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    text: "",
    property: defaultValues.property || "",
  });
  const [send, setSend] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    await sendDataToTokko(formData);
  };

  const sendDataToTokko = async (data) => {
    const TOKEN = process.env.REACT_APP_TOKKO_API_KEY;
    const API_URL = `https://api.tokkobroker.com/api/v1/webcontact/?key=${TOKEN}`;

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
          properties: [data.property],
        }),
      });

      if (response.ok) {
        setSend(true);
        setTimeout(() => {
          setSend(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            text: "",
            property: "",
          });
        }, 5000);
      } else {
        const errorText = await response.text();
        setError(`Error al enviar el mensaje`);
      }
    } catch (error) {
      setError(`Error al enviar el mensaje`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form className="form-contacto w-100" onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
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
          type="number"
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
      <Button type="submit" className="boton-form" disabled={loading}>
        {loading ? (
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        ) : send ? (
          "Enviado!"
        ) : (
          "Enviar"
        )}
      </Button>
    </Form>
  );
}
