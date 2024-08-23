import React from 'react';
import './Work.css';

const Working = () => {
  const steps = [
    {
      number: 1,
      title: 'Apply for Loan',
      description: 'We will customize a loan based on the amount of cash your company needs and the term.'
    },
    {
      number: 2,
      title: 'Get Approval',
      description: 'Receive quick approval within minutes, ensuring that your cash needs are met efficiently.'
    },
    {
      number: 3,
      title: 'Receive Funds',
      description: 'Once approved, funds are transferred instantly, allowing you to focus on your business.'
    }
  ];

  return (
    <div className="working-container">
      <h1 className="working-title">
        How it <span className="working-underline">Works</span>
      </h1>
      <p className="working-description">
        We provide online instant cash loans with quick approval that suit your term.
      </p>
      <div className="working-row">
        {steps.map((step) => (
          <div key={step.number} className="working-column">
            <div className="working-number-circle">{step.number}</div>
            <h4 className="working-heading">{step.title}</h4>
            <p className="working-text">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Working;
