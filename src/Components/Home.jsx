import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TopMenubar from "./Includes/TopMenubar";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={10} className="ps-0 pe-0">
            <TopMenubar />
          </Col>
          <Col md={2}>
              Hi
          </Col>
        </Row>

        <div className="text-center">Hello</div>
      </Container>
    </>
  );
};

export default Home;
