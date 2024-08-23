import React from 'react';
import './Loan.css'; // Import the CSS file for styling

const Loan = () => {
  return (
    <div className="loan-container">
      <h1 className="loan-title">Apply for a Loan</h1>
      <form className="loan-form">
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" name="fullName" placeholder="Enter your full name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" placeholder="Enter your email address" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
        </div>
        <div className="form-group">
          <label htmlFor="loanAmount">Loan Amount</label>
          <input type="number" id="loanAmount" name="loanAmount" placeholder="Enter loan amount" required />
        </div>
        <div className="form-group">
          <label htmlFor="loanPurpose">Purpose of Loan</label>
          <textarea id="loanPurpose" name="loanPurpose" placeholder="Describe the purpose of the loan" required></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="income">Monthly Income</label>
          <input type="number" id="income" name="income" placeholder="Enter your monthly income" required />
        </div>
        <div className="form-group">
          <button type="submit" className="submit-button">Apply Now</button>
        </div>
      </form>
    </div>
  );
};

export default Loan;
