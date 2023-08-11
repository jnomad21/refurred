import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
    margin: '12% auto',
    width: '90%',
    height: '300px',
};



export default function GoogleMaps() {
    // Set the distance state starting at 5
    const [selectedDistance, setSelectedDistance] = useState(5)
    const [center, setCenter] = useState({
        lat: 41.8220656,
        lng: -88.440897,
    });

    const [userLocation, setUserLocation] = useState(null);

    

    useEffect(() => {
        // Request geolocation permission
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const userLat = position.coords.latitude;
                    const userLng = position.coords.longitude;
                    setCenter({ lat: userLat, lng: userLng });
                    setUserLocation({ lat: userLat, lng: userLng });
                },
                (error) => {
                    console.error('Error getting geolocation:', error);
                }
            );
        } else {
            console.error('Geolocation is not available');
        }
    }, []);

    return (
        <>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Find a nearby Breeder:</h1>
        <form className="">
            <div className="form-group mb-3">Within how many miles?
                <select value={selectedDistance} onChange = {(e) => setSelectedDistance(Number(e.target.value))} name="" className="form-control">
                    <option value={10}> Within 10 miles</option>
                    <option value={25}> Within 25 miles</option>
                    <option value={75}> Within 75 miles</option>
                    <option value={150}> Within 150 miles</option>
                    <option value={500}> Within 500 miles</option>
                </select>
            </div>
            <div className="form-group mb-3">For which breeds?
                <select className="form-control">
                    <option value={1}>Shnouzer</option>
                    <option value={2}>Laberdoodle</option>
                    <option value={3}>German Sheppard</option>
                    <option value={4}>Dauchsund</option>
                    <option value={5}>Collie</option>
                </select>
            </div>
            <button className="btn btn-primary">Search</button>
        </form>
        
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                {userLocation && (
                    <Marker position={userLocation} />
                )}        
                {/*
                <BreedersByMiles breeders={setBreeders}/>
                1 - Return selectable Markers of breeders within 'setSelectedDistance' value from the users current lat/lang. Separate list on side (if we build one) needs sorted by closest to furthest, top to bottom, with distance displayed clearly. 
                    1.1 - On the map, and ideally, these would have a popup 'card' with some basic info and website/contact to click.
                    1.2 - Google: How to convert the differences between lat and lng into miles?
                2 - Search button will need 'onSubmit' or similar. It will then render the component returning breeders
                3 - Best way to generate a reliable list of breeders from all over the country (maybe world, but we'll do country to start)...
                
                 <--- COMPONENT MOCK UP --->
                {breeders.map((breeder, index) => (
                <Marker
                key={index}
                position={{ lat: breeder.lat, lng: breeder.lng }} 
                />
                ))} 
                */}
   
            </GoogleMap>
        </>
    );
}
