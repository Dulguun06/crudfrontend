import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";
import { redirect } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    axios
      .post("index/login", {
        userMail: email,
        password: password,
      })
      .then((res) => {
        if (res == 200 || res == "OK") {
          window.location.href = "/dashboard";
        }
        else return redirect("/login");
      });
    
  };
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };
  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  // const addUser = (e) => {
  //   axios
  //     .post("/api/sysblabla", { mail: email, name: name, password: password })
  //     .then((res) => {
  //       if (res != null) {
  //         handleClose();
  //       }
  //     });
  // };

  return (
    <Container>
      <Row>
        <Col mx={6} className="welcome">
          <h1>Student Dashboard 🌍 </h1>
        </Col>

        <Col mx={6} className="glass">
          <h2>Welcome 🤗</h2>

          <Form>
            <Form.Group
              className="mb-3"
              controlId="formBasicEmail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            >
              <Form.Control name="user_mail" type="mail" placeholder="E-Mail" />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="formBasicPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            >
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button
              variant="light"
              type="submit"
              onClick={(e) => handleClick(e)}
            >
              Login
            </Button>

            <Button
              variant="link"
              type="submit"
              id="sign_up"
              onClick={handleShow}
            >
              Or Sign up
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Sign Up Form</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  >
                    <Form.Control
                      name="user_mail"
                      type="email"
                      placeholder="E-Mail"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicUserName"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  >
                    <Form.Control
                      name="user_name"
                      type="text"
                      placeholder="User Name"
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  >
                    <Form.Control
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                {/* <Button variant="light" type="submit" onClick={addUser}>
                    Sign Up
                  </Button> */}
                <Button variant="light" onClick={handleClose}>
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
