import React from 'react';
import PriceSectionRetirement from './PriceSectionRetirement';
import ChartDisplay from './ChartDisplay';
import BuyingPower from './BuyingPower';
import Contribution from './Contribution';
import TimeRangeSelector from './TimeRangeSelector';
import MyStocks from './MyStocks';
import TermsFooter from './TermsFooter';

const Retirement = () => {
  return (
    <div className="stock-screen">
      <PriceSectionRetirement />
      <ChartDisplay />
      <TimeRangeSelector/>
      <BuyingPower />
      <Contribution />
      <MyStocks/>
      <TermsFooter/>

    </div>
  );
};

export default Retirement;

