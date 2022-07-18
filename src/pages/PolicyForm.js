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
import { Formik } from "formik";
import * as Yup from "yup";

const policyformSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "En az 3 harfli olmalıdır")
    .max(5, "En fazla 5 harfli olabilir")
    .required("Lütfen adınızı Yazınız"),

  lastName: Yup.string()
    .min(3, "En az 3 harfli olmalıdır")
    .max(5, "En fazla 5 harfli olabilir")
    .required("Lütfen soyadınızı Yazınız"),

  idNo: Yup.string()
    .min(11, "Tc Kimlik Numaranız 11 haneden oluşmalıdır.")
    .required("Lütfen Tc Kimlik Numaranızı doldurunuz"),

  mail: Yup.string().email().required("Email is required"),

  phoneNumber: Yup.string()
    .matches(
      /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
      "Geçersiz Telefon Numarası !"
    )
    .required("Lütfen telefon numaranızı giriniz"),
  cardNo: Yup.string()
    .min(11, "İstanbul Kart Numaranız 11 haneden oluşmalıdır.")
    .required("Lütfen İstanbul Kart Numaranız doldurunuz"),
});

const formButton = () => {
  Swaler.fire({
    icon: "success",
    title: "Kaydedildi",
    text: "Başvurunuz kaydedildi",
    timer: 1500,
  });
};
const initialValues = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  idNo: "",
  mail: "",
  phoneNumber: "",
  cardNo: "",
};

const PolicyForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >

      
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
                <Form.Control
                  className="login-form-input "
                  name="firstName"
                  type="text"
                />
              </Form.Group>
              <Form.Group
                className="mt-3 d-flex align-items-center justify-content-between"
                controlId="formBasicEmail"
              >
                <Form.Label className="policyText"> Soyad</Form.Label>
                <Form.Control
                  className="login-form-input "
                  name="lastName"
                  type="text"
                />
              </Form.Group>
              <Form.Group
                className="mt-3 d-flex align-items-center justify-content-between"
                controlId="formBasicEmail"
              >
                <Form.Label className="policyText"> TCKN</Form.Label>
                <Form.Control
                  className="login-form-input "
                  name="idNo"
                  type="text"
                />
              </Form.Group>
              <Form.Group
                className="mt-3 d-flex align-items-center justify-content-between"
                controlId="formBasicEmail"
              >
                <Form.Label className="policyText"> E-Posta</Form.Label>
                <Form.Control
                  className="login-form-input "
                  name="mail"
                  type="text"
                />
              </Form.Group>
              <Form.Group
                className="mt-3 d-flex align-items-center justify-content-between"
                controlId="formBasicEmail"
              >
                <Form.Label className="policyText"> Telefon</Form.Label>
                <Form.Control
                  className="login-form-input "
                  name="phoneNumber"
                  type="text"
                />
              </Form.Group>
              <Form.Group
                className="mt-3 mb-5 d-flex align-items-center justify-content-between"
                controlId="formBasicEmail"
              >
                <Form.Label className="policyText">
                  {" "}
                  İstanbul Kart No
                </Form.Label>
                <InputGroup className="login-form-input ">
                  <Form.Control
                    className=" none-border-r"
                    name="cardNo"
                    type="text"
                  />
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
    </Formik>
  );
};

export default PolicyForm;
