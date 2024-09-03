import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderContent.css'; // Import the CSS file

function HeaderContent() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: '#f8d254', height: 'auto' }}>
        <div className="container">
          <Link className="navbar-brand text-start" to="/">Navbar scroll</Link>
          <button className="navbar-toggler text-start" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse scrollable-navbar" id="navbarScroll">
            <ul className="navbar-nav ms-auto my-2 my-lg-0" style={{ fontSize: '17px' }}>
              <li className="nav-item">
                <Link className="nav-link ms-0 ms-lg-5 fw-semi-bold" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-0 ms-lg-5 fw-semi-bold" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-0 ms-lg-5 fw-semi-bold" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-0 ms-lg-5 fw-semi-bold" to="/pet-training">Pet Training</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ms-0 ms-lg-5 fw-semi-bold" to="/channel-your-pet">Channel Your Pet</Link>
              </li>
              <li className="nav-item dropdown d-none d-lg-block">
                <Link className="nav-link dropdown-toggle ms-0 ms-lg-5 fw-semi-bold" to="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Link
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                  <li><Link className="dropdown-item" to="#">Action</Link></li>
                  <li><Link className="dropdown-item" to="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
            </ul>
            <Link to="/login" style={{textDecoration:'none'}}>
              <button className="btn btn-primary d-none d-lg-block ms-0 ms-lg-5">Login | SignUp</button>
            </Link>
          </div>
        </div>

        <div className='ms-3 mt-3 d-lg-none'>
          <div className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Link
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
              <li><Link className="dropdown-item" to="#">Action</Link></li>
              <li><Link className="dropdown-item" to="#">Another action</Link></li>
              <li><hr className="dropdown-divider" /></li>
              <li><Link className="dropdown-item" to="#">Something else here</Link></li>
            </ul>
          </div>
        </div>
        <Link to="/login" className=''>
          <button className="btn btn-primary d-flex d-lg-none me-2 mt-3" >Login | SignUp</button>
        </Link>
      </nav>
    </>
  );
}

export default HeaderContent;
