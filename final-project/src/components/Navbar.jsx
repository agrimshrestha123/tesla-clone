import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

function NavigationBar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    closeMenu();
  };

  return (
    <nav className={`navbar-custom ${theme === 'light' ? 'navbar-light' : 'navbar-dark'}`}>
      <div className="navbar-container">
        {/* Logo/Brand */}
        <Link to="/" className="navbar-logo fw-bold" onClick={closeMenu}>
          टेस्ला
        </Link>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={isOpen ? 'hamburger open' : 'hamburger'}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Nav Menu */}
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/inventory" className="nav-link" onClick={closeMenu}>
              Inventory
            </Link>
          </li>
          
          {currentUser ? (
            <>
              <li className="nav-item">
                <span className="nav-link user-greeting">
                  Hi, {currentUser.firstName}!
                </span>
              </li>
              <li className="nav-item">
                <button className="nav-link logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/login" className="nav-link" onClick={closeMenu}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/register" className="nav-link" onClick={closeMenu}>
                  Register
                </Link>
              </li>
            </>
          )}
          
          <li className="nav-item">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;