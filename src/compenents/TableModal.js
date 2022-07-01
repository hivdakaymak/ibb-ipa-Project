import React, { useState } from "react";
import { Modal, Button, FloatingLabel } from "react-bootstrap";
import { FaEdit, FaRegEdit, FaEraser } from "react-icons/fa";
import TablePage from "../compenents/Table";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import {
  addEvent,
  addEventHome,
  deleteEvent,
  updatedEvent,
} from "../store/actions/event";

function Modaler(id) {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [place, setPlace] = useState("");
  const [kont, setKont] = useState("");
  const [date, setDate] = useState("");

  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateHandle = (e) => {
    e.preventDefault();
    const newData = {
      name: name,
      desc: desc,
      place: place,
      date: kont,
      kont: date,
    };
    console.log("a");
    if (
      name.trim() ||
      desc.trim() ||
      place.trim() ||
      kont.trim() ||
      date.trim()
    ) {
      console.log("b");
      dispatch(deleteEvent(id));
      dispatch(addEventHome(newData));
      handleClose();
    }
  };

  return (
    <>
      <Button onClick={() => setSmShow(true)} className="me-2 homeEditButton">
        <FaEdit />
      </Button>

      <Modal
        size="lg"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Etkinlikk Düzenleme
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Etkinlik Adı</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Etkinlik Adı Yazınız"
              />
            </Form.Group>
            <Form.Label>Etkinlik Açıklaması</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                onChange={(e) => setDesc(e.target.value)}
                as="textarea"
                placeholder="Etkinlik Açıklaması"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <Form.Label>Etkinlik Alanı</Form.Label>
            <Form.Select
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            >
              <option>Alan 1</option>
              <option>Alan 2</option>
              <option>Alan 3</option>
              <option>Alan 4</option>
              <option>Alan 5</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Kontenjan</Form.Label>
              <Form.Control
                onChange={(e) => setKont(e.target.value)}
                type="text"
                placeholder="Kontenjan"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Etkinlik Tarihi</Form.Label>
              <Form.Control
                onChange={(e) => setDate(e.target.value)}
                type="text"
                placeholder="Etkinlik Tarihi"
              />
            </Form.Group>

            <Button
              onClick={(e) => updateHandle(e)}
              className="editModalButton"
              Fvariant="primary"
              style={{ marginRight: "20px" }}
            >
              Kaydet <FaRegEdit />
            </Button>

            <Button
              className="editModalButton"
              Fvariant="primary"
              onClick={(e) => dispatch(deleteEvent(id))}
            >
              Sil
              <FaEraser />
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      ></Modal>
    </>
  );
}

export default Modaler;
