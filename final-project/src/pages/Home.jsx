import React, { useState } from 'react';
import { Container, Button, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: '⚡',
      title: 'Instant Power',
      description: "Feel the rush of instant acceleration. No gear shifts, no delays—just pure, smooth power that'll pin you to your seat.",
      hoverText: 'From 0 to smile in 3.1 seconds'
    },
    {
      id: 2,
      icon: '🔋',
      title: 'Go The Distance',
      description: "Forget range anxiety. With up to 405 miles per charge, your only worry will be finding more excuses to drive.",
      hoverText: 'That\'s LA to San Francisco on one charge'
    },
    {
      id: 3,
      icon: '🤖',
      title: 'Your Co-Pilot',
      description: "Advanced autopilot makes every drive safer and less stressful. It's like having a really smart friend who never gets tired.",
      hoverText: 'Traffic jams just became nap time'
    },
    {
      id: 4,
      icon: '🌍',
      title: 'Zero Emissions',
      description: "Drive guilt-free knowing you're not pumping harmful gases into the air. Mother Nature approves this message.",
      hoverText: 'Be the change you want to see'
    },
    {
      id: 5,
      icon: '💰',
      title: 'Save Money',
      description: "No more gas stations, fewer maintenance costs. Your wallet will thank you with every mile you drive.",
      hoverText: 'Typical savings: $1,500+/year'
    },
    {
      id: 6,
      icon: '🎮',
      title: 'Entertainment Hub',
      description: "Massive touchscreen, premium sound, gaming, Netflix, and more. It's basically a living room on wheels.",
      hoverText: 'Yes, you can play Cyberpunk in here'
    }
  ];



  return (
    <div>
      {/* Hero Section */}
      <div className="hero-section text-center text-white d-flex align-items-center justify-content-center">
        <Container>
          <h1 className="display-2 fw-bold mb-4 hero-title">
            The Future Isn't Coming.<br />It's Already Here.
          </h1>
          <p className="lead mb-4 hero-subtitle">
            Join thousands of drivers who've already made the switch to electric. 
            Your perfect <span className='fw-bold text-primary '>टेस्ला</span>  is waiting.
          </p>
          <Link to="/inventory">
            <Button variant="light" size="lg" className="px-5 py-3 cta-button">
              Explore Our Collection →
            </Button>
          </Link>
        </Container>
      </div>

      {/* Why Tesla Section */}
      <Container className="my-5 py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">Why People Love <span className="text-primary">टेस्ला</span></h2>
          <p className="lead text-muted">It's not just a car. It's a lifestyle upgrade.</p>
        </div>
        
        <Row>
          {features.map((feature) => (
            <Col md={4} sm={6} className="mb-4" key={feature.id}>
              <Card 
                className="h-100 text-center shadow-sm feature-card"
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card.Body className="p-4">
                  <div className={`feature-icon mb-3 ${hoveredCard === feature.id ? 'icon-bounce' : ''}`}>
                    {feature.icon}
                  </div>
                  <Card.Title className="fw-bold mb-3">{feature.title}</Card.Title>
                  <Card.Text className="text-muted">
                    {hoveredCard === feature.id ? feature.hoverText : feature.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Stats Section */}
      <div className="stats-section py-5">
        <Container>
          <h3 className="text-center mb-5">The Numbers Don't Lie</h3>
          <Row className="text-center">
            <Col md={3} sm={6} className="mb-4 stat-item">
              <h2 className="display-4 fw-bold stat-number">3.1s</h2>
              <p className="text-muted">0-60 mph in the Model S Plaid</p>
              <small className="text-muted">Faster than you can say "whoa"</small>
            </Col>
            <Col md={3} sm={6} className="mb-4 stat-item">
              <h2 className="display-4 fw-bold stat-number">405</h2>
              <p className="text-muted">Miles of range on a single charge</p>
              <small className="text-muted">Road trip? No problem.</small>
            </Col>
            <Col md={3} sm={6} className="mb-4 stat-item">
              <h2 className="display-4 fw-bold stat-number">200</h2>
              <p className="text-muted">mph top speed</p>
              <small className="text-muted">(Please drive responsibly)</small>
            </Col>
            <Col md={3} sm={6} className="mb-4 stat-item">
              <h2 className="display-4 fw-bold stat-number">1020</h2>
              <p className="text-muted">Horsepower under the hood</p>
              <small className="text-muted">Electric beasts, no joke</small>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CTA Section */}
      <div className="cta-section text-center py-5">
        <Container>
          <h2 className="display-5 fw-bold mb-4">Ready to Make the Switch?</h2>
          <p className="lead mb-4">
            Browse our inventory and find the Tesla that matches your style. 
            Trust us, your gas-guzzling days are numbered.
          </p>
          <Link to="/inventory">
            <Button variant="primary" size="lg" className="me-3 mb-3 pulse-button">
              View Available Cars
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="outline-primary" size="lg" className="mb-3">
              Create Free Account
            </Button>
          </Link>
          <p className="mt-4 text-muted">
            <small>No pressure. Just pure electric joy.</small>
          </p>
        </Container>
      </div>
    </div>
  );
}

export default Home;