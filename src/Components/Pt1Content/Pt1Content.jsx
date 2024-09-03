import React from 'react';
import './Pt1Content.css';

function Pt1Content() {
  return (
    <div className="container-fluid background-container">
      <div className="row align-items-center h-100">
        <div className='col-lg-7 d-none d-lg-block'>
          {/* Optional: Add content or images for the left side on large screens */}
        </div>
        <div className='col-lg-5 text-center text-lg-start'>
          <div className="text-content">
            <h1 className="display-4 fw-bold mb-4">Train Your Pet</h1>
            <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum nam enim repudiandae, delectus libero ipsum et obcaecati odio quisquam officia similique? Atque inventore perspiciatis ex ratione rerum nulla eum eos.</p>
          </div>
        </div>
      </div>
      <div className="wave">
        <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,64L48,58.7C96,53,192,43,288,32C384,21,480,9,576,9.3C672,9,768,21,864,32C960,43,1056,53,1152,58.7C1248,64,1344,64,1392,64H1440V150H1392C1344,150,1248,150,1152,150C1056,150,960,150,864,150C768,150,672,150,576,150C480,150,384,150,288,150C192,150,96,150,48,150L0,150Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default Pt1Content;
