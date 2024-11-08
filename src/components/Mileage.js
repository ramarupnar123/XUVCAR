import React from 'react';
import '../styles/Mileage.css';

function Mileage() {
  return (
    <section className="mileage-section text-light py-5" id="mileage">
      <div className="container">
        <h2 className="mileage-title">Mahindra XUV700 Mileage</h2>
        <p className="mileage-subtitle">
          The claimed ARAI mileage:<br />
          The claimed ARAI mileage for the automatic variants:
        </p>

        <div className="mileage-table">
          <div className="mileage-header d-flex justify-content-between">
            <span className="header-title">Fuel Type</span>
            <span className="header-title">Transmission</span>
            <span className="header-title">ARAI Mileage</span>
            <span className="header-title">City Mileage</span>
          </div>

          <div className="mileage-row d-flex justify-content-between align-items-center">
            <span className="mileage-cell">Diesel</span>
            <span className="mileage-cell">Manual</span>
            <span className="mileage-cell">15.0 kmpl</span>
            <span className="mileage-cell">17.0 kmpl</span>
          </div>

          <div className="mileage-row d-flex justify-content-between align-items-center">
            <span className="mileage-cell">Diesel</span>
            <span className="mileage-cell">Automatic</span>
            <span className="mileage-cell">17.19 kmpl</span>
            <span className="mileage-cell">16.57 kmpl</span>
          </div>

          <div className="mileage-row d-flex justify-content-between align-items-center">
            <span className="mileage-cell">Petrol</span>
            <span className="mileage-cell">Manual</span>
            <span className="mileage-cell">13.0 kmpl</span>
            <span className="mileage-cell">15.0 kmpl</span>
          </div>

          <div className="mileage-row d-flex justify-content-between align-items-center">
            <span className="mileage-cell">Petrol</span>
            <span className="mileage-cell">Automatic</span>
            <span className="mileage-cell">11.0 kmpl</span>
            <span className="mileage-cell">13.0 kmpl</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mileage;
