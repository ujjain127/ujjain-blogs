import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <Link to="/">
            <h1>Ujjain Blogs</h1>
          </Link>
        </div>
        <div className="nav-links">
          <Link to="/">Blog</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/about">About</Link>
          <Link to="/newsletter">Newsletter</Link>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header; 