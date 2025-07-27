import React from 'react';
import './styles/BottomNav.css';
import { Link } from 'react-router-dom';


const BottomNav = () => {
  return (
    <footer className="bottom-nav-container">
      <div className="bottom-nav">
        <Link to="/" className="nav-btn">
          🏠
          <span>Home</span>
        </Link>
        <Link to="/retirement" className="nav-btn">
          🧓
          <span>Retirement</span>
        </Link>
        <Link to="/account" className="nav-btn">
          👤
          <span>Account</span>
        </Link>
      </div>
    </footer>
  );
};

export default BottomNav;

