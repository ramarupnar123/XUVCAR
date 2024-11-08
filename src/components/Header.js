import React from 'react';
import './styles/Header.css';

function Header() {
  return (
    <header className="header text-center">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-12 mt-5">
            <img
              src="images/XUV.png"
              alt="XUV 700 Logo"
              className="img-fluid xuv-logo"
            />
          </div>
        </div>
        

        <div className="row justify-content-center position-absolute">
          <div className="col-12 col-md-8">
            <img
              src="images/mainImg.png"
              alt="XUV 700 Car"
              className="img-fluid main-car-image"
            />
          </div>
        </div>
        

        <div className="row justify-content-center position-relative tagline-section">
          <div className="col-12 col-md-8">
            <p className="tagline">
              With its Sci-Fi Technology, Spirited Performance,<br></br> and World-Class Safety,
              this powerhouse of an SUV is obsessively <br></br>engineered to dial up adrenaline
              like never before.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
