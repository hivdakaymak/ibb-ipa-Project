import React from "react";
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import Navbars from "../compenents/Navbar";
import UsersData from "./users.json";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'
const LoginPage = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const userHandler = (e) => {
    e.preventDefault();
    const userControl = UsersData.users.find(data=>data.name === name)
    if(userControl){
      if(userControl.password === password){
        console.log("mmm")
        
        localStorage.setItem("user-data",JSON.stringify(userControl))
        navigate("/events-var")
      }
    }
    console.log(UsersData.users);
  };

 
  return (
    <Container>
      <Row>
        <Navbars />
        <Col md={8}>
          <div className="login-page-form">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Adınız</Form.Label>
                <Form.Control
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>

              <button
                onClick={(e) => userHandler(e)}
                variant="primary"
                type="submit"
              >
                Submit
              </button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
