import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h1>Disaster Coordination App</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/alerts">Alerts</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/forum">Forum</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
