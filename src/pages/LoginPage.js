import React from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Navbars from "../compenents/Navbar";

const LoginPage = () => {
  return (
    <Container>
      <Row>
        <Navbars />
        <Col md={8}>
          <div className="login-page-form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adınız</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <button variant="primary" type="submit">
                Submit
              </button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
