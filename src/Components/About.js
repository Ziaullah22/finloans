import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-section">
      <div className="row">
        <div className="col picture-column">
          <img src="\images\about.png.webp" alt="About Us" className="about-image" />
        </div>
        <div className="col text-column">
          <h2 className="about-heading">Why Choose Us?</h2>
          <p className="about-paragraph">
            Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable.
          </p>
          <ul className="about-list">
            <li>Loans with quick approval.</li>
            <li>Customize a loan based on the amount.</li>
            <li>Good credit profile and you have built your loan.</li>
            <li>We provide online instant cash loans.</li>
          </ul>
          <a href="/"><button className="about-button">About Us</button></a>
        </div>
      </div>
    </div>
  );
};

export default About;
