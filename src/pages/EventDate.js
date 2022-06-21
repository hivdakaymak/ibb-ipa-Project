import React from "react";
import { Row, Col, Container, Navbar, Card, Button } from "react-bootstrap";
import {
  FaCalendarWeek,
  FaSearchLocation,
  FaUserAlt,
  FaRegClock,
} from "react-icons/fa";
import Menu from "../compenents/Navbar";
const EventDate = () => {
  return (
    <Container>
      <Row>
        <Menu title="IPA ETKİNLİK TAKVİMİ" />
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
          </Card.Body>
        </Card>
        <Row className="d-flex align-items-center justify-content-center">
          <Col className="date-yellow-box mt-5 text-center mb-5" md={2}>
            <h4 className="mt-3">SOSYAL POLİTİKALAR ÇALIŞTAYI</h4>
            <hr />
            <p>
              <span className="dateIcon">
                <FaCalendarWeek />
              </span>
              10 Kasım 2022
            </p>
            <p>
              <span className="dateIcon">
                <FaSearchLocation />
              </span>
              İPA - Hangar
            </p>
            <p>
              <span className="dateIcon">
                <FaUserAlt />
              </span>
              100 Kişi
            </p>
            <p>
              <span className="dateIcon">
                <FaRegClock />
              </span>
              Kalan Kontenjan - 20
            </p>
            <Button className="mb-3 mt-2">Başvur</Button>{" "}
          </Col>
          <Col className="date-green-box mt-5 text-center mb-5" md={2}>
            <h4 className="mt-3">SOSYAL POLİTİKALAR ÇALIŞTAYI</h4>
            <hr />
            <p>
              <span className="dateIcon">
                <FaCalendarWeek />
              </span>
              10 Kasım 2022
            </p>
            <p>
              <span className="dateIcon">
                <FaSearchLocation />
              </span>
              İPA - Hangar
            </p>
            <p>
              <span className="dateIcon">
                <FaUserAlt />
              </span>
              100 Kişi
            </p>
            <p>
              <span className="dateIcon">
                <FaRegClock />
              </span>
              Kalan Kontenjan - 20
            </p>
            <Button className="mb-3 mt-2">Başvur</Button>{" "}
          </Col>
          <Col className="date-blue-box mt-5 text-center mb-5" md={2}>
            <h4 className="mt-3">SOSYAL POLİTİKALAR ÇALIŞTAYI</h4>
            <hr />
            <p>
              <span className="dateIcon">
                <FaCalendarWeek />
              </span>
              10 Kasım 2022
            </p>
            <p>
              <span className="dateIcon">
                <FaSearchLocation />
              </span>
              İPA - Hangar
            </p>
            <p>
              <span className="dateIcon">
                <FaUserAlt />
              </span>
              100 Kişi
            </p>
            <p>
              <span className="dateIcon">
                <FaRegClock />
              </span>
              Kalan Kontenjan - 20
            </p>
            <Button className="mb-3 mt-2">Başvur</Button>{" "}
          </Col>
          <Col className="date-pink-box mt-5 text-center mb-5" md={2}>
            <h4 className="mt-3">SOSYAL POLİTİKALAR ÇALIŞTAYI</h4>
            <hr />
            <p>
              <span className="dateIcon">
                <FaCalendarWeek />
              </span>
              10 Kasım 2022
            </p>
            <p>
              <span className="dateIcon">
                {" "}
                <FaSearchLocation />
              </span>
              İPA - Hangar
            </p>
            <p>
              <span className="dateIcon">
                <FaUserAlt />
              </span>
              100 Kişi
            </p>
            <p>
              <span className="dateIcon">
                <FaRegClock />
              </span>
              Kalan Kontenjan - 20
            </p>
            <Button className="mb-3 mt-2">Başvur</Button>{" "}
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default EventDate;
