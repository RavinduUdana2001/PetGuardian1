import React from 'react';
import './Testimonials.css'; // Ensure you have the appropriate CSS file

function Testimonials() {
  return (
    <section className="testimonials-section py-5">
      <div className="container">
        <h2 className="testimonials-title text-center display-4 fw-bold mb-4">What Our Clients Say</h2>
        <p className="testimonials-intro text-center lead mb-5">
          Hear from those who have experienced our pet training first-hand.
        </p>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="testimonial-card text-center p-4 border rounded">
              <div className="testimonial-icon mb-3">
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="testimonial-text mb-3">
                "Our dog has improved so much thanks to the training program. Highly recommend!"
              </p>
              <h5 className="testimonial-name">Laura Smith</h5>
              <p className="testimonial-role">Pet Owner</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="testimonial-card text-center p-4 border rounded">
              <div className="testimonial-icon mb-3">
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="testimonial-text mb-3">
                "Excellent training that made a real difference. My cat is much more relaxed."
              </p>
              <h5 className="testimonial-name">Michael Johnson</h5>
              <p className="testimonial-role">Cat Enthusiast</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="testimonial-card text-center p-4 border rounded">
              <div className="testimonial-icon mb-3">
                <i className="bi bi-star-fill"></i>
              </div>
              <p className="testimonial-text mb-3">
                "Fantastic results! Our puppy is well-behaved and enjoys training sessions."
              </p>
              <h5 className="testimonial-name">Emma Davis</h5>
              <p className="testimonial-role">Puppy Parent</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
