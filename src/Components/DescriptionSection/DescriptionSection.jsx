import React from 'react';
import './DescriptionSection.css';
import descriptionImage from '../../assets/66.jpg';

function DescriptionSection() {
  return (
    <div className="description-area container text-center my-5 mb-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={descriptionImage} alt="Pet Guardians" className="img-fluid rounded shadow mb-4" />
        </div>
        <div className="col-md-6">
          <h2 className="mb-4">Welcome to Pet Guardians</h2>
          <p className="lead mb-3">
            At Pet Guardians, we are passionate about ensuring your pets live their happiest and healthiest lives. Our extensive range of services and products is designed to cater to every aspect of pet care, from nutrition to training.
          </p>
    
          <p className="mb-4">
            Dive into our site to find valuable resources, shop for the best products, and learn how we can support your journey as a pet owner. We're here to make pet care enjoyable and stress-free.
          </p>
          <a href="#services" className="btn btn-primary">Discover Our Services</a>
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
