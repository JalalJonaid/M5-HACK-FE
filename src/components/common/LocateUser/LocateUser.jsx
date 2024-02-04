import React from 'react';
import { useState,useEffect } from 'react';


const LocateUser = () => {
    const [location, setLocation] = useState({lat:null, long:null})

    useEffect(()=> {
        if("geolocation" in navigator){
            // console.log(navigator.geolocation)
            navigator.geolocation.getCurrentPosition((pos) => {
                setLocation({
                    lat: pos.coords.latitude,
                    long: pos.coords.longitude
                })
            })
    } 
        
    },[])


    useEffect(()=>{
        if(location.lat){
            console.log(location)
        }
    }, [location])

    return (
        <div>
            
        </div>
    );
}

export default LocateUser;
