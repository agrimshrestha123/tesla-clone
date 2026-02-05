import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CarCard({ car }) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/car/${car.id}`);
  };

  return (
    <Card className="h-100 shadow-sm car-card">
      <Card.Img 
        variant="top" 
        src={car.image} 
        alt={car.model}
        style={{ height: '200px', objectFit: 'cover', cursor: 'pointer' }}
        onClick={handleViewDetails}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{car.model}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{car.year}</Card.Subtitle>
        
        <div className="mb-3">
          <Badge bg="secondary" className="me-2">{car.range}</Badge>
          <Badge bg="info">{car.acceleration}</Badge>
        </div>

        <div className="mb-2">
          <small className="text-muted">Color: {car.color}</small>
        </div>
        <div className="mb-2">
          <small className="text-muted">Top Speed: {car.topSpeed}</small>
        </div>

        <h4 className="text-primary mt-auto">${car.price.toLocaleString()}</h4>
        
        <Button variant="primary" className="mt-2" onClick={handleViewDetails}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CarCard;