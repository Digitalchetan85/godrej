import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import { Formik, Field, ErrorMessage } from "formik";

const Modals = (props) => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    id:""
  };
  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Download Brochure
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Virtual Site Visit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h3>Register Here And Avail The Best Offers!!</h3>
            <Formik
            initialValues={initialValues}
            // validationSchema={validationSchema}
            // onSubmit={onSubmit}
          >
            <Form className="p-3">
              <Row className="mb-3">
                {/* <Col md={2} className="p-0">
                  <div className="text-end py-2">
                    <FontAwesomeIcon
                      icon="fas fa-user"
                      className="border-0 fs-4 rounded text-primary"
                    />
                  </div>
                </Col> */}
                <Col md={12}>
                  <div className="mb-3">
                    <Field
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                    <small className="text-danger">
                      <ErrorMessage name="name" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                {/* <Col md={2} className="p-0">
                  <div className="text-end py-2">
                    <FontAwesomeIcon
                      icon="fas fa-envelope"
                      className="border-0 fs-4 rounded text-primary"
                    />
                  </div>
                </Col> */}
                <Col md={12}>
                  <div className="mb-3">
                    <Field
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email"
                    />
                    <small className="text-danger">
                      <ErrorMessage name="email" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                {/* <Col md={2}>
                  <div className="text-center">
                    <CountryDropdown
                      id="UNIQUE_ID"
                      className="YOUR_CSS_CLASS form-control border ps-0 pe-3 py-2"
                      preferredCountries={["in", "gb"]}
                      value=""
                      handleChange={(e) => console.log(e.target.value)}
                    ></CountryDropdown>
                  </div>
                </Col> */}
                <Col md={12}>
                  <div className="mb-3">
                    <Field
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Phone number"
                    />

                    <small className="text-danger">
                      <ErrorMessage name="phone" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className="mb-3">
                {/* <Col md={2}>
                  <div className="text-center">
                    <CountryDropdown
                      id="UNIQUE_ID"
                      className="YOUR_CSS_CLASS form-control border ps-0 pe-3 py-2"
                      preferredCountries={["in", "gb"]}
                      value=""
                      handleChange={(e) => console.log(e.target.value)}
                    ></CountryDropdown>
                  </div>
                </Col> */}
                <Col md={12}>
                  <div className="">
                    <Field
                      type="hidden"
                      className="form-control"
                      id="id"
                      name="id"
                      placeholder="Phone number"
                      value={props.projectid}
                    />

                    <small className="text-danger d-none">
                      <ErrorMessage name="id" />
                    </small>
                  </div>
                </Col>
              </Row>
              <Row className="">
                <Col md={12}>
                  {/* {formStatus ? (
                    <div className="alert alert-success p-3 text-center">
                      {formStatus}
                    </div>
                  ) : null} */}
                </Col>
              </Row>
              <Row className="">
                <Col md={12}>
                  <div className="">
                    <Button
                      className="btn btn-success text-white text-uppercase form-control"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </div>
                </Col>
              </Row>
            </Form>
            </Formik>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Modals