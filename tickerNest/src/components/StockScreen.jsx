import React from 'react';
import PriceSection from './PriceSection';
import TimeRangeSelector from './TimeRangeSelector';
import ChartDisplay from './ChartDisplay';
import ActionSection from './ActionSection';
import MyStocks from './MyStocks';
import "./styles/StockScreen.css";
import PromoSlider from './PromoSlider';
import BuyingPower from './BuyingPower';
import TermsFooter from './TermsFooter';
import PredictionMarkets from './PredictionMarkets';

const StockScreen = () => {
  return (
    <div className="stock-screen">
      <PriceSection />
      <ChartDisplay />
      <TimeRangeSelector />
      <BuyingPower />
      <PromoSlider />
      <ActionSection />
      <MyStocks />
      <PredictionMarkets />
      <TermsFooter />
    </div>
  );
};


export default StockScreen;
