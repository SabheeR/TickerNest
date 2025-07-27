import React from 'react';
import './styles/TimeRangeSelector.css';

const ranges = ['1D', '1W', '1M', '3M', '1Y', '5Y'];

const TimeRangeSelector = () => (
  <div className="time-range">
    {ranges.map((range) => (
      <button key={range}>{range}</button>
    ))}
  </div>
);

export default TimeRangeSelector;
