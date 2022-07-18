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

// Kaydedildi Uyarısı

// const formButton = () => {
//   Swaler.fire({
//     icon: "success",
//     title: "Kaydedildi",
//     text: "Başvurunuz kaydedildi",
//     timer: 1500,
//   });
// };
const initialValues = {
  email: "",
  firstName: "",
  lastName: "",
  idNo: "",
  mail: "",
  phoneNumber: "",
  cardNo: "",
};

const validate = (values) => {
  let errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

  if (!values.email) {
    errors.email = "Lütfen E-mail adresinizi giriniz";
  } else if (!regex.test(values.email)) {
    errors.email = "Geçersiz E-mail";
  }

  if (!values.firstName) {
    errors.firstName = "Lütfen adınızı giriniz";
  } else if (values.firstName.length < 3) {
    errors.firstName = "Adınız en az 3 harften oluşmalıdır";
  }

  if (!values.lastName) {
    errors.lastName = "Lütfen soyadınızı giriniz";
  } else if (values.lastName.length < 3) {
    errors.lastName = "Soyadınız en az 3 harften oluşmalıdır";
  }

  if (!values.idNo) {
    errors.idNo = "Lütfen şifrenizi giriniz";
  } else if (values.idNo.length < 11) {
    errors.idNo = "  Tc Kimlik 11 haneden oluşmalıdır";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Lütfen telefon numaranızı giriniz";
  } else if (values.phoneNumber.length < 11) {
    errors.phoneNumber = "Telefon numarası haneden oluşmalıdır";
  }

  if (!values.cardNo) {
    errors.cardNo = "Lütfen kart numaranızı giriniz";
  } else if (values.cardNo.length < 10) {
    errors.cardNo = "Kart no 10 haneden oluşmalıdır";
  }
  return errors;
};

const submitForm = (values) => {
  console.log(values);
};

const PolicyForm = () => {
  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={submitForm}
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
                    <Form.Label className=""> Ad</Form.Label>
                    <Form.Control
                      // className="login-form-input "
                      name="firstName"
                      type="text"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.firstName && touched.firstName
                          ? "input-error login-form-input"
                          : null
                      }
                    />
                    {errors.firstName && touched.firstName && (
                      <span className="error policyFormError">
                        {errors.firstName}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mt-3 d-flex align-items-center justify-content-between"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="policyText"> Soyad</Form.Label>
                    <Form.Control
                      // className="login-form-input "
                      name="lastName"
                      type="text"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.lastName && touched.lastName
                          ? "input-error login-form-input"
                          : null
                      }
                    />
                    {errors.lastName && touched.lastName && (
                      <span className="error policyFormError">
                        {errors.lastName}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mt-3 d-flex align-items-center justify-content-between"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="policyText"> TCKN</Form.Label>
                    <Form.Control
                      // className="login-form-input "
                      name="idNo"
                      type="text"
                      value={values.idNo}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.idNo && touched.idNo ? "input-error " : null
                      }
                    />
                    {errors.idNo && touched.idNo && (
                      <span className="error policyFormError">
                        {errors.idNo}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mt-3 d-flex align-items-center justify-content-between"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="policyText"> E-Posta</Form.Label>
                    <Form.Control
                      // className="login-form-input "
                      name="email"
                      type="text"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.email && touched.email
                          ? "input-error login-form-input"
                          : null
                      }
                    />
                    {errors.email && touched.email && (
                      <span className="error policyFormError">
                        {errors.email}
                      </span>
                    )}
                  </Form.Group>
                  <Form.Group
                    className="mt-3 d-flex align-items-center justify-content-between"
                    controlId="formBasicEmail"
                  >
                    <Form.Label className="policyText"> Telefon</Form.Label>
                    <Form.Control
                      // className="login-form-input "
                      name="phoneNumber"
                      type="text"
                      value={values.phoneNumber}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.phoneNumber && touched.phoneNumber
                          ? "input-error "
                          : null
                      }
                    />
                    {errors.phoneNumber && touched.phoneNumber && (
                      <span className="error policyFormError">
                        {errors.phoneNumber}
                      </span>
                    )}
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
                        <span className="error policyFormError">
                          {errors.cardNo}
                        </span>
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
                    className="d-flex align-items-cengter justify-content-center policyFormButton mb-5"
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
