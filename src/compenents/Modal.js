import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { FaRegQuestionCircle } from "react-icons/fa";

function Modaler() {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center modal-button"
        // style={{ height: "100vh" }}
      >
        <Button variant="primary" onClick={handleShow}>
          <FaRegQuestionCircle />
        </Button>
      </div>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Title>İstanbul Kart Numarası Nedir?</Modal.Title>

        <Modal.Body>
          İstanbul Kart numarası, kartları birbirinden ayırt etmeye yarayan,
          kredi kartı numarasına benzer tekil bir numaradır. İstanbul
          Kart’ınızın önündeki 16 haneli numara veya arkasındaki ’04’ ile
          başlayan 14 haneli numaradır. Her iki numara da dolum yapmak için
          kullanılabilir.
        </Modal.Body>
        <Modal.Title>İstanbul Kart Numarası Nerededir?</Modal.Title>
        <Modal.Body>
          <img style={{width:"100%"}} src={"/img/ik.png"} />
        </Modal.Body>

        <Button className="modalClose" variant="secondary" onClick={handleClose}>
          X
        </Button>
      </Modal>
    </>
  );
}

export default Modaler;
