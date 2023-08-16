import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";

export default function SignUp() {
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const admin = { mail, name, password };
    console.log(admin);
  };
  return (
      <Row>
        <Col mx={6}>
          <div className="glass">
            <h2>Sign Up</h2>

            <Form>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
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

              <Button variant="light" type="submit" onClick={handleClick}>
                Sign Up
              </Button>

            </Form>
          </div>
        </Col>
      </Row>
  );
}
