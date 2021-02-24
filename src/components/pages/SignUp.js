import React, { useState } from "react";
import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import { Button } from '../Button';
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Em.</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            placeholder="Your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group size="lg" controlId="password">
          <Form.Label>......</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>


        <Button block size="lg" buttonStyle='btn--outline' type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
