import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import TablePage from "../compenents/Table";

function Modaler() {
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="d-flex align-items-center justify-content-center modal-button">
        <bugtton variant="primary" onClick={handleShow}>
          <FaEdit />
        </bugtton>
      </div>
      <Modal className="tableModal" show={showModal} onHide={handleClose}>
        <Modal.Title>Düzenleme Alanı</Modal.Title>

        <Modal.Body>
          Tablo düzenlenecek alanlar
          <p>Hello</p>
        </Modal.Body>

        <Button
          className="modalClose"
          variant="secondary"
          onClick={handleClose}
        >
          X
        </Button>
      </Modal>
    </>
  );
}

export default Modaler;
