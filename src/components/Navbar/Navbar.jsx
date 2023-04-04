import React, { useState } from 'react';
import './Navbar.css';
import Button from '@mui/material/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* <button className="menu-btn" onClick={toggleMenu}>
        <span className="menu-btn__burger"></span>
      </button> */}
      <ul className={isOpen ? 'navbar-menu navbar-menu--open' : 'navbar-menu'}>
        <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
        <li className="navbar-item"><a href="/about" className="navbar-link">About</a></li>
        <li className="navbar-item"><a href="/about" className="navbar-link">Services</a></li>
        <li className="navbar-item"><a href="/contact" className="navbar-link">Contact</a></li>
        <li className="navbar-item"><a href="/about" className="navbar-link">News & Media</a></li>
        <li className="navbar-item"><a href="/about" className="navbar-link">Locations</a></li>
        <li className="navbar-item"><a href="/about" className="navbar-link">Jobs</a></li>
        <li className="navbar-item"><a href="/about" className="navbar-link">Login</a></li>
        <Button variant="contained" id='track-btn'>Track</Button>
      </ul>
      
    </nav>
  );
};

export default Navbar;
