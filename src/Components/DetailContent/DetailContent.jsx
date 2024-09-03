import React from 'react';
import { FaPaw, FaDog, FaCat, FaArrowRight } from 'react-icons/fa'; // Import Font Awesome icons

function DetailContent() {
  return (
    <div className="container mt-5" id="featured-3">
      <h2 className="pb-2  border-bottom text-center">Our Features</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-md-3 justify-content-center">
        <div className="feature col d-flex flex-column align-items-center mb-4">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-white bg-primary fs-3 mb-3 p-3 rounded-circle">
            <FaPaw />
          </div>
          <h3 className="fs-3 text-center text-primary">Pet Care</h3>
          <p className="text-center">Comprehensive care tips and advice for all kinds of pets. Ensure your furry friends are happy and healthy.</p>
          <a href="#" className="icon-link text-primary">
            Learn More
            <FaArrowRight className="ms-2" />
          </a>
        </div>
        <div className="feature col d-flex flex-column align-items-center mb-4">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-white bg-success fs-3 mb-3 p-3 rounded-circle">
            <FaDog />
          </div>
          <h3 className="fs-3 text-center text-success">Dog Training</h3>
          <p className="text-center">Expert training tips and techniques to help you build a strong bond with your canine companion.</p>
          <a href="#" className="icon-link text-success">
            Learn More
            <FaArrowRight className="ms-2" />
          </a>
        </div>
        <div className="feature col d-flex flex-column align-items-center ">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-white bg-warning fs-3 mb-3 p-3 rounded-circle">
            <FaCat />
          </div>
          <h3 className="fs-3 text-center text-warning">Cat Care</h3>
          <p className="text-center">Everything you need to know about keeping your feline friends healthy, happy, and well-cared-for.</p>
          <a href="#" className="icon-link text-warning">
            Learn More
            <FaArrowRight className="ms-2" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default DetailContent;
