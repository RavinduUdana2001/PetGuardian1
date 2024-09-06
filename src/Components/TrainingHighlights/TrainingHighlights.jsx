import React from 'react';
import './TrainingHighlights.css'; // Ensure you have the appropriate CSS file

function TrainingHighlights() {
  return (
    <section className="training-highlights py-5">
      <div className="container text-center">
        <h2 className="display-4 fw-bold mb-4">Why Choose Our Training?</h2>
        <p className="lead mb-5">
          Our training programs are designed to make a difference. Here’s why we stand out:
        </p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="highlight-card bg-light p-4 rounded shadow-sm">
              <h3 className="fs-4 mb-3">Expert Trainers</h3>
              <p>Our trainers are highly experienced and passionate about pet behavior. They use proven methods to ensure effective training.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="highlight-card bg-light p-4 rounded shadow-sm">
              <h3 className="fs-4 mb-3">Customized Plans</h3>
              <p>We offer personalized training plans tailored to your pet’s needs, ensuring they get the most out of each session.</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="highlight-card bg-light p-4 rounded shadow-sm">
              <h3 className="fs-4 mb-3">Positive Reinforcement</h3>
              <p>Our training focuses on positive reinforcement techniques that encourage good behavior and build a strong bond with your pet.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrainingHighlights;
