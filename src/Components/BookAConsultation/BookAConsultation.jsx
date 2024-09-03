import React from 'react';
import './BookAConsultation.css';

function BookAConsultation() {
  return (
    <section className="consultation-section">
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-md-6 text-light">
            <h2 className="mb-4">Consult Our Expert Vets</h2>
            <p className="lead mb-4">
              Our dedicated veterinarians are here to provide top-notch care and advice for your beloved pets. Schedule a consultation to receive expert guidance and personalized treatment.
            </p>
            <a href="#booking-form" className="btn btn-light btn-lg">Book Your Consultation</a>
          </div>
          <div className="col-md-6 text-light">
            <div className="cta-container">
              <h3 className="cta-title">Why Choose Us?</h3>
              <ul className="cta-list">
                <li>Expert and compassionate care</li>
                <li>Personalized treatment plans</li>
                <li>Convenient online booking</li>
                <li>Dedicated support for your pets</li>
              </ul>
              <p className="cta-text">
                Book a consultation today and experience the difference in pet care. Our team is here to assist you with all your veterinary needs.
              </p>
            </div>
          </div>
        </div>
        <div id="booking-form" className="mt-5">
          <h3 className="mb-4 text-light">Schedule Your Appointment</h3>
          <form className="consultation-form">
            <div className="row">
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Full Name" required />
              </div>
              <div className="col-md-6 mb-3">
                <input type="email" className="form-control" placeholder="Email Address" required />
              </div>
              <div className="col-md-6 mb-3">
                <input type="tel" className="form-control" placeholder="Phone Number" required />
              </div>
              <div className="col-md-6 mb-3">
                <input type="text" className="form-control" placeholder="Pet’s Name" required />
              </div>
              <div className="col-md-12 mb-3">
                <textarea className="form-control" placeholder="Brief Description of Your Concern" rows="4" required></textarea>
              </div>
              <div className="col-md-12">
                <button type="submit" className="btn btn-primary btn-lg">Submit Request</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default BookAConsultation;
