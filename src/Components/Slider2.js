import React, { useState, useEffect } from 'react';
import './Slider2.css';

const Slider2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    '/images/Slider1.png.webp',
    '/images/Slider2.png.webp',
    '/images/Slider3.png.webp',
    '/images/Slider4.png.webp',
    '/images/Slider5.png.webp',
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timeoutId);
  }, [currentIndex]);

  return (
    <div>
      <div className="slider">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} style={{
            transform: `translateX(${(index - currentIndex) * 100}%)`
          }} />
        ))}
      </div>

      {/* New Section */}
      <section className="background-section">
        <div className="content">
          <h1>Apply for a Loan for your startup, education or company</h1>
          <button className="apply-button">Apply Now</button>
        </div>
      </section>
    </div>
  );
};

export default Slider2;
