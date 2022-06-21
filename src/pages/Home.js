import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
  Table,
  Pagination,
} from "react-bootstrap";

import Menu from "../compenents/Navbar";
import Swaler from "sweetalert2";
import TablePage from "../compenents/Table";

const homeSave = () => {
  Swaler.fire({
    icon: "success",
    title: "Kaydedildi",
    text: "Başvurunuz kaydedildi",
    timer: 1500,
  });
};

const Home = () => {
  return (
    <Container>
      <Row>
        <Menu title="Etkinlik Tanımlama Ekranı" />
        <Col md={6} className="mb-4">
          <Form style={{ marginRight: "60px" }}>
            <Form.Group className="mt-5 mb-3 d-flex" controlId="formBasicEmail">
              <Col sm={4}>
                <Form.Label className="">Etkinlik Adı </Form.Label>
              </Col>
              <Form.Control
                className="login-form-input "
                type="text"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group className="mt-4 d-flex">
              <Col sm={4}>
                <Form.Label className="">Etkinlik Açıklaması </Form.Label>
              </Col>
              <FloatingLabel
                className="login-form-input "
                controlId="floatingTextarea2"
                label="Comments"
              >
                <Form.Control as="textarea" style={{ height: "150px" }} />
              </FloatingLabel>
            </Form.Group>
          </Form>
        </Col>
        <Col md={6} className="mb-4">
          <Form style={{ marginLeft: "60px" }}>
            <Form.Group
              className="mt-5 mb-3 d-flex align-items-center justify-content-between"
              controlId="formBasicEmail"
            >
              <Form.Label className="">Etkinlik Alanı</Form.Label>
              {/* <Form.Control className="login-form-input " type="text" /> */}
              <select
                className="form-select login-form-input "
                aria-label="Default select example"
              >
                <option selected>Seçiniz</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </Form.Group>
            <Form.Group
              className="mt-5 mb-3 d-flex align-items-center justify-content-between"
              controlId="formBasicEmail"
            >
              <Form.Label className=""> Kontenjan</Form.Label>
              <Form.Control className="login-form-input " type="text" />
            </Form.Group>
            <Form.Group
              className="mt-5 mb-3 d-flex align-items-center justify-content-between"
              controlId="formBasicEmail"
            >
              <Form.Label className="">Etkinlik Tarihi</Form.Label>
              <Form.Control className="login-form-input " type="text" />
            </Form.Group>
          </Form>
        </Col>
        <Button
          onClick={homeSave}
          className="login-save-button mb- mt-5"
          variant="info"
        >
          Kaydet
        </Button>

        <TablePage
          EtNo="Etkinllik No"
          EtAdi="Etkinlik Adı"
          EtAciklamasi="Etkinlik Açıklaması"
          EtTarih="Etkinlik tarihi"
          EtKonum="Etkinlik Konumu"
          EtKontenjan="Etkinlik Kontenjan"
          EtBasvuru="Etkinlik Başvuru"
          EtKalKontnjan="Etkinlik Kalan Kontenjan"
          EtkinDuzenle="Düzenle"
          EtkinNo="1"
          EtkinAdi="Etkinlik 1"
          EtkinAcik="Açıklama 1"
          EtkinTarih="Tarih 1"
          EtkinKonum="Konum 1"
          EtkinKontenjan="Kontenjan 1"
          EtkinBasvuru="Başvuru 1"
          EtkinKalKontenjan="Kalan 1"
         />

        <Pagination className="pagination d-flex align-items-center justify-content-center mb-5">
          <div className="beforeLink">
            <a href="#">
              <Link to={"/"}>Önceki </Link>
            </a>
          </div>
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <div className="afterLink">
            <a href="#">
              <Link to={"/"}>Sonraki </Link>
            </a>
          </div>
        </Pagination>
      </Row>
    </Container>
  );
};

export default Home;