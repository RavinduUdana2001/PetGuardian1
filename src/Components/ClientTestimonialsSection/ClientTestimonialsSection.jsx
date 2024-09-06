import React from 'react';
import './ClientTestimonialsSection.css'; 

function ClientTestimonialsSection() {
  return (
    <div className="testimonials-section text-center py-5 my-5" style={{ backgroundColor: '#f7f7f7' }}>
      <h2 className="testimonials-title">What Our Clients Say</h2>
      <div className="container">
        <div className="row">
          
          <div className="col-md-4 mb-4">
            <div className="testimonial-card p-4">
              <p className="testimonial-text">
                "Pet Guardians has completely transformed our dog's behavior. The training methods are effective and the staff is incredibly supportive."
              </p>
              <p className="testimonial-author">- Jessica S.</p>
            </div>
          </div>

          
          <div className="col-md-4 mb-4">
            <div className="testimonial-card p-4">
              <p className="testimonial-text">
                "Excellent service and caring trainers. Our puppy has learned so much and we couldn't be happier with the results."
              </p>
              <p className="testimonial-author">- Michael T.</p>
            </div>
          </div>

       
          <div className="col-md-4 mb-4">
            <div className="testimonial-card p-4">
              <p className="testimonial-text">
                "The best investment we made for our dog's training. Highly recommend Pet Guardians for anyone looking for professional and caring service."
              </p>
              <p className="testimonial-author">- Emma L.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientTestimonialsSection;
