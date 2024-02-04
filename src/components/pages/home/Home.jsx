import React, { useEffect } from 'react'
import RoutingCard from '../../cards/RoutingCard.jsx'
import Card from "react-bootstrap/Card";
import GoogleMapWidget from "../../common/GoogleMapWidget/GoogleMapWidget.jsx"
import GoogleAPI from "../../common/GoogleAPI/GoogleAPI.jsx"
import GoogleBikeLayer from '../../common/GoogleAPI/GoogleBikeLayer.jsx';
import GoogleRoute from '../../common/GoogleRoute/GoogleRoute.jsx';
import './home.css'
import { useState } from 'react';



export default function Home() {
  const [routeData, setRouteData] = useState({
    start: {
      lat: null, 
      long: null,
    },
    end: {
      lat: null,
      long: null
    }
  })

  const [response, setResponse] = useState(null)


  const [displayRoute, setDisplayRoute] = useState(false)

  useEffect(()=> {
    if(routeData.start.lat){
      console.log(routeData)
      setDisplayRoute(true)
    }
  }, [routeData])
  

  return (
    <div>
        <RoutingCard setRouteData={setRouteData} response={response}/>
        <GoogleMapWidget/>
        {/* <GoogleAPI/> */}
        {/* <GoogleBikeLayer/> */}
        {displayRoute ? <GoogleRoute routeData={routeData} setResponse={setResponse}/> : null }
        {/* <GoogleRoute routeData={routeData}/> */}
    </div>
  )
}