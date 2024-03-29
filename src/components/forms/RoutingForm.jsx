import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";

export default function RoutingForm({setRouteData}) {
    const [coordinates, setCoordinates] = useState({
        startLat: "",
        startLong: "",
        endLat: "",
        endLong: ""
    });
  
// const [] = {"key": "value"}
// hancle ()+>{setthing {...thing, [e.target.id]: e.target.value}}

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Starting Coordinates:", coordinates.startLat, coordinates.startLong);
        console.log("Ending Coordinates:", coordinates.endLat, coordinates.endLong);
        setRouteData({
            start: {
                lat: coordinates.startLat,
                long: coordinates.startLong
            },
            end: {
                lat: coordinates.endLat,
                long: coordinates.endLong
            }
        })
    } 

  const handleChange = (e) => {
    setCoordinates({ ...coordinates, [e.target.id]: e.target.value });
  };

    return ( 
        <>
            <Card.Title style={{ paddingBottom: "20px", fontSize:"25px"}}>Enter Your Location</Card.Title>
            <div>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="starting-latitude">
                        <Card.Title  style={{padding:"10px"}}>Starting Latitude:</Card.Title>
                        <Form.Control 
                    
                        id = "startLat"
                        type="number"
                        value={coordinates.startLat}
                        onChange={handleChange}
                        required
                        />
                    </Form.Group>

                    <Form.Group className="starting-longitude">
                        <Card.Title style={{padding:"10px"}}>Starting Longitude:</Card.Title>
                        <Form.Control 
                        id = "startLong"
                        type="number"
                        value={coordinates.startLong}
                        onChange={handleChange}
                        required
                        />
                    </Form.Group>

                    <Form.Group className="ending-latitude">
                        <Card.Title style={{padding:"10px"}}>Ending Latitude:</Card.Title>
                        <Form.Control 
                        id = "endLat"
                        type="number"
                        value={coordinates.endLat}
                        onChange={handleChange}
                        required
                        />
                    </Form.Group>

                    <Form.Group className="ending-longitude">
                        <Card.Title style={{padding:"10px"}}>Ending Longitude:</Card.Title>
                        <Form.Control 
                        id = "endLong"
                        type="number"
                        value={coordinates.endLong}
                        onChange={handleChange}
                        required
                        />
                    </Form.Group>
                    <Button style={{margin: "20px" , fontSize:"23px"}} variant="dark" type="submit">Take a Bike!</Button>
                </Form>
            </div>
        </>
  )
}
