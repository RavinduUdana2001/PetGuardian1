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
          <h2 className="mb-4">Join Our Pet Guardians Family</h2>
          <p className="lead mb-3">
            At Pet Guardians, your pet’s well-being is at the heart of everything we do. Whether you're looking for expert advice, premium products, or services tailored to your furry friend’s needs, we’ve got you covered.
          </p>
          <p className="mb-4">
            Our community of pet lovers is growing every day, and we invite you to be part of this journey. Explore our comprehensive resources and let us help you provide the best care for your pets—because they deserve nothing less.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default DescriptionSection;
