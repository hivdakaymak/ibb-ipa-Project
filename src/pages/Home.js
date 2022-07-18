import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  FloatingLabel,
  Pagination,
} from "react-bootstrap";

import Menu from "../compenents/Navbar";
import Swaler from "sweetalert2";
import TablePage from "../compenents/Table";
import { useState } from "react";
import { addEventHome } from "../store/actions/event";
import { useDispatch, useSelector } from "react-redux";

const homeSave = () => {
  Swaler.fire({
    icon: "success",
    title: "Kaydedildi",
    text: "Başvurunuz kaydedildi",
    timer: 1500,
  });
};

const Home = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [place, setPlace] = useState("");
  const [kont, setKont] = useState("");
  const [date, setDate] = useState("");
  const dispatch = useDispatch();
  const submitEvent = (e) => {
    e.preventDefault();

    if (name.trim()) {
      const newEvent = {
        name: name,
        desc: desc,
        place: place,
        date: date,
        kont: kont,
      };

      dispatch(addEventHome(newEvent));
      setName("");
      setDesc("");
      setPlace("");
      setDate("");
      setKont("");
    }
  };
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
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="login-form-input "
                type="text"
                placeholder="Etkinlik Adı Giriniz"
                required
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
                <Form.Control
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  as="textarea"
                  required
                  style={{ height: "150px" }}
                />
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
              <Form.Label className=""> Etkinlik Alanı</Form.Label>
              <Form.Control
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder={"Etkinlik alanı giriniz"}
                className="login-form-input "
                type="text"
                required
              />
            </Form.Group>

            <Form.Group
              className="mt-5 mb-3 d-flex align-items-center justify-content-between"
              controlId="formBasicEmail"
            >
              <Form.Label className=""> Kontenjan</Form.Label>
              <Form.Control
                value={kont}
                onChange={(e) => setKont(e.target.value)}
                className="login-form-input "
                placeholder="Kontenjan giriniz"
                type="number"
                required
              />
            </Form.Group>
            <Form.Group
              className="mt-5 mb-3 d-flex align-items-center justify-content-between"
              controlId="formBasicEmail"
            >
              <Form.Label className="">Etkinlik Tarihi</Form.Label>
              <Form.Control
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="login-form-input "
                type="date"
                placeholder="Etkinlik tarihi"
                required
              />
            </Form.Group>
          </Form>
        </Col>
        <Button
          onClick={(e) => {
            submitEvent(e);
          }}
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
