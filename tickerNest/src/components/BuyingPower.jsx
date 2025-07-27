import React from 'react';
import './styles/BuyingPower.css';

const BuyingPower = () => {
  return (
    <div className="buying-power">
      <div className="bp-info">
        <p className="bp-label">Buying Power</p>
        <p className="bp-amount">$1,250.00</p>
      </div>
      <button className="bp-button">Deposit</button>
    </div>
  );
};

export default BuyingPower;
