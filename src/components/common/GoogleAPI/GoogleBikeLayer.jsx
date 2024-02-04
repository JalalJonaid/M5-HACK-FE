import React from 'react';
import { Loader } from "@googlemaps/js-api-loader";

const GoogleBikeLayer = () => {
    const key = import.meta.env.VITE_API_KEY
    let map;
    const additionalOptions = {}

    const loader = new Loader({
        apiKey: key,
        version: "weekly",
        ...additionalOptions,
      });

    const thisMap = (<div id='map'></div>)
      
    loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps");
    
        map = new Map(document.getElementById("map"), {
            center: { lat: 42.3726399, lng: -71.1096528 },
            zoom: 14,
        });

        const bikeLayer = new google.maps.BicyclingLayer();
        bikeLayer.setMap(map)


    });


    return (
        <></>
    );
}

export default GoogleBikeLayer;
