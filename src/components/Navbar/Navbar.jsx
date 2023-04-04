import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <button className="menu-btn" onClick={toggleMenu}>
        <span className="menu-btn__burger"></span>
      </button>
      <ul className={isOpen ? 'navbar-menu navbar-menu--open' : 'navbar-menu'}>
        <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
        <li className="navbar-item"><a href="/about" className="navbar-link">About</a></li>
        <li className="navbar-item"><a href="/contact" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
