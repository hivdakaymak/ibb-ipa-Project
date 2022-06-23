import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";

function EditModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FaEdit />
      </Button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title className="editModalTitle">Etkinlik Düzenle</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Etinlik Adı</Form.Label>
              <Form.Control
                type="text"
                placeholder="Yeni Etkinlik Adını Giriniz"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="editModalButton" variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className="editModalButton" Fvariant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
