// src/components/Work2.js
import React, { useState } from 'react';
import './Work2.css'; // External CSS file for styling

const Work2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    { question: 'What is the process of taking a loan?', answer: 'Taking a loan involves assessing your needs, choosing the right loan, applying with necessary documents, and then receiving funds. Adhere to the repayment schedule provided by the lender.'},
    { question: 'What are the requirements for a loan?', answer: 'Common requirements include a good credit score, stable income, and a low debt-to-income ratio. Proof of employment and financial statements may also be needed.'},
    { question: 'How long does it take to get approved?', answer: 'Approval time varies. Personal loans might be approved within a few hours to days, while mortgages or auto loans could take weeks due to more thorough processes.'},
    { question: 'What are the repayment terms?', answer: 'Repayment terms include the loan term, interest rate, and payment frequency. They may also involve fees, penalties for early repayment, and default conditions.'}
  ];

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="work2">
      <div className="row">
        <div className="column picture">
          <img src="\images\about.png.webp" alt="Description" />
        </div>
        <div className="column text">
          <h2>Frequently Asked Questions</h2>
          {questions.map((item, index) => (
            <div key={index} className="faq-item">
              <div className="question" onClick={() => handleToggle(index)}>
                {item.question}
                <span className="arrow">
                  {activeIndex === index ? '▲' : '▼'}
                </span>
              </div>
              <div
                className={`answer ${activeIndex === index ? 'show' : ''}`}
              >
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work2;
