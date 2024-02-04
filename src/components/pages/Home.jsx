import React from 'react'
import RoutingCard from '../cards/RoutingCard.jsx'
import Card from "react-bootstrap/Card";
import GoogleMapWidget from '../common/GoogleMapWidget/GoogleMapWidget.jsx';
import GoogleAPI from '../common/GoogleAPI/GoogleAPI.jsx';
import GoogleBikeLayer from '../common/GoogleAPI/GoogleBikeLayer.jsx';

export default function Home() {

  let RegularMap = GoogleAPI

  return (
    <div>

        <GoogleMapWidget/>
        {/* <RegularMap/>  */}
        <GoogleBikeLayer/>
  
        {/* <RoutingCard></RoutingCard> */}
    </div>
  )
}
