import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import RoutingForm from "../forms/RoutingForm";

export default function RoutingCard() {
  return (
    <div className="routingcard">
      <span className="border border-2">
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>Enter Your Location</Card.Title>
            <RoutingForm></RoutingForm>
          </Card.Body>
        </Card>
      </span>
    </div>
  );
}

