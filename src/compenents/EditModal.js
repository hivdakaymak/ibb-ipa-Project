import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { FaEdit, FaRegTimesCircle, FaRegEdit, FaEraser } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteEvent, updatedEvent } from "../store/actions/event";

function EditModal(id) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateHandle = () => {
    const newData = {
      id: id.id,
      title: text,
    };
    if (text.trim()) {
      dispatch(updatedEvent(newData));
      handleClose();
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        <FaEdit />
      </Button>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title className="editModalTitle">
            Etkinlik Düzenle {id.id}{" "}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Etinlik Adı</Form.Label>
              <Form.Control
                type="text"
                placeholder="Yeni Etkinlik Adını Giriniz"
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="editModalButton"
            variant="secondary"
            onClick={handleClose}
          >
            Kapat <FaRegTimesCircle />
          </Button>
          <Button onClick={updateHandle} className="editModalButton" Fvariant="primary">
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
        </Modal.Footer>
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    events: state.liste,
  };
};

export default EditModal;
