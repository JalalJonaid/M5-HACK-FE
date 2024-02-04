import { Loader } from '@googlemaps/js-api-loader';
import React from 'react';


const GoogleRoute = () => {
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
        const { DirectionsService } = await google.maps.importLibrary("routes")


        // Inits

        let directionsService = new google.maps.DirectionsService();
        let directionsRenderer = new google.maps.DirectionsRenderer();

        let start = new google.maps.LatLng(40.730610, -73.935242);
        let end = new google.maps.LatLng(40.730610, -73.235242)

        let mapOptions = {
            zoom: 7,
            center: start
        }

        // Replace with global state for map at some point
        let map = new google.maps.Map(document.getElementById('map'), mapOptions);
    
        let request = {
            origin: start,
            destination: end,
            travelMode: 'BICYCLING',
            provideRouteAlternatives: false,
          }

          directionsService.route(request, (result, status) => {
            if(status == "OK"){
                console.log(result)
                directionsRenderer.setMap(map)
                directionsRenderer.setDirections(result)
            }
          })


    
        // map = new Map(document.getElementById("map"), {
        //     center: { lat: 40.730610, lng: -73.935242 },
        //     zoom: 14,
        // });
    })



    return (
        <></>
    );
}

export default GoogleRoute;