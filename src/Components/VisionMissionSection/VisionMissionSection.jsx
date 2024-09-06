import React from 'react';
import { FaEye, FaBullhorn } from 'react-icons/fa'; // Importing icons from react-icons
import './VisionMissionSection.css'; // Ensure this CSS file contains relevant styles

function VisionMissionSection() {
  return (
    <div className="vision-mission-section container text-center my-5 py-5">
      <div className="row">
        {/* Vision */}
        <div className="col-md-6 mb-4">
          <div className="icon-container">
            <FaEye className="icon vision-icon" />
          </div>
          <h3 className="section-title">Our Vision</h3>
          <p className="section-description">
            To be the leading provider of innovative pet care solutions, setting new standards for pet health and happiness worldwide.
          </p>
        </div>

        {/* Mission */}
        <div className="col-md-6 mb-4">
          <div className="icon-container">
            <FaBullhorn className="icon mission-icon" />
          </div>
          <h3 className="section-title">Our Mission</h3>
          <p className="section-description">
            To deliver exceptional pet care services with a focus on quality, compassion, and customer satisfaction, ensuring every pet has a chance to thrive.
          </p>
        </div>
      </div>
    </div>
  );
}

export default VisionMissionSection;
