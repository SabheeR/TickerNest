import React from 'react';
import './styles/TopBar.css';
import logo from '../assets/logo.png';



const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="topbar-logo">
        <img src={logo} alt="TickerNest Logo" className="logo-img" />
      </div>
      <button className="notif-btn">🔔</button>
    </div>
  );
};

export default TopBar;
