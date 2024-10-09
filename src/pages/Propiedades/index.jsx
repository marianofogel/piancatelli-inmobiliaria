import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const properties = [
    {
        id: 1,
        title: 'Property 1',
        description: 'Description for property 1',
        image: 'https://via.placeholder.com/150'
    },
    {
        id: 2,
        title: 'Property 2',
        description: 'Description for property 2',
        image: 'https://via.placeholder.com/150'
    },
];

const PropertyCard = ({ property }) => (
    <Col md={4} className="mb-4">
        <Card>
            <Card.Img variant="top" src={property.image} />
            <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>{property.description}</Card.Text>
            </Card.Body>
        </Card>
    </Col>
);

const PropertiesLayout = () => (
    <Container>
        <Row>
            {properties.map(property => (
                <PropertyCard key={property.id} property={property} />
            ))}
        </Row>
    </Container>
);

export default PropertiesLayout;