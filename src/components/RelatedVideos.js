import React from 'react';
import { Row, Col,Carousel, Container } from 'react-bootstrap';
import './RelatedVideos.css';

function RelatedVideos() {
  const items = [
    { id: 1, duration: '15.20', image: 'images/video3.png' },
    { id: 2, duration: '15.20', image: 'images/video2.png' },
    { id: 3, duration: '15.20', image: 'images/video3.png' },
    { id: 4, duration: '15.20', image: 'images/video3.png' },
    { id: 5, duration: '15.20', image: 'images/video2.png' },
    { id: 6, duration: '15.20', image: 'images/video3.png' },
  ];
  
  const groupedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    groupedItems.push(items.slice(i, i + 3));
  }

  return (
    <section className="related-videos-section text-light py-5">
      <Container>
      <Row className="align-items-center mb-5">
          <Col md={8}>
            <h2 className="related-title">
              Mahindra XUV700 <span className="related-bold">Related Videos</span>
            </h2>
            <div className="description-container">

              <div className="play-icon-circle">
                <span className="play-icon">&#9658;</span>
              </div>

              <p className="related-description">
                Mahindra XUV700 2022 has videos of its detailed review, pros & cons,
                <br />
                comparison & variant explained, test drive experience, features, specs,
                interior & exterior details, and more. Watch our Latest Hindi video
                of Mahindra XUV700 to know price, safety features & more.
              </p>
            </div>
          </Col>
          <Col md={4} className="text-center">
            <img
              src="images/img5.png"
              alt="Mahindra XUV700"
              className="car-image"
            />
          </Col>
        </Row>
        <Row>
        <Carousel indicators={false}>
          {
            groupedItems.map((group, index) => (
              <Carousel.Item key={index}>
              <React.Fragment key={index}>
                <Row className='d-flex justify-content-center mb-4'>

                {group.map(item => (
                  <Col md={4} className="text-center" key={item.id}>
                    <div className="play-button-container">
                      <img src={item.image} alt="Test Drive Review" className="video-thumbnail" />
                      <div className="play-button-circle">
                        <span className="play-icon">&#9658;</span>
                      </div>
                    </div>
                    <p className="video-duration">{item.duration}</p>
                  </Col>
                ))}
                </Row>
              </React.Fragment>
              </Carousel.Item>
            ))
          }
           </Carousel>
        </Row>
      </Container>
    </section>
  );
}

export default RelatedVideos;
