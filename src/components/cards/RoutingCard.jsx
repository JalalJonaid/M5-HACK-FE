import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import RoutingForm from "../forms/RoutingForm";
import './routingCard.css'

export default function RoutingCard({setRouteData}) {
  return (
    <div className="routingcard">
      <span className="border border-2">
        <Card className="form" style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>Enter Your Location</Card.Title>
            <RoutingForm setRouteData={setRouteData}/>
          </Card.Body>
        </Card>
      </span>
    </div>
  );
}

