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
                    <option value={5}>5 miles</option>
                    <option value={10}>10 miles</option>
                    <option value={25}>25 miles</option>
                    <option value={50}>50 miles</option>
                    <option value={250}>51-250 miles</option>
                </select>
            </div>
            <div className="form-group mb-3">For which breeds?
                <select className="form-control">
                {/* Return list of breeds within 'setSelected' value from the users current lat/lang (Upon form submission?). Then, filter to return the list closest to furthest */}
                    <option value={1}>Shnouzer</option>
                    <option value={2}>Laberdoodle</option>
                    <option value={3}>German Sheppard</option>
                    <option value={4}>Dauchsund</option>
                    <option value={5}>Collie</option>
                </select>
            </div>
        </form>
        
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
            >
                {userLocation && (
                    <Marker position={userLocation} />
                )}
            </GoogleMap>
        </>
    );
}
