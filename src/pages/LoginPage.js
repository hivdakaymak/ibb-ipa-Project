import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Menu from "../compenents/Navbar";

import { Container, Row, Form, Button, Col } from "react-bootstrap";
import UsersData from "./users.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  name: Yup.string().required("Lütfen adınızı yazınız"),
  password: Yup.string().required("Lütfen şifrenizi giriniz"),
});

const LoginPage = () => {

  const navigate = useNavigate();


  return (
    <Container>
      <Menu title="Giriş Sayfası" />
      <Row>
        <Formik
          initialValues={{ name: "", password: "" }}
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
              console.log("🌵💜🐢", "controll")

              if (userControl.password === values.password) {
                console.log("🌵💜🐢", "burada")

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
                name="name"
                placeholder="Ad"
                onChange={handleChange}
                values={values.name}
              />
              {errors.name && errors.name}

              <input
                type="text"
                name="password"
                placeholder="Şifre"
                onChange={handleChange}
                values={values.password}
              />
              {errors.password && errors.password}

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
