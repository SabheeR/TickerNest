import React from 'react';
import './styles/TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo">📊 TickerNest</div>
      <button className="notif-btn">🔔</button>
    </div>
  );
};

export default TopBar;
