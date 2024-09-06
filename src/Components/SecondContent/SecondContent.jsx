import React from 'react';
import imge from '../../assets/55.jpg';

function SecondContent() {
  return (
    <div>
      <div className="container-fluid col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={imge}
              className="d-block mx-lg-auto img-fluid align-items-center"
              alt="Pet Care"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Welcome to Pet Guardian
            </h1>
            <p className="lead">
              At our pet care center, we believe in providing the best care for your beloved pets. 
              Whether it's grooming, medical checkups, or daily care advice, we ensure your pets stay 
              happy and healthy. Our services are designed with your pets’ well-being in mind, 
              offering personalized care based on their unique needs.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button type="button" className="btn btn-secondary btn-lg px-4">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondContent;
