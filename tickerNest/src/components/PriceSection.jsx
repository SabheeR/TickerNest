import React from 'react';
import './PriceSection.css';

const PriceSection = () => {
  const todayChange = 754.12;     // positive
  const overnightChange = -12.87; // negative

  const renderChange = (label, amount) => {
    const sign = amount >= 0 ? '▲' : '▼';
    const colorClass = amount >= 0 ? 'positive' : 'negative';

    return (
      <p className={`change-row ${colorClass}`}>
        <span className="change-label">{label}:</span>
        {sign} ${Math.abs(amount).toFixed(2)}
      </p>
    );
  };

  return (
    <div className="price-section">
      <p className="label">investing</p>
      <h2>$13,987.98</h2>
      <div className="change-block">
        {renderChange('Today', todayChange)}
        {renderChange('Overnight', overnightChange)}
      </div>
    </div>
  );
};

export default PriceSection;
