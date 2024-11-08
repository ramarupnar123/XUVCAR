import React, { useState } from 'react';
import '../styles/ExpertAdvice.css';

function ExpertAdvice() {
  const [activeTab, setActiveTab] = useState('Exterior');
  const [showMoreContent, setShowMoreContent] = useState(false);
  const renderContent = () => {
    let content;
    switch (activeTab) {
      case 'Exterior':
        content = (
          <p className="expert-content mt-4">
            While the platform is all-new, Mahindra has decided to retain the essence of the XUV500 in the 700’s design. Paying homage 
            to the 500 are the new headlamps where the “C” shape is maintained by the LED DRLs. However, these pack an all-LED beam 
            and the indicators are dynamic as well. Complementing these are more LEDs in the fog lamps, which also feature cornering lights. 
            The headlamps flow in the slats of the grille which features an aggressive design. The bonnet too gets strong creases which adds 
            muscle to the front look for the 700. Safe to say, you won’t be confusing the XUV700 with anything on the road when you see one at night.
          </p>
        );
        break;
      case 'Interior':
        content = (
          <p className="expert-content mt-4">
            The XUV700's interior offers a spacious and luxurious cabin with high-quality materials, comfortable seating, and advanced features. 
            It includes dual displays, one for infotainment and one for the driver’s display, adding a modern touch to the cabin experience.
          </p>
        );
        break;
      case 'Performance':
        content = (
          <p className="expert-content mt-4">
            The XUV700 delivers strong performance with powerful engine options. Its smooth drive and robust torque make it suitable 
            for both city driving and off-road adventures, enhanced by its advanced suspension setup.
          </p>
        );
        break;
      case 'Verdict':
        content = (
          <p className="expert-content mt-4">
            Overall, the XUV700 offers a well-rounded package with great design, performance, and innovative features. 
            It's a compelling choice for anyone seeking a versatile SUV with modern amenities and segment-first innovations.
          </p>
        );
        break;
      default:
        content = null;
    }

    const moreContent = (
      <p className="expert-content mt-4">
        The XUV700 has several unique features that make it stand out. For example, it comes with ADAS (Advanced Driver Assistance Systems) 
        which includes lane-keeping assist, adaptive cruise control, and forward collision warning. It also offers panoramic sunroof, dual-zone 
        climate control, and a premium sound system, making it a luxurious option for long journeys.
      </p>
    );

    return (
      <>
        {content}
        {showMoreContent && moreContent}
      </>
    );
  };

  return (
    <section className="expert-advice-section text-light py-5" id="expert-advice">
      <div className="container">
        <div className="row align-items-center">

          <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
            <h1 className="expert-subtitle text-warning">Here’s some</h1>
            <h1 className="expert-title fw-bold">Expert Advice!</h1>
            <p className="expert-description">
              With so many segment-first features, drivetrains, seating and variant options, the XUV700 is trying to please everyone. 
              But does it get the basics right to first get into your consideration?
            </p>
          </div>


          <div className="col-lg-5 col-md-12 text-end">
            <img src="images/img6.png" alt="XUV 700 Front" className="img-fluid expert-image" />
          </div>
        </div>


        <div className="tabs-section d-flex justify-content-center align-items-center flex-wrap mt-4">
          <span
            className={`tab ${activeTab === 'Exterior' ? 'active' : ''}`}
            onClick={() => setActiveTab('Exterior')}
          >
            Exterior ▼
          </span>
          <span className="tab-separator">|</span>
          <span
            className={`tab ${activeTab === 'Interior' ? 'active' : ''}`}
            onClick={() => setActiveTab('Interior')}
          >
            Interior
          </span>
          <span className="tab-separator">|</span>
          <span
            className={`tab ${activeTab === 'Performance' ? 'active' : ''}`}
            onClick={() => setActiveTab('Performance')}
          >
            Performance
          </span>
          <span className="tab-separator">|</span>
          <span
            className={`tab ${activeTab === 'Verdict' ? 'active' : ''}`}
            onClick={() => setActiveTab('Verdict')}
          >
            Verdict
          </span>
        </div>

        <div className="underline-divider mx-auto"></div>

        <div className="mt-4">
          {renderContent()}
        </div>

        <div className="text-center mt-4 ">
          <img src="images/img1.png" alt="XUV 700 Side View" className="img-fluid expert-car-image" />
        </div>

        <div className="text-center mt-4">
          <button 
            className="btn view-more-btn"
            onClick={() => setShowMoreContent(!showMoreContent)}
          >
            {showMoreContent ? 'View Less ▲' : 'View More ▼'}
          </button>
        </div>
      </div>
    </section>
  );
}

export default ExpertAdvice;
