import React from 'react';
import { Button } from 'react-bootstrap';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <Button 
      variant={theme === 'light' ? 'dark' : 'light'} 
      onClick={toggleTheme}
      className="ms-3"
    >
      {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
    </Button>
  );
}

export default ThemeToggle;