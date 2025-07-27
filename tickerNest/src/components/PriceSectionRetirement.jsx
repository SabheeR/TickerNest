import React from 'react';
import './styles/PriceSection.css';

const PriceSection = () => {
  const todayChange = 1521.12;
  const overnightChange = -14.87;

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
    <div className="price-section-row">
      <div className="price-section">
        <p className="label">roth IRA</p>
        <h2>$30,456.19</h2>
        <div className="change-block">
          {renderChange('Today', todayChange)}
          {renderChange('Overnight', overnightChange)}
        </div>
      </div>

      <button className="gold-btn">Gold</button>
    </div>
  );
};

export default PriceSection;

