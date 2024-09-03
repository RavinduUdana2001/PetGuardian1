import React from 'react';
import { FaPaw, FaDog, FaCat, FaHeart, FaBone } from 'react-icons/fa';
import './PetCategories.css'; // Make sure to import the CSS file

function PetCategories() {
  return (
    <div className="container-fluid px-4 py-5 mb-5" id="pet-categories">
      <h2 className="pb-2 border-bottom text-center text-primary">Explore Our Pet Services</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-md-3 justify-content-center">
        <div className="col d-flex flex-column align-items-center text-center">
          <div className="icon-container bg-info text-white p-3 rounded-circle mb-3">
            <FaPaw className="fs-3" />
          </div>
          <h3 className="fs-4 text-primary">Pet Care</h3>
          <p>Find expert tips and resources to ensure your pets stay healthy and happy.</p>
          <a href="#" className="btn btn-primary">Learn More</a>
        </div>
        <div className="col d-flex flex-column align-items-center text-center">
          <div className="icon-container bg-success text-white p-3 rounded-circle mb-3">
            <FaDog className="fs-3" />
          </div>
          <h3 className="fs-4 text-success">Dog Training</h3>
          <p>Get training guides and advice to help your dog become well-behaved and happy.</p>
          <a href="#" className="btn btn-success">Learn More</a>
        </div>
        <div className="col d-flex flex-column align-items-center text-center">
          <div className="icon-container bg-warning text-white p-3 rounded-circle mb-3">
            <FaCat className="fs-3" />
          </div>
          <h3 className="fs-4 text-warning">Cat Care</h3>
          <p>Discover everything you need to know to keep your feline friends healthy and content.</p>
          <a href="#" className="btn btn-warning">Learn More</a>
        </div>
        <div className="col d-flex flex-column align-items-center text-center">
          <div className="icon-container bg-danger text-white p-3 rounded-circle mb-3 mt-5">
            <FaHeart className="fs-3" />
          </div>
          <h3 className="fs-4 text-danger">Adoption Services</h3>
          <p>Find your new furry friend and give them a loving home with our adoption services.</p>
          <a href="#" className="btn btn-danger">Learn More</a>
        </div>
        <div className="col d-flex flex-column align-items-center text-center ">
          <div className="icon-container bg-dark text-white p-3 rounded-circle mb-3 mt-5">
            <FaBone className="fs-3" />
          </div>
          <h3 className="fs-4 text-dark">Pet Accessories</h3>
          <p>Browse our range of pet accessories and find everything you need for your pets.</p>
          <a href="#" className="btn btn-dark">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default PetCategories;
