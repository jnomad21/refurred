import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';
import BreedsDropdown from '../../Components/Dropdowns/BreedsDropdown/BreedsDropdown';
import DistanceDropdown from '../../Components/Dropdowns/DistanceDropdown/DistanceDropdown';
import BreederPage from '../BreedersPage/BreedersPage';

const containerStyle = {
    margin: '5% auto',
    width: '70%',
    height: '700px',
};



export default function GoogleMaps() {
    const [zoom, setZoom] = useState(10)
    const [selectedDistance, setSelectedDistance] = useState(5)
    const [center, setCenter] = useState({
        lat: 41.8220656,
        lng: -88.440897,
    });

    const [userLocation, setUserLocation] = useState(null);

    
    useEffect(() => {
        switch(selectedDistance){
            case 10:
                setZoom(10)
                break
            case 25:
                setZoom(9)
                break
            case 75:
                setZoom(8)
                break
            case 150:
                setZoom(7)
                break
            case 500:
                setZoom(6)
                break
            default:
                setZoom(10)
        }
    }, [selectedDistance])
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
            <DistanceDropdown selectedDistance={selectedDistance} setSelectedDistance={setSelectedDistance}/>
            <BreedsDropdown />
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
                zoom={zoom}
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
