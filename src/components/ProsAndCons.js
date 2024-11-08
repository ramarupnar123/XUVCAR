import React from 'react';
import '../styles/ProsAndCons.css';

function ProsAndCons() {
  return (
    <section className="pros-and-cons-section text-light py-5">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-md-5 text-center">
            <img src="images/img3.png" alt="XUV 700 Front" className="img-fluid pros-cons-image" />
          </div>

          <div className="col-md-7">
            <h2 className="pros-cons-title font-weight-bold">Pros <span>and</span> Cons</h2>
            <h3 className="pros-cons-subtitle">Take on Mahindra XUV700</h3>
            <p className="pros-cons-description">
              If you are in the market looking for any kind of SUV for your family, the <strong>XUV700</strong> first gets all the basics right and then impresses you with its segment-first features.
            </p>
          </div>
        </div>



        <hr className="divider" />
        <div className="row align-items-center">
          <div className="col-md-5 text-center">
          <h4 className="pros-title">Absolutely Amazing</h4>
          </div>


          <div className="col-md-7">
          <ul className="pros-list">
          <li>Road presence - Sheer size with a commanding stance and loads of visual appeal</li>
          <li>Airy cabin - More spacious than the Alcazar and almost as roomy as the Safari</li>
          <li>Capable powertrains - The powertrain options effortlessly power the bulky XUV700</li>
          <li>Unique feel-good features - It offers a range of feel-good features missing from rivals</li>
        </ul>
          </div>
        </div>
        <hr className="divider" />
        <div className="row align-items-center mt-5">

          <div className="col-md-5 text-center">
          <h4 className="cons-title">Could have been Better</h4>
          </div>

          <div className="col-md-7">
          <ul className="pros-list">
          <li>Road presence - Sheer size with a commanding stance and loads of visual appeal</li>
          <li>Airy cabin - More spacious than the Alcazar and almost as roomy as the Safari</li>
          <li>Capable powertrains - The powertrain options effortlessly power the bulky XUV700</li>
          <li>Unique feel-good features - It offers a range of feel-good features missing from rivals</li>
        </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProsAndCons;
