import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Disaster Management App</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/alerts">Alerts</Link>
        <Link to="/resources">Resources</Link>
        <Link to="/forum">Forum</Link>
      </div>
    </nav>
  );
}

export default Navbar;
