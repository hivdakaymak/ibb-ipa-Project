import React from "react";
import { Container, Row, Col, Form, Button, InputGroup } from "react-bootstrap";
import Menu from "../compenents/Navbar";
import Modaler from "../compenents/Modal";
import Swaler from "sweetalert2";
import { useFormik, Formik } from "formik";
import * as Yup from "yup";
import Table from "react-bootstrap/Table";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEventPolicyForm } from "../store/actions/event";

const policyformSchema = Yup.object({
  firstName: Yup.string()
    .min(3, "En az 3 harfli olmalıdır")
    .required("Zorunlu Alan"),

  lastName: Yup.string()
    .min(3, "En az 3 harfli olmalıdır")
    .required("Zorunlu Alan"),

  TcNo: Yup.string()
    .min(11, "Tc Kimlik Numaranız 11 haneden oluşmalıdır.")
    .required("Zorunlu Alan"),

  mail: Yup.string().email("geçersiz E-mail").required("Zorunlu alan"),

  phoneNumber: Yup.number()
    .required("Lütfen geçerli bir telefon numarası giriniz")
    .min(10, "En az 10 Haneden oluşmalıdır"),

  cardNo: Yup.string()
    .min(11, "İstanbul Kart Numaranız 11 haneden oluşmalıdır.")
    .required("Zorunlu Alan"),

  consentText: Yup.bool().oneOf([true], "Lütfen onaylayınız"),

  kvkk: Yup.bool().oneOf([true], "Lütfen onaylayınız"),
});

const submitForm = (values) => {
  // console.log(values);
};

const PolicyForm = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [tcNo, setTcNo] = useState("");
  const [mail, setMail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cardNo, setCardNo] = useState("");
  const events = useSelector((state) => state.eventList);

  const dispatch = useDispatch();

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          TcNo: "",
          mail: "",
          phoneNumber: "",
          cardNo: "",
          consentText: false,
          kvkk: false,
        }}
        validationSchema={policyformSchema}
        onSubmit={(values) => {
          dispatch(addEventPolicyForm(values));
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
          setFieldValue,
        }) => (
          <Container>
            <Row>
              <Menu title="SOSYAL POLİTİKALAR ÇALIŞTAYI BAŞVURU FORMU" />

              <Col md={9} className="policyForm mt-5">
                {JSON.stringify(values, null, 2)}
                <pre>{JSON.stringify(errors, null, 2)}</pre>
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
                      values={values.firstName}
                      onChange={handleChange}
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
                      // onChange={(e) => {
                      //   handleChange();
                      //   setLastName(e.target.value);
                      // }}
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
                      name="TcNo"
                      type="number"
                      onChange={handleChange}
                      values={values.TcNo}
                      className={errors.TcNo ? "input-error" : ""}
                    />
                  </Form.Group>{" "}
                  <div className="policyFormError d-flex justify-content-end">
                    {" "}
                    {errors.TcNo ? errors.TcNo : null}
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
                        checked={values.consentText}
                        onChange={handleChange}
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
                      <Form.Check
                        checked={values.kvkk}
                        type="checkbox"
                        label="KVKK"
                        name="kvkk"
                        onChange={handleChange}
                      />
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
                    {isValid && dirty && (
                      <Button
                        type="submit"
                        className=" mb- mt-5"
                        variant="danger"
                        // disabled={!(isValid && dirty)}
                      >
                        Kaydet
                      </Button>
                    )}
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
                    {events.length > 0 &&
                      events.map((event, x) => {
                        return (
                          <tr key={x}>
                            <td>{x + 1}</td>
                            <td>{event.firstName}</td>
                            <td>{event.lastName}</td>
                            <td>{event.TcNo}</td>
                            <td>{event.mail}</td>
                            <td>{event.phoneNumber}</td>
                            <td>{event.cardNo}</td>
                            {/* 
                            <td className="editIcon">
                              <TableModaler id={event.id} />
                            </td> */}
                          </tr>
                        );
                      })}
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
