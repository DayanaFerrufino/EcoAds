import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Consultations.css';

function Consultations() {
  return (
    <section className="consultation-section">
      <div className="scheduler-container">
        <Container>
          <Row className="mb-4">
            <Col>
              <h2>Schedule a Consultation</h2>
              <p>Select a date and time for your consultation with an agent. (Static)</p>
            </Col>
          </Row>

          <Row>
            <Col md={6}>
              {/* Description Section */}
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value="We provide personalized consultations to help you with your needs."
                  readOnly
                />
              </Form.Group>

              {/* Date Selection */}
              <Form.Group className="mb-3">
                <Form.Label>Select Date</Form.Label>
                <Form.Control
                  type="date"
                  value="2025-03-14" 
                  disabled
                />
              </Form.Group>

              {/* Static Time Slot Selection */}
              <Form.Group className="mb-3">
                <Form.Label>Select Time</Form.Label>
                <Form.Control
                  as="select"
                  value="10:00 AM"
                  disabled
                >
                  <option>10:00 AM</option>
                  <option>11:00 AM</option>
                  <option>1:00 PM</option>
                  <option>3:00 PM</option>
                </Form.Control>
              </Form.Group>

              {/* Availability Section */}
              <Form.Group className="mb-3">
                <Form.Label>Availability</Form.Label>
                <Form.Control as="select" disabled>
                  <option>Available from 9 AM to 12 PM</option>
                  <option>Available from 1 PM to 4 PM</option>
                  <option>Available from 10 AM to 6 PM</option>
                  <option>Available from 11 AM to 2 PM</option>
                </Form.Control>
              </Form.Group>

              {/* Static Submit Button */}
              <Button className="custom-btn" size="lg" disabled>
                Schedule Meeting
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}

export default Consultations;
