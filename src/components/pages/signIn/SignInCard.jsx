import React from "react";
import { Form, Card, Button } from 'react-bootstrap';
import './SignInCard.css'; 

export default function SignInCard() {
  return (
    <div className="signInCardContainer">
      <Card className="signInCard">
        <Card.Body>
          <Card.Title>Sign In</Card.Title>
          <Form>
            <Form.Group className="UserName" controlId="formUserName">
              <Form.Label>Username:</Form.Label>
              <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="PassWord" controlId="formPassword">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button variant="dark" type="submit">Submit</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
