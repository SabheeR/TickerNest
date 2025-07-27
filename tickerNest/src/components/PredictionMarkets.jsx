import React from 'react';
import './styles/PredictionMarkets.css';

const PredictionMarkets = () => {
  const predictions = [
    {
      title: 'Belgian Grand Prix 2025 Winner',
      contracts: 12,
      value: '18–45¢'
    },
    {
      title: 'Fed Decision in July',
      contracts: 8,
      value: '60–90¢'
    },
    {
      title: '3M Open',
      contracts: 5,
      value: '12–20¢'
    }
  ];

  return (
    <div className="prediction-markets">
      <h3 className="section-title">PREDICTION MARKETS</h3>
      {predictions.map((item, index) => (
        <div key={index} className="prediction-row">
          <div className="prediction-info">
            <strong>{item.title}</strong>
            <div className="contracts">{item.contracts} contracts</div>
          </div>
          <div className="prediction-value">
            {item.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PredictionMarkets;
