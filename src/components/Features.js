import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/Features.css';

function Features() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);

  const handleCloseModal = () => setShowModal(false);

  return (
    <section className="features-section text-light py-5" id="features">
      <div className="container">
        <div className="row">
          <div className='col-md-4'>
            <h2 className="feature-title mt-4">Mahindra XUV <br />700</h2>
            <div className="d-flex mb-3">
              <div className="star-rating me-2">
                <span className="text-warning">★★★★★</span>
              </div>
              <span className="text-muted">108 Reviews</span>
            </div>
            <h3 className="text-primary price-range">Rs.13.18 - 24.58 Lakh</h3>
          </div>

          <div className="col-md-8">
            <div className='container'>
              <div className='row'>
                <div className="col-md-12 row mt-4">
                  <div className="col-4 mb-3 d-flex feature-item">
                    <img src="images/vector.png" alt="Engine" className="feature-image mb-2" />
                    <div className="feature-text">
                      <h6 className="feature-label">Engine</h6>
                      <p className="feature-details">1997 to 2184 cc</p>
                    </div>
                  </div>
                  <div className="col-4 mb-3 d-flex feature-item">
                    <img src="images/vector1.png" alt="Safety" className="feature-image mb-2" />
                    <div>
                      <h6 className="feature-label">Safety</h6>
                      <p className="feature-details">5 Star (Global NCAP)</p>
                    </div>
                  </div>
                  <div className="col-4 mb-3 d-flex feature-item">
                    <img src="images/vector2.png" alt="Body Type" className="feature-image mb-2" />
                    <div>
                      <h6 className="feature-label">Body Type</h6>
                      <p className="feature-details">SUV</p>
                    </div>
                  </div>
                  <div className="col-4 mb-3 d-flex feature-item">
                    <img src="images/vector3.png" alt="Transmission" className="feature-image mb-2" />
                    <div>
                      <h6 className="feature-label">Transmission</h6>
                      <p className="feature-details">Manual & Automatic (TC)</p>
                    </div>
                  </div>
                  <div className="col-4 mb-3 d-flex feature-item">
                    <img src="images/vector4.png" alt="Seating Capacity" className="feature-image mb-2" />
                    <div>
                      <h6 className="feature-label">Seating Capacity</h6>
                      <p className="feature-details">5 & 7 Seater</p>
                    </div>
                  </div>
                  <div className="col-4 mb-3 d-flex feature-item">
                    <img src="images/vector5.png" alt="Fuel Type" className="feature-image mb-2" />
                    <div>
                      <h6 className="feature-label">Fuel Type</h6>
                      <p className="feature-details">Petrol & Diesel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="row mt-5">
          <div className="col-md-6 text-center">
            <img src="images/img2.png" alt="XUV 700 Front" className="img-fluid secondary-car-image" />
          </div>
          <div className="col-md-6">
            <p className="price-description">
              The Mahindra XUV700 has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 2198 cc while the Petrol engine is 1999 cc. It is available with Automatic & Manual transmission. Depending upon the variant and fuel type the XUV700 has a mileage of . The XUV700 is a 7 seater 4 cylinder car and has length of 4695, width of 1890 and a wheelbase of 2750.
            </p>
            <button className="offer-button" onClick={handleShowModal}>Check Current Offers</button>
          </div>
        </div>


        <div className="row mt-5">
          <div className="col-md-6">
            <h3 className="price-title">Mahindra XUV700 Price</h3>
            <p className="price-description">
              The price of Mahindra XUV700 starts at Rs. 13.18 Lakh and goes up to Rs. 24.58 Lakh. Mahindra XUV700 is offered in 23 variants - the base model of XUV700 is MX and the top variant Mahindra XUV700 AX7 Diesel AT Luxury Pack AWD which comes at a price tag of Rs. 24.58 Lakh.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img src="images/img2.png" alt="XUV 700 Front" className="img-fluid secondary-car-image" />
          </div>
        </div>

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Special Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <img src="images/img2.png" alt="XUV 700 Front" className="img-fluid mb-3" />
            </div>
            <p className="offer-note">
              <strong>Note:</strong> Government and corporate employees have a 30% discount on the on-road price.
            </p>
            <p className="terms-conditions">
              * Terms and conditions apply.
              <br />
              * The discount is applicable only for eligible employees with valid ID.
              <br />
              * This offer is valid until the end of the month.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
}

export default Features;
