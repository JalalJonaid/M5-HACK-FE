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

      
    loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps");
    
        map = new Map(document.getElementById("map"), {
            center: { lat: 40.730610, lng: -73.935242 },
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
