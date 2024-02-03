import React from 'react'
import {Form, Card} from 'react-bootstrap';

export default function RoutingForm() {
  return (
    <div>
        <Form>
            <Form.Group className="starting-latitude">
                <Card.Title>Starting Latitude:</Card.Title>
                <Form.Control type="number"/>
            </Form.Group>

            <Form.Group className="starting-longitude">
                <Card.Title>Starting Longitude:</Card.Title>
                <Form.Control type="number"/>
            </Form.Group>

            <Form.Group className="ending-latitude">
                <Card.Title>Ending Latitude:</Card.Title>
                <Form.Control type="number"/>
            </Form.Group>

            <Form.Group className="ending-longitude">
                <Card.Title>Ending Longitude:</Card.Title>
                <Form.Control type="number"/>
            </Form.Group>
        </Form>
    </div>
  )
}
