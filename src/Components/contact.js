import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Get in Touch</h2>
      <div className="contact-content">
        <form className="contact-form">
          <div className="form-group">
            <textarea className="form-textarea" placeholder="Enter Message" />
          </div>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <input type="email" className="form-input" placeholder="Enter email address" />
          </div>
          <div className="form-group">
            <input type="text" className="form-input" placeholder="Enter Subject" />
          </div>
          <button type="submit" className="form-button">Send Message</button>
        </form>
        <div className="contact-details">
          <h3 className="contact-info">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            Buttonwood, California
          </h3>
          <p className="contact-description">Rosemead, CA 91770</p>
          
          <h3 className="contact-info">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            00 (440) 9865 562
          </h3>
          <p className="contact-description">Mon to Fri 9am to 6pm</p>
          
          <h3 className="contact-info">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <a href="mailto:support@colorlib.com" className="contact-link">support@colorlib.com</a>
          </h3>
          <p className="contact-description">Send us your query anytime!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
