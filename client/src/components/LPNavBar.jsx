import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LPNavBar.css';

function LPNavBar() {
    const navigate = useNavigate();

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-white">
            <Container className='lp-navbar-container'fluid>
                <Navbar.Brand href="#home">
                    <span className="eco">Eco</span>
                    <span className="ads">Ads</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link href="#features">About Us</Nav.Link>
                        <Nav.Link href="#philantropy">Philantropy</Nav.Link>
                        <Nav.Link onClick={() => navigate('/Portal')}>Login</Nav.Link>
                        <Nav.Link href="#consultation" className="consultation-link">Consultation</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default LPNavBar;
