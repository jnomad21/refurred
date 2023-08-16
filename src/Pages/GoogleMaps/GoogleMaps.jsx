import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import DistanceDropdown from '../../Components/Dropdowns/DistanceDropdown/DistanceDropdown';
import BreederPage from '../BreedersPage/BreedersPage';

const containerStyle = {
    margin: '5% auto',
    width: '70%',
    height: '700px',
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
        <h1>Find a nearby Breeder:</h1>
        <form className="">
            <DistanceDropdown/>
            <div className="form-group mb-3">For which breed?
            {/* Breeds component with dropdown goes here instead of static dropdown below. */}
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
        <br />
        <br />
        <div className="row featurette">
          <div className="col-md-3">
            <BreederPage/>
             {/*
                <BreedersByMiles breeders={setBreeders}/>
                1 - Return selectable Markers of breeders within 'setSelectedDistance' value from the users current lat/lang. Separate list on side (if we build one) needs sorted by closest to furthest, top to bottom, with distance/miles displayed clearly. 
                    1.1 - On the map, and ideally, these would have a popup 'card' with some basic info and website/contact to click on hover.
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
          </div>
          <div className="col-md-9">
          <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                {userLocation && (
                    <Marker position={userLocation} />
                )} 
            </GoogleMap>
            </div>
        </div>    
        </>
    );
}
