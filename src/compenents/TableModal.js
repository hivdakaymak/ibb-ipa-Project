import React, { useState } from "react";
import { Modal, Button, FloatingLabel } from "react-bootstrap";
import { FaEdit, FaRegEdit } from "react-icons/fa";
import TablePage from "../compenents/Table";
import Form from "react-bootstrap/Form";

function Modaler() {
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

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
              <Form.Control type="text" placeholder="Etkinlik Adı Yazınız" />
            </Form.Group>
            <Form.Label>Etkinlik Açıklaması</Form.Label>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Etkinlik Açıklaması"
                style={{ height: "80px" }}
              />
            </FloatingLabel>
            <Form.Label>Etkinlik Alanı</Form.Label>
            <Form.Select>
              <option>Alan 1</option>
              <option>Alan 2</option>
              <option>Alan 3</option>
              <option>Alan 4</option>
              <option>Alan 5</option>
            </Form.Select>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Kontenjan</Form.Label>
              <Form.Control type="text" placeholder="Kontenjan" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Etkinlik Tarihi</Form.Label>
              <Form.Control type="text" placeholder="Etkinlik Tarihi" />
            </Form.Group>

            <Button>Submit</Button>

            <Button className="editModalButton" Fvariant="primary">
              Kaydet <FaRegEdit />
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
}

export default Modaler;
