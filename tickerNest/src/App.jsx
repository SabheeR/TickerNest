import React from 'react';
import './index.css';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import { Routes, Route } from 'react-router-dom';
import StockScreen from './components/StockScreen';
import Retirement from './components/Retirement';
import Account from './components/Account';

function App() {
  return (
    <>
      <TopBar />
      
      <Routes>
        <Route path="/" element={<StockScreen />} />
        <Route path="/retirement" element={<Retirement />} />
        <Route path="/account" element={<Account />} />
      </Routes>
      
      <BottomNav />
    </>
  );
}

export default App;
