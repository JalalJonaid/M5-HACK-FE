import React from 'react';
import { Loader } from "@googlemaps/js-api-loader"

const GoogleAPI = () => {
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
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
        });
    });

    return (
        <>
        </>
    
    );
}

export default GoogleAPI;
