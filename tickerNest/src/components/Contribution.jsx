import React from 'react';
import './styles/Contribution.css';

const Contribution = () => {
  const totalLimit = 7000;
  const contributed = 4200;
  const percentage = (contributed / totalLimit) * 100;

  return (
    <div className="contribution-wrapper">
      <h3>Contributions</h3>
      <div className="contribution-content">
        <div className="contribution-chart">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#444"
              strokeWidth="10"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#00e676"
              strokeWidth="10"
              fill="none"
              strokeDasharray="282.6"
              strokeDashoffset={282.6 - (282.6 * percentage) / 100}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              fill="white"
              fontSize="12"
            >
              {Math.round(percentage)}%
            </text>
          </svg>
        </div>

        <div className="contribution-info">
  <div className="info-section">
    <p className="info-label">2025 Total</p>
    <p className="info-value">${contributed.toLocaleString()}</p>
  </div>

  <div className="info-divider" />

  <div className="info-section">
    <p className="info-label">IRA Match</p>
    <p className="info-value">${(contributed * 0.03).toFixed(2)}</p>
  </div>
</div>

      </div>
    </div>
  );
};

export default Contribution;
