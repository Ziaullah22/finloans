import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [amount, setAmount] = useState('');
  const [month, setMonth] = useState('');
  const [payment, setPayment] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    calculatePayment(e.target.value, month);
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    calculatePayment(amount, e.target.value);
  };

  const calculatePayment = (amount, month) => {
    // Basic example calculation: you can change the formula as per your requirements.
    if (amount && month) {
      const monthlyRate = 0.05; // 5% interest rate example
      const totalPayment = (parseInt(amount) * (1 + monthlyRate * parseInt(month) / 12)).toFixed(2);
      setPayment(totalPayment);
    } else {
      setPayment(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You need to pay: $${payment}`);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='first'>
    <nav className={`navbar navbar-expand-lg navbar-light ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className={`container `}>
        <a className="navbar-brand" href="#">
          <img src="/images/logo.png.webp" alt="Logo" className="navbar-logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/loan">
                Loan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="pagesDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Pages
              </a>
              <div className="dropdown-menu" aria-labelledby="pagesDropdown">
                <a className="dropdown-item" href="/loan">Apply Loan</a>
                <a className="dropdown-item" href="/loan">Elements</a>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="blogDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Blog
              </a>
              <div className="dropdown-menu" aria-labelledby="blogDropdown">
                <a className="dropdown-item" href="/blog">Blog</a>
                <a className="dropdown-item" href="/blog">Single Blog</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/faq">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <span className="contact-number">
            <i className="fas fa-phone-alt"></i> +923489183148
          </span>
          <button className="apply-btn">
            Apply For A Loan
          </button>
        </div>
      </div>
      <div className="navbar-heading">
        Get Loan for your Business growth or startup
      </div>
      <div className="navbar-heading2">
        Get Loan for your Business growth or startup
      </div>
      <div className='navbar-button'>
        <button className="work">How it works</button>
      </div>
      <form className="navbar-form" onSubmit={handleSubmit}>
        <center><h4>How much do you want?</h4></center>
        <p>We provide online instant cash loans with quick approval.</p>
        
        <select className='options' value={amount} onChange={handleAmountChange}>
          <option value="" disabled>Amount</option>
          <option value="10">$10</option>
          <option value="30">$30</option>
          <option value="40">$40</option>
          <option value="60">$60</option>
        </select>

        <select className='options' value={month} onChange={handleMonthChange}>
          <option value="" disabled>Month</option>
          <option value="3">3 Months</option>
          <option value="6">6 Months</option>
          <option value="9">9 Months</option>
          <option value="12">12 Months</option>
        </select>
        <h6>You have to pay: ${payment}</h6>
        <button type="submit">Continue</button>
      </form>
      </nav>
    </div>
  );
};

export default Navbar;
