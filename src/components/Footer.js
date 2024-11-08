import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className="footer-title">About Us</h5>
            <p className="footer-text">
              Mahindra XUV700 - The latest SUV that blends luxury, performance, and advanced technology.
              Learn more about features, specifications, and our commitment to quality.
            </p>
          </Col>
          <Col md={4}>
            <h5 className="footer-title">Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#mileage">Mileage</a></li>
              <li><a href="#expert-advice">Expert Advice</a></li>
              <li><a href="#user-reviews">User Reviews</a></li>
              <li><a href="#related-videos">Related Videos</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-text">Phone: +123 456 7890</p>
            <p className="footer-text">Email: support@mahindraxuv.com</p>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a> |
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            <p className="footer-bottom-text">&copy; 2024 Mahindra XUV700. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
