import React, { useState } from 'react';
import '../styles/UserReviews.css';
import { Button, Container, Row, Col, Card, Dropdown, DropdownButton, Modal, Form } from 'react-bootstrap';

const reviewsData = [
  {
    id: 1,
    rating: 5,
    text: "It is a fantastic car with good mileage, features, looks, performance, and build quality are the best.",
    author: "Mahendrakumar Baviskar",
    date: "Aug 18, 2022",
    views: 193
  },
  {
    id: 1,
    rating: 5,
    text: "It is a fantastic car with good mileage, features, looks, performance, and build quality are the best.",
    author: "Mahendrakumar Baviskar",
    date: "Aug 18, 2022",
    views: 193
  },
  {
    id: 1,
    rating: 5,
    text: "It is a fantastic car with good mileage, features, looks, performance, and build quality are the best.",
    author: "Mahendrakumar Baviskar",
    date: "Aug 18, 2022",
    views: 193
  },

];

function UserReviews() {
  const [reviews, setReviews] = useState(reviewsData); 
  const [visibleReviews, setVisibleReviews] = useState(3);
  const [filter, setFilter] = useState('All'); 
  const [showModal, setShowModal] = useState(false); 
  const [newReview, setNewReview] = useState({ rating: '', text: '', author: '' }); 


  const handleViewMore = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 3); 
  };

  const handleShowModal = () => setShowModal(true);

  const handleCloseModal = () => {
    setShowModal(false);
    setNewReview({ rating: '', text: '', author: '' }); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview((prevReview) => ({
      ...prevReview,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const today = new Date();
    const newReviewData = {
      id: reviews.length + 1,
      rating: parseInt(newReview.rating),
      text: newReview.text,
      author: newReview.author,
      date: today.toLocaleDateString(),
      views: 0
    };
    setReviews([newReviewData, ...reviews]); 
    handleCloseModal(); 
  };

  
  const filteredReviews = reviews.filter((review) => {
    if (filter === 'All') return true;
    if (filter === '4+ Stars') return review.rating >= 4;
    if (filter === '5 Stars') return review.rating === 5;
    return true;
  });

  return (
    <section className="user-reviews-section py-5">
      <Container>
        <h2 className="user-reviews-title mb-3">Mahindra XUV700 User Review</h2>
        <div className="d-flex mb-4">
          <div className="user-reviews-stars">
            <span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span><span>⭐</span>
          </div>
          <div className="user-reviews-rating ms-3">
            <span className="user-reviews-rating-score display-4">4.5</span>
            <span className="user-reviews-rating-text ms-2">From our 108 users</span>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <Button variant="outline-warning" className="user-reviews-write-review-btn" onClick={handleShowModal}>
            Write your Review
          </Button>

          <DropdownButton
            variant="outline-light"
            title="Filter ▾"
            className="user-reviews-filter-btn"
            onSelect={(filterType) => setFilter(filterType)}
          >
            <Dropdown.Item eventKey="All">All</Dropdown.Item>
            <Dropdown.Item eventKey="4+ Stars">4+ Stars</Dropdown.Item>
            <Dropdown.Item eventKey="5 Stars">5 Stars</Dropdown.Item>
          </DropdownButton>
        </div>

        <Row className="user-reviews-list justify-content-center">
          {filteredReviews.slice(0, visibleReviews).map((review) => (
            <Col md={4} className="mb-4" key={review.id}>
              <Card className="text-light bg-transparent border-light h-100">
                <Card.Body>
                  <div className="user-review-stars text-warning mb-2">
                    {'⭐'.repeat(review.rating)}
                  </div>
                  <Card.Text>{review.text}</Card.Text>
                </Card.Body>
                <Card.Footer className="mt-5">
                  <small>
                    By {review.author}<br />
                    On: {review.date} | {review.views} Views
                  </small>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>

        {visibleReviews < filteredReviews.length && (
          <div className="text-center">
            <Button onClick={handleViewMore} variant="outline-warning" className="user-reviews-view-more-btn">
              View More ▾
            </Button>
          </div>
        )}

        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Write a Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleFormSubmit}>
              <Form.Group className="mb-3" controlId="rating">
                <Form.Label>Rating</Form.Label>
                <Form.Control
                  as="select"
                  name="rating"
                  value={newReview.rating}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Rating</option>
                  <option value="5">5 - Excellent</option>
                  <option value="4">4 - Good</option>
                  <option value="3">3 - Average</option>
                  <option value="2">2 - Poor</option>
                  <option value="1">1 - Terrible</option>
                </Form.Control>
              </Form.Group>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>Review</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="text"
                  value={newReview.text}
                  onChange={handleInputChange}
                  placeholder="Write your review here"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="author">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={newReview.author}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>
              <Button variant="warning" type="submit">
                Submit Review
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
}

export default UserReviews;
