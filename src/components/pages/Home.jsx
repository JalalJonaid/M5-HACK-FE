import React from 'react'
import RoutingCard from '../cards/RoutingCard.jsx'
import Card from "react-bootstrap/Card";
import GoogleMapWidget from "../common/GoogleMapWidget/GoogleMapWidget.jsx"
import GoogleAPI from "../common/GoogleAPI/GoogleAPI.jsx"

export default function Home() {
  return (
    <div>
        <RoutingCard/>
        <GoogleMapWidget/>
        <GoogleAPI/>
    </div>
  )
}