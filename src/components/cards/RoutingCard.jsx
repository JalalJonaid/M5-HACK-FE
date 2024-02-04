import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import RoutingForm from "../forms/RoutingForm";

import './routingCard.css'
import DirectionsCard from "./DirectionsCard";

export default function RoutingCard({setRouteData, response}) {

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
            <RoutingForm setRouteData={setRouteData}/>
            {/* {response ? <DirectionsCard response={response}/> : <RoutingForm setRouteData={setRouteData}/>} */}
          </Card.Body>
        </Card>
      </span>
    </div>
  );
}
