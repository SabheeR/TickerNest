import React from 'react';
import './styles/Account.css';
import TermsFooter from './TermsFooter';
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const handleLogout = async () => {
  try {
    await signOut(auth);
    alert("Logged out successfully!");
    // Optionally redirect to login page
    // navigate("/login"); // if using react-router
  } catch (err) {
    console.error("Logout error:", err);
  }
};

const Account = () => {
  const iraTotal = 4200;
  const personalTotal = 9187.98;

  return (
    <div className="account-page">
      <div className="profile-picture" />
      <h2 className="username-placeholder">Username123</h2>

      <button onClick={handleLogout} className="logout-button">
        Log Out
      </button>



      <div className="investment-summary">
        <div className="investment-box">
          <p className="investment-label">IRA Investment</p>
          <p className="investment-value">${iraTotal.toLocaleString()}</p>
        </div>
        <div className="investment-box">
          <p className="investment-label">Personal Investment</p>
          <p className="investment-value">${personalTotal.toLocaleString()}</p>
        </div>
      </div>

      <div className="total-tickernest">
        <span>Total in TickerNest:</span>
        <strong>$13,387.98</strong>
      </div>


      <a href="#" className="add-account-link">+ Add Account</a>

      <div className="investment-breakdown">
  <h3>Investments</h3>
  <div className="investment-item">
    <span>Total Value:</span>
    <strong>$13,987.98</strong>
  </div>
  <div className="investment-item">
    <span>Total Personal:</span>
    <strong>$8,322.50</strong>
  </div>
  <div className="investment-item">
    <span>Total IRA:</span>
    <strong>$5,100.00</strong>
  </div>
  <div className="investment-item">
    <span>Total Cash:</span>
    <strong>$565.48</strong>
  </div>
</div>


      <TermsFooter/>
    </div>
    
  );
};

export default Account;
