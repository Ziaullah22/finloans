// Footer.js or Header.js
import React, { useState } from 'react';
import './Footer.css';

const Header = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    fetch('http://localhost:5000/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    })
      .then(response => response.text())
      .then(result => alert('Subscription successful'))
      .catch(error => alert('Error subscribing'));
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo">
          <img src="\images\footer_logo.png.webp" alt="Logo" />
        </div>
      </div>

      <div className="links-section">
        <div className="services">
          <h3>Services</h3>
          <ul>
            <li>SEO/SEM</li>
            <li>Web Design</li>
            <li>Ecommerce</li>
            <li>Digital Marketing</li>
          </ul>
        </div>
        <div className="useful-links">
          <h3>Useful Links</h3>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Support</li>
          </ul>
        </div>
        <div className="subscribe">
          <h3>Subscribe</h3>
          <input 
            type="email" 
            placeholder="Enter your mail" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <button onClick={handleSubscribe}>Subscribe</button>
          <p>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
        </div>
      </div>

      <div className="contact-info">
        <p>Email: <a href="mailto:finloan@support.com">finloan@support.com</a></p>
        <p>Phone: +10 873 672 6782</p>
        <p>Address: 600/D, Green road, NewYork</p>
      </div>

      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-linkedin-in"></i></a>
      </div>

      <div className="footer">
        <p>Copyright ©2024 All rights reserved | This template is made with <span>❤</span> by Colorlib</p>
      </div>
    </header>
  );
}

export default Header;
