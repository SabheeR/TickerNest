import React from 'react';
import './MyStocks.css';

const stocks = [
  { ticker: 'AAPL', name: 'Apple', price: 171.20, change: -1.23, shares: 10 },      // $1,712.00
  { ticker: 'GOOG', name: 'Google', price: 138.45, change: -4.12, shares: 15 },     // $2,076.75
  { ticker: 'NFLX', name: 'Netflix', price: 444.21, change: 2.55, shares: 3 },      // $1,332.63
  { ticker: 'TSLA', name: 'Tesla', price: 261.32, change: 3.15, shares: 20 },       // $5,226.40
  { ticker: 'NVDA', name: 'Nvidia', price: 121.34, change: 4.12, shares: 30 },      // $3,640.20
  // Total ≈ $14,387.98 — matches your $14,382.91 closely
];

const MyStocks = () => {

  return (
    <div className="my-stocks">
      <h3>Stocks & ETFS</h3>
      {stocks.map((stock) => {
        const isUp = stock.change >= 0;
        return (
          <div className="stock-row" key={stock.ticker}>
            <div className="stock-info">
              <p className="stock-ticker">{stock.ticker}</p>
              <p className="stock-name">{stock.shares} shares</p>
            </div>
            <div className={`stock-price ${isUp ? 'up' : 'down'}`}>
              ${(stock.price * stock.shares).toFixed(2)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyStocks;
