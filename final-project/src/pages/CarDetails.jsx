import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Badge, Card } from 'react-bootstrap';
import carsData from '../data/CarsData';

function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the car by id
  const car = carsData.find(c => c.id === parseInt(id));

  // If car not found
  if (!car) {
    return (
      <Container className="mt-5 text-center">
        <h2>Car not found</h2>
        <Button variant="primary" onClick={() => navigate('/inventory')}>
          Back to Inventory
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Button variant="outline-secondary" className="mb-4" onClick={() => navigate('/inventory')}>
        ← Back to Inventory
      </Button>

      <Row>
        {/* Car Image */}
        <Col lg={6} className="mb-4">
          <img 
            src={car.image} 
            alt={car.model}
            className="img-fluid rounded shadow-lg car-detail-image"
          />
        </Col>

        {/* Car Details */}
        <Col lg={6}>
          <h1 className="display-4 fw-bold mb-3">{car.model}</h1>
          <h2 className="text-primary mb-4">${car.price.toLocaleString()}</h2>
          
          <div className="mb-4">
            <Badge bg="secondary" className="me-2 mb-2">{car.year}</Badge>
            <Badge bg="info" className="me-2 mb-2">{car.color}</Badge>
          </div>

          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h5 className="mb-3">Specifications</h5>
              <Row>
                <Col xs={6} className="mb-3">
                  <strong>Range:</strong>
                  <p className="mb-0">{car.range}</p>
                </Col>
                <Col xs={6} className="mb-3">
                  <strong>Top Speed:</strong>
                  <p className="mb-0">{car.topSpeed}</p>
                </Col>
                <Col xs={6} className="mb-3">
                  <strong>Acceleration:</strong>
                  <p className="mb-0">{car.acceleration}</p>
                </Col>
                <Col xs={6} className="mb-3">
                  <strong>Year:</strong>
                  <p className="mb-0">{car.year}</p>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-4 shadow-sm">
            <Card.Body>
              <h5 className="mb-3">Features</h5>
              <ul>
                <li>Autopilot Included</li>
                <li>Premium Interior</li>
                <li>Glass Roof</li>
                <li>17" Touchscreen Display</li>
                <li>Premium Audio System</li>
                <li>Heated Seats</li>
              </ul>
            </Card.Body>
          </Card>

          <div className="d-grid gap-2">
            <Button variant="primary" size="lg">
              Schedule Test Drive
            </Button>
            <Button variant="outline-primary" size="lg">
              Contact Sales Team
            </Button>
          </div>
        </Col>
      </Row>

      {/* Additional Info Section */}
      <Row className="mt-5">
        <Col>
          <Card className="shadow-sm">
            <Card.Body>
              <h4 className="mb-4">About This Model</h4>
              <p className="lead">
                The {car.model} represents the pinnacle of electric vehicle engineering. 
                With cutting-edge technology, stunning design, and unmatched performance, 
                it's more than just a car—it's a statement.
              </p>
              <p>
                Experience instant torque, zero emissions, and the most advanced autopilot 
                system on the market. Every drive becomes an adventure when you're behind 
                the wheel of a Tesla.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default CarDetails;