import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import CarCard from '../components/CarCard';
import carsData from '../data/CarsData';

export default function Inventory() {
    const [cars] = useState(carsData)
  return (
    <Container className="mt-5">
      <h1 className="mb-4">Tesla Inventory</h1>
      <p className="lead mb-4">Browse our available vehicles</p>
      
      <Row>
        {cars.map(car => (
          <Col key={car.id} xs={12} md={6} lg={4} className="mb-4">
            <CarCard car={car} />
          </Col>
        ))}
      </Row>
    </Container>
 )
}
