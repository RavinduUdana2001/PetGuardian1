import React from 'react';
import './AboutTopSection.css'; // Ensure this CSS file contains relevant styles

function AboutTopSection() {
  return (
    <div className="about-top-section text-center py-5 mt-5">
      <div className="container">
        <h1 className="about-title fs-1 mt-5 mt-lg-0">About Us</h1>
        <p className="about-description " style={{fontSize:'20px'}}>
          At Pet Guardians, we are dedicated to providing exceptional pet care through a combination of expert advice, high-quality products, and personalized services. Our team of passionate professionals is committed to making a positive impact on the lives of pets and their owners.
        </p>
      </div>
    </div>
  );
}

export default AboutTopSection;
