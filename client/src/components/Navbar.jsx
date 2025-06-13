import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <nav className="custom-navbar">
      <Link to="/" className="navbar-brand">Monarch Store</Link>

      <button className="menu-toggle" onClick={toggleMenu}>
         {isMenuOpen ? '×' : '☰'}
      </button>

      <ul className={`navbar-links ${isMenuOpen ? 'show' : ''}`}>
        <li><Link to="/" className="active">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
