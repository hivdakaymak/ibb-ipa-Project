import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Menu from "../compenents/Navbar";
import { Link } from "react-router-dom";
const Verification = () => {
  return (
    <Container>
      <Menu title="SOSYAL POLİTİKALAR ÇALIŞTAYI BAŞVURU FORMU" />
      <Row>
        <Col
          className="d-flex align-items-center justify-content-center mt-5"
          md={12}
        >
          <img
            className="mt-5"
            style={{ height: "200px" }}
            src="/img/verification.png"
          />
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center mt-3"
          md={12}
        >
          <h4>Başvurunuz Alınmıştır</h4>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center mt-3"
          md={12}
        >
          <Button
            className="verification-button mb- mt-5"
            variant="info"
          >
            <Link to={"/"}>Anasayfaya Git</Link>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Verification;
