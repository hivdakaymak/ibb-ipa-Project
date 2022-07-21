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
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import Table from "react-bootstrap/Table";

const policyformSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "En az 3 harfli olmalıdır")
    .required("Zorunlu Alan"),

  lastName: Yup.string()
    .min(3, "En az 3 harfli olmalıdır")
    .required("Zorunlu Alan"),

  idNo: Yup.string()
    .min(11, "Tc Kimlik Numaranız 11 haneden oluşmalıdır.")
    .required("Zorunlu Alan"),

  mail: Yup.string().email("geçersiz E-mail").required("Zorunlu alan"),

  phoneNumber: Yup.number()
    .required("Lütfen geçerli bir telefon numarası giriniz")
    .min(7, "En az 7 Haneden oluşmalıdır")
    .max(15, "En fazla 15 haneden oluşabilir."),

  cardNo: Yup.string()
    .min(11, "İstanbul Kart Numaranız 11 haneden oluşmalıdır.")
    .required("Zorunlu Alan"),

  consentText: Yup.bool().oneOf([true], "Lütfen onaylayınız"),

  kvkk: Yup.bool().oneOf([true], "Lütfen onaylayınız"),
});

const submitForm = (values) => {
  console.log(values);
};

const PolicyForm = () => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          idNo: "",
          mail: "",
          phoneNumber: "",
          cardNo: "",
          consentText: false,
          kvkk: false,
        }}
        validationSchema={policyformSchema}
        onSubmit={(values) => {
          console.log(values);
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
                      className={
                        errors.firstName && touched.firstName
                          ? "input-error"
                          : "input-succes"
                      }
                    />
                  </Form.Group>
                  <div className="policyFormError d-flex justify-content-end">
                    {errors.firstName && touched.firstName
                      ? errors.firstName
                      : null}
                  </div>
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
                      onChange={handleChange}
                      values={values.lastName}
                      className={errors.lastName ? "input-error" : ""}
                    />
                  </Form.Group>
                  <div className="policyFormError d-flex justify-content-end">
                    {" "}
                    {errors.lastName ? errors.lastName : null}
                  </div>
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
                      onChange={handleChange}
                      values={values.idNo}
                      className={errors.idNo ? "input-error" : ""}
                    />
                  </Form.Group>{" "}
                  <div className="policyFormError d-flex justify-content-end">
                    {" "}
                    {errors.idNo ? errors.idNo : null}
                  </div>
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
                      name="mail"
                      type="mail"
                      onChange={handleChange}
                      values={values.mail}
                      className={errors.mail ? "input-error" : ""}
                    />
                  </Form.Group>{" "}
                  <div className="policyFormError d-flex justify-content-end">
                    {" "}
                    {errors.mail ? errors.mail : null}
                  </div>
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
                      type="number"
                      onChange={handleChange}
                      values={values.phoneNumber}
                      className={errors.phoneNumber ? "input-error" : ""}
                    />
                  </Form.Group>
                  <div className="policyFormError d-flex justify-content-end">
                    {" "}
                    {errors.phoneNumber ? errors.phoneNumber : null}
                  </div>
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
                        className={errors.cardNo ? "input-error" : ""}
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
                      <Form.Check
                        type="checkbox"
                        name="consentText"
                        label="Açık Rıza Metni"
                      />
                    </Form.Group>
                    <div className="policyFormError d-flex justify-content-end">
                      {" "}
                      {errors.consentText ? errors.consentText : null}
                    </div>
                    <Form.Group
                      className="mb-3 policy-check"
                      controlId="formBasicCheckbox"
                    >
                      <Form.Check type="checkbox" label="KVKK" name="kvkk" />
                    </Form.Group>
                    <div className="policyFormError d-flex justify-content-end">
                      {" "}
                      {errors.kvkk ? errors.kvkk : null}
                    </div>
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
            <Row className="d-flex align-items-center justify-content-center">
              <Col className="mb-5" md={9}>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr className="policy-form-heading">
                      <th>id</th>
                      <th>Ad</th>
                      <th>Soyad</th>
                      <th>TC Kimlik No</th>
                      <th>E-Posta</th>
                      <th>Telefon</th>
                      <th>İstanbul Kart No</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>hivda</td>
                      <td>Kaymak</td>
                      <td>0123456789</td>
                      <td>miray@gmail.com</td>
                      <td>x xxx xxx xx xx</td>
                      <td>1 231 25645 25</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>eda ♥</td>
                      <td>aydın</td>
                      <td>0123456789</td>
                      <td>eda@gmail.com</td>
                      <td>x xxx xxx xx xx</td>
                      <td>1 231 25645 25</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        )}
      </Formik>
    </>
  );
};

export default PolicyForm;
