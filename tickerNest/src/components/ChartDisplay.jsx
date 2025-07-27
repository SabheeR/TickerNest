import React from 'react';
import './styles/ChartDisplay.css';

const PlaceholderChart = () => {
  return (
    <svg
      width="100%"
      height="150"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      style={{ backgroundColor: '#121212', borderRadius: '10px' }}
    >
      <polyline
        fill="none"
        stroke="#00e676"
        strokeWidth="2"
        points="0,80 20,70 40,75 60,60 80,65 100,50 120,55 140,45 160,48 180,30 200,40 220,25 240,30 260,20 280,22 300,10"
      />
    </svg>
  );
};

export default PlaceholderChart;

