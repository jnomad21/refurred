import React, { useEffect, useState } from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
    margin: '12% auto',
    width: '90%',
    height: '300px',
};



export default function GoogleMaps() {
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
