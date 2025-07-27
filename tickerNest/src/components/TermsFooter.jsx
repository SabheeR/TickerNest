import React from 'react';
import './styles/TermsFooter.css';

const TermsFooter = () => {
  return (
    <div className="terms-footer">
      <p>
        Securities trading offered through TickerNest Financial LLC, a wholly owned subsidiary of TickerNest Inc.
        Investing involves risk and loss of capital. Past performance does not guarantee future results.
      </p>
      <p>
        Brokerage services are provided by TickerNest Financial LLC, Member FINRA / SIPC.
        Bank services provided by TickerNest Bank, Member FDIC.
      </p>
      <p>
        All investments involve risk. The value of securities may fluctuate and as a result, clients may lose more than their original investment.
      </p>
    </div>
  );
};

export default TermsFooter;
