import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import RoutingForm from "../forms/RoutingForm";

export default function RoutingCard() {
    return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Enter Your Location</Card.Title>
        <RoutingForm></RoutingForm>
        <Button variant="dark">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
      );
}
