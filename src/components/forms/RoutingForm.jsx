import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

export default function RoutingForm() {
  const [coordinates, setCoordinates] = useState({
    startLat: "",
    startLong: "",
    endLat: "",
    endLong: "",
  });

  // const [] = {"key": "value"}
  // hancle ()+>{setthing {...thing, [e.target.id]: e.target.value}}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Starting Coordinates:",
      coordinates.startLat,
      coordinates.startLong
    );
    console.log("Ending Coordinates:", coordinates.endLat, coordinates.endLong);
  };

  const handleChange = (e) => {
    setCoordinates({ ...coordinates, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="starting-latitude">
          <Card.Title style={{ padding: "10px" }}>
          </Card.Title>
          <Form.Control
            placeholder="Starting Latitude"
            id="startLat"
            type="number"
            value={coordinates.startLat}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="starting-longitude">
          <Card.Title style={{ padding: "10px" }}></Card.Title>
          <Form.Control
            placeholder="Starting Longitude"
            id="startLong"
            type="number"
            value={coordinates.startLong}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="ending-latitude">
          <Card.Title style={{ padding: "10px" }}></Card.Title>
          <Form.Control
            placeholder="Ending Latitude"
            id="endLat"
            type="number"
            value={coordinates.endLat}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="ending-longitude">
          <Card.Title style={{ padding: "10px" }}></Card.Title>
          <Form.Control
            placeholder="Ending Longitude"
            id="endLong"
            type="number"
            value={coordinates.endLong}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          style={{ margin: "20px", fontSize: "23px" }}
          variant="dark"
          type="submit"
        >
          Take a Bike!
        </Button>
      </Form>
    </div>
  );
}
