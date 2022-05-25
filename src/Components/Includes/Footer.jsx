import React from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

const Footer = () => {
  return (
    <div className="py-5 py-md-5">
        <Container>
            <Row className="justify-content-center">
                <Col md={12}>
                <p><strong>Disclaimer:</strong>We are an authorised marketing partner for this project. Provided content is given by respective owners and this website and content is for information purpose only and it does not constitute any offer to avail for any services. Prices mentioned are subject to change without prior notice and properties mentioned are subject to availability. You can expect a call, SMS or emails on details registered with us.</p>
                <hr />
                </Col>
                <Navbar>
                <Nav className="ms-auto me-auto">
                <Nav.Link href="#">Terms & Condition</Nav.Link>
                <Nav.Link href="#">Privacy Policy</Nav.Link>
                <Nav.Link href="#">Cookies Policy</Nav.Link>
                    </Nav>
                </Navbar>
            </Row>

        </Container>
    </div>
  )
}

export default Footer
