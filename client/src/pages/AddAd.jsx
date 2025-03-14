import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './AddAd.css';

function AddAd() {
  return (
    <section className="add-ad-section">
      <Container>
        <Row>
          <Col>
            <h2>Add Your Product Information</h2>
            <p>Fill out the information below to create your ad. (Under Construction)</p>
          </Col>
        </Row>
        
        <Row>
          <Col md={6}>
            <Form>
              {/* Business Name */}
              <div className="mb-3">
                <Form.Label>Business Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your business name" />
              </div>

              {/* Business Description */}
              <div className="mb-3">
                <Form.Label>Business Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Describe your business" />
              </div>

              {/* Product Description */}
              <div className="mb-3">
                <Form.Label>Product Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Describe your product" />
              </div>

              {/* Price and Discount Price */}
              <div className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" placeholder="Enter regular price" />
              </div>

              <div className="mb-3">
                <Form.Label>Discount Price</Form.Label>
                <Form.Control type="number" placeholder="Enter discounted price" />
              </div>

              {/* Target Audience Demographics */}
              <div className="mb-3">
                <Form.Label>Target Audience Demographics</Form.Label>
                <div className="d-flex flex-column">
                  {/* Age Range */}
                  <div className="mb-2">
                    <Form.Label>Age Range</Form.Label>
                    <Form.Control type="text" placeholder="E.g., 18-35" />
                  </div>
                  
                  {/* Gender */}
                  <div className="mb-2">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" placeholder="E.g., Male, Female, Other" />
                  </div>
                  
                  {/* Religion */}
                  <div className="mb-2">
                    <Form.Label>Religion</Form.Label>
                    <Form.Control type="text" placeholder="E.g., Christian, Muslim, Jewish" />
                  </div>

                  {/* Income Bracket */}
                  <div className="mb-2">
                    <Form.Label>Income Bracket</Form.Label>
                    <Form.Control type="text" placeholder="E.g., $30K-$50K" />
                  </div>

                  {/* Marital Status */}
                  <div className="mb-2">
                    <Form.Label>Marital Status</Form.Label>
                    <Form.Control type="text" placeholder="E.g., Single, Married" />
                  </div>

                  {/* Education Level */}
                  <div className="mb-2">
                    <Form.Label>Education Level</Form.Label>
                    <Form.Control type="text" placeholder="E.g., High School, Bachelor's, Master's" />
                  </div>

                  {/* Interests */}
                  <div className="mb-2">
                    <Form.Label>Company Interests</Form.Label>
                    <Form.Control type="text" placeholder="E.g., Technology, Sports, Fashion" />
                  </div>

                  {/* Shopping Habits */}
                  <div className="mb-2">
                    <Form.Label>Shopping Habits</Form.Label>
                    <Form.Control type="text" placeholder="E.g., Online, In-store" />
                  </div>

                  {/* Regions */}
                  <div className="mb-2">
                    <Form.Label>Regions You’re Promoting To</Form.Label>
                    <Form.Control type="text" placeholder="E.g., North America, Europe" />
                  </div>

                  {/* Device Usage */}
                  <div className="mb-2">
                    <Form.Label>Device Usage Amount</Form.Label>
                    <Form.Control type="text" placeholder="E.g., Mobile, Desktop, Tablet" />
                  </div>

                  {/* Children Status */}
                  <div className="mb-2">
                    <Form.Label>Children</Form.Label>
                    <Form.Control as="select">
                      <option>No children</option>
                      <option>Has children</option>
                    </Form.Control>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="d-grid gap-2">
                <Button className="custom-btn" size="lg">
                  Submit Description
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AddAd;
