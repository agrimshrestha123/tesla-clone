import React from 'react';
import { Button } from 'react-bootstrap';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <Button 
      variant={theme === 'light' ? 'dark' : 'light'} 
      onClick={toggleTheme}
      className="ms-3"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  );
}

export default ThemeToggle;