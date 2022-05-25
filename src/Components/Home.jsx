import React, { useState } from "react";
import { Button, Col, Container, Image, Row, Table } from "react-bootstrap";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import TopMenubar from "./Includes/TopMenubar";
import Slide from "../Images/main-slide.png";
import Location from "../Images/locationmap.webp";
import Logo from"../Images/logo.png";
import Image1 from "../Images/image1.png";
import Image2 from "../Images/image2.png";
import Image3 from "../Images/image3.png";
import Image4 from "../Images/image4.png";
import Footer from "./Includes/Footer";

const Home = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const images = [

    { id: 1, imgName: Image1, alt: "", tag: "1" },
    { id: 2, imgName: Image2, alt: "", tag: "2" },
    { id: 3, imgName: Image3, alt: "", tag: "3" },
    { id: 4, imgName: Image4, alt: "", tag: "4" },

  ];
  return (
    <>
      <Container fluid>
        <Row>
          <Col md={9} className="ps-0 pe-0 bg-light">
            <TopMenubar />
            <div className="text-center">
              <Image src={Slide} alt="" className="img-fluid"></Image>
            </div>
            <section id="welcome" className="py-5 py-md-5 bg-white">
              <Container>
                <Row className="justify-content-center">
                  <Col md={12}>
                    <h2 className="text-success py-3">
                      Welcome To Godrej Royale Woods
                    </h2>
                    <p>
                      Godrej Royale Woods is a charming residential development
                      project located in Devanahalli, North Bangalore. Godrej
                      Royale Woods offers thoughtfully created Studio, 2 & 3 BHK
                      apartments to make you feel the royale charm to the
                      fullest. This project brings to you some exceptional
                      features such as pleasant open spaces, 10 types of themed
                      gardens, 1000+ trees, 8 types of orchards, forest-themed
                      clubhouse, tree-top views, ample well-connected roads, and
                      loads of lush greens.
                    </p>
                    <p>
                      Inclusively, the locale of Godrej Royale Woods dwells at
                      NH-44 which presents smooth connectivity to different main
                      areas in Bangalore like Nehru Nagar, KR Puram, and Outer
                      ring road. Also, there are several schools, hospitals,
                      shopping malls, multiplexes, banks, ATMs, and restaurants
                      are nearby Godrej Royale Woods. So welcome to the home at
                      Godrej Royale Woods that will make you fall in love with
                      Bangalore all over again.
                    </p>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleShow}
                      className="my-3 custom-button"
                    >
                      <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                      Download Brochure
                    </Button>
                  </Col>
                </Row>
              </Container>
            </section>
            <section id="price" className="py-5 py-md-5 ">
              <Container>
                <Row className="justify-content-center">
                  <h2 className="text-success py-3">Price</h2>
                  <Col md={6}>
                    <Table
                      responsive="sm"
                      className="align-middle text-center border-transparent"
                      striped
                      bordered
                      hover
                    >
                      <thead>
                        <tr>
                          <th>Type</th>
                          <th>Super Built-up Area</th>
                          <th colspan="2">Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Studio</td>
                          <td>432 Sq.ft.</td>
                          <td>24.99 Lacs Onwards</td>
                          <td>
                            <Button
                              variant="primary"
                              size="sm"
                              // onClick={handleShow}
                              className="my-3 custom-button me-1"
                            >
                              <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                              Price Breakup
                            </Button>
                          </td>
                        </tr>
                        <tr>
                          <td>2 BHK </td>
                          <td>950 Sq.ft</td>
                          <td>44.99 Lacs Onwards</td>
                          <td>
                            {" "}
                            <Button
                              variant="primary"
                              size="sm"
                              // onClick={handleShow}
                              className="my-3 custom-button"
                            >
                              <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                              Price Breakup
                            </Button>
                          </td>
                        </tr>{" "}
                        <tr>
                          <td>3 BHK</td>
                          <td>1150 SQ.ft</td>
                          <td>53.99 Lacs Onwards</td>
                          <td>
                            {" "}
                            <Button
                              variant="primary"
                              size="sm"
                              // onClick={handleShow}
                              className="my-3 custom-button"
                            >
                              <i className="fa fa-spinner fa-flip fa-download"></i>{" "}
                              Price Breakup
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Col>
                  <Col md={6}></Col>
                </Row>
              </Container>
            </section>
            <section id="site" className="py-5 py-md-5 bg-white">
              <Container>
                <h2 className="text-success py-3">
                  Site & Floor Plan Of Godrej Royale Woods
                </h2>
                <Row className="justify-content-center">
                  <h5>Master Plan</h5>
                  <Col md={6}>
                    <div className="text-center">
                      <Image src={Image1} alt="" className="img-fluid"></Image>
                    </div>
                  </Col>
                  <h5>Floor Plan</h5>
                  <Col md={4}>
                    <div className="text-center">
                      <Image src={Image1} alt="" className="img-fluid"></Image>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="text-center">
                      <Image src={Image1} alt="" className="img-fluid"></Image>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="text-center">
                      <Image src={Image1} alt="" className="img-fluid"></Image>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            <section id="amenitiies" className="py-5 py-md-5">
              <Container>
                <Row className="justify-content-center">
                  <h2 className="text-success py-3">
                    Amenities Of Godrej Royale Woods
                  </h2>
                  <Col md={4}>
                    <ul>
                      <li>Beach VolleyBall Court</li>
                      <li>Camping Site</li>
                      <li>Children Play Area</li>
                    </ul>
                  </Col>
                  <Col md={4}>
                    <ul>
                      <li>Swimming Pool</li>
                      <li>Tennis Court</li>
                      <li>Outdoor Gym</li>
                    </ul>
                  </Col>
                  <Col md={4}>
                    <ul>
                      <li>Jogging & Cycling Track</li>
                      <li>Yoga Meditation Pavilon</li>
                      <li>Indoor Games</li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </section>
            <section id="location" className="py-5 py-md-5 bg-white">
              <Container>
                <h2 className="text-success py-3">
                  Address Of Godrej Royale Woods
                </h2>
                <Row>
                  <Col md={6}>
                    <h5 className="text-center">Map View</h5>
                    <div className="text-center">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3883.997465820156!2d77.68534413226318!3d13.225475446558834!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x97d9a6aa8caa6042!2sGodrej%20Royale%20Woods%2C%20Devanahalli%2C%20Bangalore!5e0!3m2!1sen!2sin!4v1653469285241!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                      ></iframe>
                    </div>
                  </Col>
                  <Col md={6}>
                    <h5 className="text-center">Location Map</h5>
                    <div className="text-center">
                      <Image
                        src={Location}
                        alt=""
                        className="img-fluid"
                      ></Image>
                    </div>
                  </Col>
                </Row>
              </Container>
            </section>
            <section id="gallery" className="py-5 py-md-5">
              <Container>
                <h2 className="text-success py-3">Gallery</h2>
                <SimpleReactLightbox>
                  <SRLWrapper>
                    <Row className="g-3">
                      {images.map((item) => (
                        <Col md={3} xs={6} key={item.id}>
                          <div className="m-1 text-center border rounded">
                            <a href={item.imgName}>
                              <Image
                                src={item.imgName}
                                alt={item.alt}
                                className="img-fluid"
                              />
                            </a>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </SRLWrapper>
                </SimpleReactLightbox>
              </Container>
            </section>
            <section id="virtual-tour" className="py-5 py-md-5 bg-white">
              <Container>
                <Row className="justify-content-center">
                  <h2 className="text-success py-3">Virtual Tour Request</h2>
                  <Col md={8}>
                    <div className="text-center">
                    <iframe width="100%" height="450" src="https://www.youtube.com/embed/dEq5fbV7qJM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                    </div>

                  </Col>
                </Row>
              </Container>
            </section>
            <section id="about" className="py-5 py-md-5">
              <Container>
                <Row className="justify-content-center">
                  <div className="text-center">
                  <Image src={Logo} className="img-fluid" alt="logo"></Image>
                  </div>
                  <h2 className="text-success py-3">About Godrej Properties</h2>
                  <Col md={10}>
                          <p>Godrej Group established in 1897, began their journey as a part of India’s Swadeshi movement i.e. the original ‘Make in India’ movement. The group comprises various businesses that include real estate, home supplies & security. It’s ranked as the 2nd most trusted Indian brand with annual revenue of 5 billion USD, and 1.1 billion customers worldwide. Over the years, Godrej has been honored with more than 200 awards and recognized as the National Brand Leader by the Track2Realty BrandXReport 2019-20 and the Global Sector Leader by GRESB 2020.</p>
                  </Col>
                </Row>
              </Container>
            </section>
            <Footer />
          </Col>
          <Col md={3}>Sidebar</Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
