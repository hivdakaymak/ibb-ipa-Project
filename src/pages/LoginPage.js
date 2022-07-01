import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Menu from "../compenents/Navbar";

import { Container, Row, Form, Button, Col } from "react-bootstrap";
import UsersData from "./users.json";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addLoginUser } from "../store/actions/event";

const validationSchema = Yup.object({
  name: Yup.string().required("Lütfen adınızı yazınız"),
  password: Yup.string().required("Lütfen şifrenizi giriniz"),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [login, unLogin] = useState();

  console.log(localStorage.UsersData);

  useEffect(() => {
    if (localStorage.getItem('user-data')) {
      // console.log("user data");
      navigate("/events-var");
    } else {
      navigate("/");
      console.log("else çalışıyorr");
    }
  });

  return (
    <Container>
      <Menu title="Giriş Sayfası" />
      <Row>
        <Formik
          initialValues={{ name: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            // console.log(values);
            const userControl = UsersData.users.find(
              (data) => data.name === values.name
            );
            if (userControl) {
              if (userControl.password === values.password) {
                // dispatch(addLoginUser(userControl.name));
                localStorage.setItem("user-data", JSON.stringify(userControl));
                navigate("/events-var");
              }
            }
            console.log(UsersData.users);
          }}
        >
          {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
            //
            <Form
              className="d-flex align-items-center justify-content-center mt-5"
              onSubmit={handleSubmit}
            >
              <Form.Group
                className="mb-3 "
                style={{ marginRight: "20px" }}
                controlId="formBasicEmail"
              >
                <Form.Label>Adınız</Form.Label>
                <Form.Control
                  name="name"
                  onChange={handleChange}
                  values={values.name}
                  type="text"
                  placeholder="Adınızı giriniz"
                />
                {errors.name && errors.name}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Şifreniz</Form.Label>
                <Form.Control
                  name="password"
                  placeholder="Şifrenizi giriniz"
                  onChange={handleChange}
                  values={values.password}
                  type="password"
                />
                {errors.password && errors.password}
              </Form.Group>

              <button
                variant="primary"
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "15%",
                  border: "none",
                  background: "rgb(13, 202, 240)",
                  padding: "7px",
                  color: "white",
                  borderRadius: "6px",
                  marginTop: "16px",
                  marginLeft: "20px",
                }}
              >
                Giriş Yap
              </button>
            </Form>
          )}
        </Formik>
      </Row>
    </Container>
  );
};

export default LoginPage;
