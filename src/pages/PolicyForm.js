import React from "react";
import {
  Container,
  Row,
  Navbar,
  Col,
  Form,
  Button,
  InputGroup,
} from "react-bootstrap";
import Menu from "../compenents/Navbar";
import Modaler from "../compenents/Modal";
import Swaler from "sweetalert2";

const formButton = () => {
  Swaler.fire({
    icon: "success",
    title: "Kaydedildi",
    text: "Başvurunuz kaydedildi",
    timer: 1500,
  });
};

const PolicyForm = () => {
  return (
    <Container>
      <Row>
        <Menu title="SOSYAL POLİTİKALAR ÇALIŞTAYI BAŞVURU FORMU" />

        <Col md={9} className="policyForm mt-5">
          <Form className="">
            <Form.Group
              className="mt-3 d-flex align-items-center justify-content-between"
              controlId="formBasicEmail"
            >
              <Form.Label className=""> Ad</Form.Label>
              <Form.Control className="login-form-input " type="text" />
            </Form.Group>
            <Form.Group
              className="mt-3 d-flex align-items-center justify-content-between"
              controlId="formBasicEmail"
            >
              <Form.Label className="policyText"> Soyad</Form.Label>
              <Form.Control className="login-form-input " type="text" />
            </Form.Group>
            <Form.Group
              className="mt-3 d-flex align-items-center justify-content-between"
              controlId="formBasicEmail"
            >
              <Form.Label className="policyText"> TCKN</Form.Label>
              <Form.Control className="login-form-input " type="text" />
            </Form.Group>
            <Form.Group
              className="mt-3 d-flex align-items-center justify-content-between"
              controlId="formBasicEmail"
            >
              <Form.Label className="policyText"> E-Posta</Form.Label>
              <Form.Control className="login-form-input " type="text" />
            </Form.Group>
            <Form.Group
              className="mt-3 d-flex align-items-center justify-content-between"
              controlId="formBasicEmail"
            >
              <Form.Label className="policyText"> Telefon</Form.Label>
              <Form.Control className="login-form-input " type="text" />
            </Form.Group>
            <Form.Group
              className="mt-3 mb-5 d-flex align-items-center justify-content-between"
              controlId="formBasicEmail"
            >
              <Form.Label className="policyText"> İstanbul Kart No</Form.Label>
              <InputGroup className="login-form-input ">
                <Form.Control className=" none-border-r" type="text" />
                <div className="input-group-prepend  ">
                  <div class="input-group-text none-border-l  bg-transparent p-0 border-left-0">
                    <Modaler />
                  </div>
                </div>
              </InputGroup>
            </Form.Group>
            <div className="d-flex justify-content-center">
              <Form.Group
                className="mb-3 policy-check"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" label="Açık Rıza Metni" />
              </Form.Group>
              <Form.Group
                className="mb-3 policy-check"
                controlId="formBasicCheckbox"
              >
                <Form.Check type="checkbox" label="KVKK" />
              </Form.Group>
            </div>
            <Col
              md={12}
              className="d-flex align-items-cengter justify-content-center policyFormButton mb-5"
            >
              <Button
                onClick={formButton}
                className="login-save-button mb- mt-5"
                variant="info"
              >
                Kaydet
              </Button>
            </Col>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PolicyForm;
