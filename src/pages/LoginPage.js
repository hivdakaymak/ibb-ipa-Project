import React from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Navbars from "../compenents/Navbar";
import UsersData from "./users.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik } from "formik";
const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userHandler = (e) => {};

  return (
    <Container>
      <Row>
        <Navbars />
        <Col md={12}>
          <div className="login-page-form d-flex align-items-center justify-content-center">
            <Formik
              initialValues={{ name: "", password: "" }}
              validate={(values) => {
                const errors = {};
                if (!values.name) {
                  errors.name = "Required";
                }
                if(!values.password){
                  errors.password = "sdfönsdf"
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                const userControl = UsersData.users.find(
                  (data) => data.name === values.name
                );
                if (userControl) {
                  if (userControl.password === values.password) {
                    localStorage.setItem(
                      "user-data",
                      JSON.stringify(userControl)
                    );
                    navigate("/events-var");
                  }
                }
                console.log(UsersData.users);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <Form
                  onSubmit={(e) => {
                    handleSubmit(e);
                    e.preventDefault();
                  }}
                  style={{ width: "70%", marginTop: "50px" }}
                >
                  <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Adınız</Form.Label>
                    <Form.Control
                      onChange={handleChange}
                      type="text"
                      placeholder="Enter name"
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    {errors.name && touched.name && errors.name}
                    <Form.Control
                      onChange={handleChange}
                      type="password"
                      placeholder="Password"
                      onBlur={handleBlur}
                    />
                    {errors.password && touched.password && errors.password}
                  </Form.Group>

                  <button
                    variant="primary"
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: "15%",
                      border: "none",
                      background: "#0dcaf0",
                      padding: "10px",
                      color: "white",
                    }}
                  >
                    Giriş Yap
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
