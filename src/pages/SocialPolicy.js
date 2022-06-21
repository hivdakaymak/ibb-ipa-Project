import React from "react";
import { Container, Row, Navbar, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaCalendarWeek,
  FaSearchLocation,
  FaUserAlt,
  FaRegClock,
} from "react-icons/fa";
import Menu from "../compenents/Navbar";

const SocialPolicy = () => {
  return (
    <Container>
      <Row>
        <Navbar className="policyNavbar">
          <Col md={3} className="d-flex justify-content-start">
            <img
              className="nav-logo"
              src={
                "https://ipa.istanbul/wp-content/uploads/2020/02/istanbul_planlama_ajansi_logo_orj.png"
              }
            />
          </Col>
          <Col md={6} className="d-flex justify-content-center">
            <h3 >IPA ETKİNLİK TAKVİMİ</h3>
          </Col>
          <Col md={3} className="d-flex justify-content-end">
            <div className="dropdownMenu">
              <div className="d-flex ipaUser align-items-center justify-content-between">
                <div>IPA USER</div>{" "}
                <div>
                  <img src="/img/arrow.png" />
                </div>
              </div>

              <div>
                <ul>
                  <li>
                    <Link to={"/"}>Etkinlik Tanımlama</Link>
                  </li>
                  <li>
                    <Link to={"/social-policy"}>Sosyal Politikalar</Link>
                  </li>
                  <li>
                    <Link to={"/policy-form"}>Politika Formu</Link>
                  </li>
                  <li>
                    <Link to={"/event-date"}>Etkinlik Takvimi</Link>
                  </li>
                  <li>
                    <Link to={"/event-place"}>Etkinlik Tanımlama</Link>
                  </li>
                  <li>
                    <Link to={"/policy-user-list"}>S-P Katılımcı Listesi</Link>
                  </li>
                  <li>
                    <Link to={"/verification"}>Onay Sayfası</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Navbar>

        <h4 className="text-center mt-5 mb-5 event-title">SOSYAL POLİTİKALAR ÇALIŞTAYI</h4>
        <Col md={10} className="policy-info d-flex justify-content-around">
          <div className="policy-box">
            <p>
              <span className="dateIcon">
                {" "}
                <FaCalendarWeek />
              </span>
              10 Kasım 2022
            </p>
          </div>
          <div className="policy-box">
            <p>
              <span className="dateIcon">
                {" "}
                <FaSearchLocation />
              </span>
              İPA - Hangar
            </p>
          </div>
          <div className="policy-box">
            <p>
              <span className="dateIcon">
                {" "}
                <FaUserAlt />
              </span>
              100 Kişi
            </p>
          </div>
          <div className="policy-box">
            <p>
              <span className="dateIcon">
                {" "}
                <FaRegClock />
              </span>
              Kalan Kontenjan - 20
            </p>
          </div>
        </Col>
        <Card
          className="text-center mt-5 date-card"
          style={{ border: "none", width: "85%" }}
        >
          <Card.Body>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
            </Card.Text>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.simply
              dummy text of the printing and typesetting industry.
            </Card.Text>
            <Card.Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum is
              simply dummy text of the printing and typesetting industry.simply
              dummy text of the printing and typesetting industry.
            </Card.Text>
          </Card.Body>
        </Card>
        <Col
          md={12}
          className="d-flex align-items-center justify-content-center"
        >
          <Button
            style={{
              width: "150px",
              backgroundColor: "#faac32",
              border: "none",
            }}
            className="mb-5 mt-5"
          >
            BAŞVUR
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default SocialPolicy;
