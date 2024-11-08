import React, { useState } from 'react';
import { Navbar, Nav, Container, Form, FormControl, InputGroup, Offcanvas } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import './CustomNavbar.css';

function CustomNavbar({ onSearch }) {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>

      <Offcanvas show={showSidebar} onHide={toggleSidebar} placement="start" style={{ backgroundColor: '#000', width: '250px' }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title className="text-white">Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#features" className="text-white  mx-4" style={{ fontSize: '1.2rem', fontWeight: '500' }}>
              Features
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-white  mx-4" style={{ fontSize: '1.2rem', fontWeight: '500' }}>
              Pricing
            </Nav.Link>
            <Nav.Link href="#mileage" className="text-white  mx-4" style={{ fontSize: '1.2rem', fontWeight: '500' }}>
              Mileage
            </Nav.Link>
            <Nav.Link href="#expert-advice" className="text-white  mx-4" style={{ fontSize: '1.2rem', fontWeight: '500' }}>
              Expert Advice
            </Nav.Link>
            <Nav.Link href="#user-reviews" className="text-white  mx-4" style={{ fontSize: '1.2rem', fontWeight: '500' }}>
              User Reviews
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <div className="sticky-top" style={{ backgroundColor: "black" }}>
        <Container className="d-flex align-items-center">
  
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white me-3"
            style={{ cursor: 'pointer' }}
            onClick={toggleSidebar}
          >
            <rect y="4" width="24" height="2" fill="white" />
            <rect y="11" width="24" height="2" fill="white" />
            <rect y="18" width="24" height="2" fill="white" />
          </svg>


          <Form className="d-flex mb-2" style={{ width: '300px' }}>
            <InputGroup>

              <InputGroup.Text className="bg-secondary text-light mt-3">
                <FaSearch />
              </InputGroup.Text>

              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
                className="bg-secondary text-light mt-3"
                onChange={(e) => onSearch(e.target.value)}
              />

              <InputGroup.Text className="bg-secondary text-light mt-3">→</InputGroup.Text>
            </InputGroup>
          </Form>
        </Container>

        <Navbar variant="dark" expand="lg" style={{ backgroundColor: "black" }}>
          <Container>
            <Navbar.Brand href="#" className="mx-auto" style={{ color: "orange", fontWeight: "bold" }}>
             Overview
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
              <Nav>
                <Nav.Link href="#features" className="text-white px-5">Features</Nav.Link>
                <Nav.Link href="#pricing" className="text-white px-5">Pricing</Nav.Link>
                <Nav.Link href="#mileage" className="text-white px-5">Mileage</Nav.Link>
                <Nav.Link href="#expert-advice" className="text-white px-5">Expert Advice</Nav.Link>
                <Nav.Link href="#user-reviews" className="text-white px-5">User Reviews</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default CustomNavbar;
