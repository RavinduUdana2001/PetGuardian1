import React from 'react';
import './BodyContent.css';
import img from '../../assets/22.jpg';
import img1 from '../../assets/33.jpg';
import img2 from '../../assets/44.jpg';

function BodyContent() {
  return (
    <div className="body-content" style={{ backgroundColor: '',  }}>
      <div className="container " style={{ padding: '0', fontFamily: 'Arial, sans-serif' }}>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000"> 
          <div className="carousel-inner">
            <div className="carousel-item active"  >
              <img src={img} className="d-block w-100 carousel-image" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img1} className="d-block w-100 carousel-image" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100 carousel-image" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BodyContent;
