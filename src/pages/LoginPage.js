import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Menu from "../compenents/Navbar";

import { Container, Row, Form, Button, Col } from "react-bootstrap";
import UsersData from "./users.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Lütfen adınızı yazınız"),
  lastName: Yup.string().required("Lütfen şifrenizi giriniz"),
});

const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const userHandler = (e) => {};

  return (
    <Container>
      <Menu title="Gİrİş Sayfası" />
      <Row>
        <Formik
          initialValues={{ firstName: "", lastName: "" }}
          validationSchema={validationSchema}
          // onSubmit={(e) => {
          //   handleSubmit(e);
          //   e.preventDefault();
          // }}

          onSubmit={(values, { setSubmitting }) => {
         
            console.log(values);
            const userControl = UsersData.users.find(
              (data) => data.name === values.name
            );
            if (userControl) {
              if (userControl.password === values.password) {
                localStorage.setItem("user-data", JSON.stringify(userControl));
                navigate("/events-var");
              }
            }
            console.log(UsersData.users);
          }}
        >
          {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
            //
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstName"
                placeholder="Ad"
                onChange={handleChange}
                values={values.firstName}
              />
              {errors.firstName && errors.firstName}

              <input
                type="text"
                name="lastName"
                placeholder="Şifre"
                onChange={handleChange}
                values={values.lastName}
              />
              {errors.lastName && errors.lastName}

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
            </form>
          )}
        </Formik>
      </Row>
    </Container>
  );
};

export default LoginPage;
