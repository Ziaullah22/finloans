import React from 'react';
import './Offer.css';

const Offers = () => {
  return (
    <section className="offers">
      <div className="offers-header">
        <h1>What we offer for you</h1>
        <div className="blue-line"></div>
      </div>
      <p className="offers-description">
        We provide online instant cash loans with quick approval that suit your term
      </p>
      <div className="offers-content">
        <div className="offer-item">
          <i className="fas fa-home"></i> {/* Font Awesome icon for Home Loan */}
          <h5>Home Loan</h5>
          <p>$3000-$10000</p>
          <div className="white-line"></div>
          <ul>
            <li>Borrow - $350 over 3 months</li>
            <li>Interest rate - 292% pa fixed</li>
            <li>Total amount payable - $525.12</li>
            <li>Representative - 1,286% APR</li>
          </ul>
          <button className="apply-now">Apply Now</button>
        </div>
        <div className="offer-item">
          <i className="fas fa-car"></i> {/* Font Awesome icon for Car Loan */}
          <h5>Car Loan</h5>
          <p>$3000-$10000</p>
          <div className="white-line"></div>
          <ul>
            <li>Borrow - $350 over 3 months</li>
            <li>Interest rate - 292% pa fixed</li>
            <li>Total amount payable - $525.12</li>
            <li>Representative - 1,286% APR</li>
          </ul>
          <button className="apply-now">Apply Now</button>
        </div>
        <div className="offer-item">
          <i className="fas fa-graduation-cap"></i> {/* Font Awesome icon for Education Loan */}
          <h5>Education Loan</h5>
          <p>$3000-$10000</p>
          <div className="white-line"></div>
          <ul>
            <li>Borrow - $350 over 3 months</li>
            <li>Interest rate - 292% pa fixed</li>
            <li>Total amount payable - $525.12</li>
            <li>Representative - 1,286% APR</li>
          </ul>
          <button className="apply-now">Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default Offers;
