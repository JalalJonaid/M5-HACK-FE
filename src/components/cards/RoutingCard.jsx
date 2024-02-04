import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import RoutingForm from "../forms/RoutingForm";
import "./routingCard.css";
export default function RoutingCard() {
  return (
    <div className="routingcard">
      <span className="border border-2">
        <Card
          className="form"
          style={{
            backgroundColor: "rgb(90, 157, 87)",
            width: "20rem",
            fontSize: "small",
            fontFamily: "Georgia, 'Times New Roman', Times, serif",
            borderRadius:"1.6rem",
            maxHeight:"50vh",
            overflow: "auto"  
          }}
        >
          <Card.Body>
            <Card.Title style={{ paddingBottom: "5px", fontSize: "25px" }}>
              Enter Your Location
            </Card.Title>
            <RoutingForm></RoutingForm>
          </Card.Body>
        </Card>
      </span>
    </div>
  );
}
