import React from 'react';
import './styles/Account.css';

const Account = () => {
  const iraTotal = 4200;
  const personalTotal = 9187.98;

  return (
    <div className="account-page">
      <div className="profile-picture" />
      <h2 className="username-placeholder">Username123</h2>

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
    </div>
  );
};

export default Account;
