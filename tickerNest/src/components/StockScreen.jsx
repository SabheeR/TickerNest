import React from 'react';
import PriceSection from './PriceSection';
import TimeRangeSelector from './TimeRangeSelector';
import ChartDisplay from './ChartDisplay';
import ActionSection from './ActionSection';
import MyStocks from './MyStocks';
import './StockScreen.css';

const StockScreen = () => {
  return (
    <div className="stock-screen">
      <PriceSection />
      <ChartDisplay />
      <TimeRangeSelector />
      <ActionSection />
      <MyStocks />
    </div>
  );
};

export default StockScreen;
