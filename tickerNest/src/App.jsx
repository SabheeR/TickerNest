import React, { useEffect, useState } from 'react';
import './index.css';
import TopBar from './components/TopBar';
import BottomNav from './components/BottomNav';
import { Routes, Route, Navigate } from 'react-router-dom';
import StockScreen from './components/StockScreen';
import Retirement from './components/Retirement';
import Account from './components/Account';
import Login from './components/Login';
import Signup from './components/Signup';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      {user && <TopBar />}

      <Routes>
        {user ? (
          <>
            <Route path="/" element={<StockScreen />} />
            <Route path="/retirement" element={<Retirement />} />
            <Route path="/account" element={<Account />} />
            <Route path="*" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>

      {user && <BottomNav />}
    </>
  );
}

export default App;
