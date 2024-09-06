import React from 'react';
import { FaTrophy, FaStar, FaHandsHelping } from 'react-icons/fa'; // Importing icons from react-icons
import './AchievementsValuesSection.css'; // Ensure this CSS file contains relevant styles

function AchievementsValuesSection() {
  return (
    <div className="achievements-container container text-center my-5 py-5">
      <h2 className="achievements-header">Our Achievements & Values</h2>
      <div className="row achievements-row">
        {/* Achievement 1 */}
        <div className="col-md-4 mb-4">
          <div className="achievements-icon-container">
            <FaTrophy className="achievements-icon" />
          </div>
          <h3 className="achievements-title">Award-Winning Service</h3>
          <p className="achievements-description">
            Recognized for excellence in pet care services with numerous industry awards.
          </p>
        </div>

        {/* Achievement 2 */}
        <div className="col-md-4 mb-4">
          <div className="achievements-icon-container">
            <FaStar className="achievements-icon" />
          </div>
          <h3 className="achievements-title">5-Star Ratings</h3>
          <p className="achievements-description">
            Consistently rated 5 stars by our satisfied customers for top-notch care and service.
          </p>
        </div>

        {/* Achievement 3 */}
        <div className="col-md-4 mb-4">
          <div className="achievements-icon-container">
            <FaHandsHelping className="achievements-icon" />
          </div>
          <h3 className="achievements-title">Community Support</h3>
          <p className="achievements-description">
            Actively involved in community outreach programs and supporting local pet shelters.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AchievementsValuesSection;
