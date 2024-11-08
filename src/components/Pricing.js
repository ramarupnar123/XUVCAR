import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/Pricing.css';

const pricingData = [
  {
    variantName: "XUV700 MX",
    details: "1999 cc, Manual, Petrol",
    price: "Rs.13.18 Lakh*",
    waitingPeriod: "More than 2 months waiting",
    type: "Petrol"
  },
  {
    variantName: "XUV700 MX Diesel",
    details: "2198 cc, Manual, Diesel",
    price: "Rs.13.70 Lakh*",
    waitingPeriod: "More than 2 months waiting",
    type: "Diesel"
  },
  {
    variantName: "XUV700 AX3",
    details: "1999 cc, Manual, Petrol",
    price: "Rs.15.28 Lakh*",
    waitingPeriod: "More than 2 months waiting",
    type: "Petrol"
  },
  {
    variantName: "XUV700 AX3 Automatic",
    details: "1999 cc, Automatic, Petrol",
    price: "Rs.16.50 Lakh*",
    waitingPeriod: "More than 2 months waiting",
    type: "Automatic"
  },
  {
    variantName: "XUV700 AX5 Diesel",
    details: "2198 cc, Automatic, Diesel",
    price: "Rs.18.90 Lakh*",
    waitingPeriod: "More than 2 months waiting",
    type: "Diesel"
  }
];

function Pricing() {
  const [visibleItems, setVisibleItems] = useState(3);
  const [selectedVariant, setSelectedVariant] = useState("All");
  const [modalData, setModalData] = useState(null); 
  const [showModal, setShowModal] = useState(false); 

  const filteredData = pricingData.filter(item =>
    selectedVariant === "All" || item.type === selectedVariant
  );

  const handleViewMore = () => {
    setVisibleItems(prevVisibleItems => prevVisibleItems + 3);
  };

  const handleViewOffersClick = (item) => {
    setModalData(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalData(null);
  };

  return (
    <section className="pricing-section text-light py-5" id="pricing">
      <div className="container">
        <h2 className="text-start mb-4">Pricing</h2>

        <div className="variant-tabs d-flex justify-content-start mb-3">
          <span 
            className={`variant-tab ${selectedVariant === "All" ? "active" : ""}`} 
            onClick={() => setSelectedVariant("All")}
          >All Variants</span>
          <span 
            className={`variant-tab ${selectedVariant === "Diesel" ? "active" : ""}`} 
            onClick={() => setSelectedVariant("Diesel")}
          >Diesel Version</span>
          <span 
            className={`variant-tab ${selectedVariant === "Petrol" ? "active" : ""}`} 
            onClick={() => setSelectedVariant("Petrol")}
          >Petrol Version</span>
          <span 
            className={`variant-tab ${selectedVariant === "Automatic" ? "active" : ""}`} 
            onClick={() => setSelectedVariant("Automatic")}
          >Automatic Version</span>
        </div>

        <div className="pricing-table">
          <div className="pricing-header d-flex justify-content-between">
            <span className="header-title">Variant</span>
            <span className="header-title">Price</span>
          </div>
          {filteredData.slice(0, visibleItems).map((item, index) => (
            <div key={index} className="pricing-row d-flex justify-content-between align-items-center">
              <div>
                <h6 className="variant-name">{item.variantName}</h6>
                <p className="variant-details">
                  {item.details} <br />
                  {item.waitingPeriod}
                </p>
              </div>
              <div className="text-end">
                <span className="price">{item.price}</span>
                <p className="on-road-price">Get On Road Price*</p>
              </div>
              <button className="btn btn-outline-warning view-offer-btn" onClick={() => handleViewOffersClick(item)}>
                View Offers
              </button>
            </div>
          ))}
        </div>


        {visibleItems < filteredData.length && (
          <div className="text-end mt-3">
            <button onClick={handleViewMore} className="btn btn-outline-warning view-offer-btn">View More ▼</button>
          </div>
        )}


        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>{modalData?.variantName}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p><strong>Details:</strong> {modalData?.details}</p>
            <p><strong>Price:</strong> {modalData?.price}</p>
            <p><strong>Waiting Period:</strong> {modalData?.waitingPeriod}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </section>
  );
}

export default Pricing;
