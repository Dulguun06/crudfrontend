import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

export default function Login() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    const admin = { mail, password };
    console.log(admin);
  };

  return (
    <Container>
      <Row>
        <Col mx={6} className="welcome">
          <h1>Welcome page 🌍 </h1>
        </Col>

        <Col mx={6}>
          <div className="glass">
            <h2>Login</h2>

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

              <Button variant="link" type="submit" id="sign_up">
                Or Sign up
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
