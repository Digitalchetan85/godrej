import React from "react";
import { Container, Image, Nav, Navbar, NavDropdown } from "react-bootstrap";
import Logo from '../../Images/logo.png'

const TopMenubar = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
        <Container fluid>
          <Navbar.Brand href="/"><Image src={Logo} className="img-fluid" alt="logo"></Image></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto me-auto">
            <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#price">Price</Nav.Link>
              <Nav.Link href="#site">Site & Floor Plan</Nav.Link>  
              <Nav.Link href="#amenitiies">Amenities</Nav.Link>  
              <Nav.Link href="#location">Location</Nav.Link>   
              <Nav.Link href="#virtual-tour">Virtual Tour</Nav.Link>  
              <Nav.Link href="#brochure">Brochure</Nav.Link>              
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopMenubar;
