import React from 'react'
import RoutingCard from '../../cards/RoutingCard.jsx'
import Card from "react-bootstrap/Card";
import GoogleMapWidget from "../../common/GoogleMapWidget/GoogleMapWidget.jsx"
import GoogleAPI from "../../common/GoogleAPI/GoogleAPI.jsx"
import GoogleBikeLayer from '../../common/GoogleAPI/GoogleBikeLayer.jsx';
import GoogleRoute from '../../common/GoogleRoute/GoogleRoute.jsx';
import './home.css'



export default function Home() {
  return (
    <div>
        <RoutingCard/>
        <GoogleMapWidget/>
        <GoogleAPI/>
        <GoogleBikeLayer/>
        <GoogleRoute/>
    </div>
  )
}