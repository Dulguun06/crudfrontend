import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";
import axios from "axios";

const SignUp = ({ onSubmit }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group
        className="mb-3"
        controlId="formBasicEmail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      >
        <Form.Control name="user_mail" type="email" placeholder="E-Mail" />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicUserName"
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
        <Form.Control name="user_name" type="text" placeholder="User Name" />
      </Form.Group>

      <Form.Group
        className="mb-3"
        controlId="formBasicPassword"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      >
        <Form.Control name="password" type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="light" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    axios.post(`/index/login`).then((res) => {
      const sysUser = res.data;
      this.setState({ sysUser });
    });
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSignUpFormSubmit = (e) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <Container>
      <Row>
        <Col mx={6} className="welcome">
          <h1>Student Dashboard 🌍 </h1>
        </Col>

        <Col mx={6}>
          <div className="glass">
            <h2>Welcome 🤗</h2>

            <Form>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              >
                <Form.Control
                  name="user_mail"
                  type="text"
                  placeholder="E-Mail"
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

              <Button variant="light" type="submit" onClick={handleClick}>
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

              <Modal show={show}>
                <Modal.Header closeButton>
                  <Modal.Title>Sign Up Form</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <SignUp onSubmit={onSignUpFormSubmit} />
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="light" onClick={handleClose}>
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
