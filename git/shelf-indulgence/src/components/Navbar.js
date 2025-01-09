import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-title">Shelf-Indulgence</div>
      <div className="nav-buttons">
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "nav-button active" : "nav-button")}
        >
          To Read
        </NavLink>
        <NavLink 
          to="/in-progress" 
          className={({ isActive }) => (isActive ? "nav-button active" : "nav-button")}
        >
          In Progress
        </NavLink>
        <NavLink 
          to="/done" 
          className={({ isActive }) => (isActive ? "nav-button active" : "nav-button")}
        >
          Done
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
