import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle';

function NavigationBar({ theme, toggleTheme }) {
  return (
    <Navbar bg={theme === 'light' ? 'light' : 'dark'} variant={theme === 'light' ? 'light' : 'dark'} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className='h1'>Tesla Inventory</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/inventory">Inventory</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
          </Nav>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;