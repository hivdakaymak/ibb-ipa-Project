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
import { useFormik, Formik } from 'formik';
import * as Yup from "yup";

const policyformSchema = Yup.object({
  firstName: Yup.string()
    .label("Lütfen adınızı giriniz")
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

const submitForm = (values) => {
  console.log(values);
};

const PolicyForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: ''
        }}
        validationSchema={policyformSchema}
        onSubmit= {values => {
          console.log(values)
        }}
      >
        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        }) => (
          <Container>
            <Row>
              <Menu title="SOSYAL POLİTİKALAR ÇALIŞTAYI BAŞVURU FORMU" />

              <Col md={9} className="policyForm mt-5">
                <Form className="" onSubmit={handleSubmit}>
                  <Form.Group
                    className="mt-3 d-flex align-items-center justify-content-between"
                    controlId="formBasicEmail"
                  >
                    <Col
                      md={2}
                      className="d-flex align-items-center justify-content-"
                    >
                      <Form.Label className=""> Ad</Form.Label>
                    </Col>
                    <Form.Control
                      name="firstName"
                      type="text"
                      onChange={handleChange}
                      values={values.firstName}
                    />
                    {errors.firstName ? errors.firstName : null}
                  </Form.Group>
                  <Form.Group
                    className="mt-3 d-flex align-items-center justify-content-between"
                    controlId="formBasicEmail"
                  >
                    <Col
                      md={2}
                      className="d-flex align-items-center justify-content-"
                    >
                      <Form.Label className=""> Soyad</Form.Label>
                    </Col>
                    <Form.Control
                      name="lastName"
                      type="text"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mt-3 d-flex align-items-center justify-content-between"
                    controlId="formBasicEmail"
                  >
                    <Col
                      md={2}
                      className="d-flex align-items-center justify-content-"
                    >
                      <Form.Label className=""> TCKN</Form.Label>
                    </Col>
                    <Form.Control
                      name="idNo"
                      type="text"
                      value={values.idNo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mt-3 d-flex align-items-center justify-content-between"
                    controlId="formBasicEmail"
                  >
                    <Col
                      md={2}
                      className="d-flex align-items-center justify-content-"
                    >
                      <Form.Label className=""> E-Posta</Form.Label>
                    </Col>
                    <Form.Control
                      name="email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mt-3 d-flex align-items-center justify-content-between"
                    controlId="formBasicEmail"
                  >
                    <Col
                      md={2}
                      className="d-flex align-items-center justify-content-"
                    >
                      <Form.Label className=""> Telefon</Form.Label>
                    </Col>
                    <Form.Control
                      name="phoneNumber"
                      type="text"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group
                    className="mt-3 mb-5 d-flex align-items-center justify-content-between"
                    controlId="formBasicEmail"
                  >
                    <Col
                      md={2}
                      className="d-flex align-items-center justify-content-start"
                    >
                      <Form.Label className=""> İstanbul Kart No</Form.Label>
                    </Col>
                    <InputGroup className="login-form-input ">
                      <Form.Control
                        // className="login-form-input "
                        name="cardNo"
                        type="text"
                        value={values.cardNo}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={
                          errors.cardNo && touched.cardNo
                            ? "input-error "
                            : null
                        }
                      />
                      {errors.cardNo && touched.cardNo && (
                        <div className="error policyFormError">
                          {errors.cardNo}
                        </div>
                      )}
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
                    className="d-flex align-items-center justify-content-center policyFormButton mb-5"
                  >
                    <Button
                      // onClick={formButton}
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
        )}
      </Formik>
    </>
  );
};

export default PolicyForm;
