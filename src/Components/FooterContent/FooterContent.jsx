import React from 'react';
import './FooterContent.css'; // Ensure this CSS file contains relevant styles

function FooterContent() {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#f1f1f1' }}>
      <footer className="py-5">
        <div className="row">
          {/* Company Info */}
          <div className="col-12 col-md-4 mb-3">
            <h5>About Pet Guardians</h5>
            <p>
              Pet Guardians is dedicated to providing expert pet care advice, high-quality products, and exceptional services for pet owners. We strive to make your pet's health and happiness our top priority.
            </p>
          </div>

          {/* Newsletter Subscription */}
          <div className="col-12 col-md-4 mb-3">
            <h5>Stay Connected</h5>
            <p>Sign up for our newsletter to receive the latest updates on products, services, and special offers.</p>
            <form>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <input
                  id="newsletter1"
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
                <button className="btn btn-primary" type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>
              Pet Guardians <br />
              123 Pet Lane, Pet City, PC 12345 <br />
              Email: info@petguardians.com <br />
              Phone: (123) 456-7890
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-right py-4 border-top">
          <p>© 2024 Pet Guardians, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-dark" href="#">
                <i className="bi bi-twitter"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-dark" href="#">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default FooterContent;
