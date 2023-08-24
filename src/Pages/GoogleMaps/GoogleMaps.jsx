
import React, { useEffect, useState, useRef } from 'react';
import { GoogleMap, Marker, useLoadScript, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';
import BreedsDropdown from '../../Components/Dropdowns/BreedsDropdown/BreedsDropdown';
import DistanceDropdown from '../../Components/Dropdowns/DistanceDropdown/DistanceDropdown';
import BreederPage from '../BreedersPage/BreedersPage';
import BreederMarkers from './Markers/BreederMarkers/BreederMarkers';

const containerStyle = {
    margin: '5% auto',
    width: '70%',
    height: '700px',
};

const places = ["places"]

export default function MapSetup() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE,
        libraries: places
    })

    if(!isLoaded) return <div>Loading...</div>
    return <Map />
}

function Map() {
    const [map, setMap] = useState(/** @type google.maps.Map */ (null))
    const [zoom, setZoom] = useState(10)
    const [selectedDistance, setSelectedDistance] = useState(5)
    const [userLocation, setUserLocation] = useState(null);
    const [directionResponse, setDirectionsResponse] = useState(null)
    const [distance, setDistance] = useState('')
    const [duration, setDuration] = useState('')
    const [center, setCenter] = useState({
        lat: 41.8220656,
        lng: -88.440897,
    });

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()
    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef()
    
    const distanceToZoomMap = {
        10: 10,
        25: 9,
        75: 8,
        150: 7,
        500: 5,
    };
    
    useEffect(() => {
        setZoom(distanceToZoomMap[selectedDistance] || 14);
    }, [selectedDistance])

    useEffect(() => {
        // Grab the user location if it exists. If not, create it
        const storedLocation = JSON.parse(localStorage.getItem('userLocation'));
        if (storedLocation) {
            setCenter(storedLocation);
            setUserLocation(storedLocation);
        } else {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const userLat = position.coords.latitude;
                        const userLng = position.coords.longitude;
                        const newUserLocation = { lat: userLat, lng: userLng };
                        setCenter(newUserLocation);
                        setUserLocation(newUserLocation);
                        // Store the newUserLocation in localStorage
                        localStorage.setItem('userLocation', JSON.stringify(newUserLocation));
                    },
                    (error) => {
                        console.error('Error getting geolocation:', error);
                    }
                );
            } else {
                console.error('Geolocation is not available');
            }
        }
    }, []);
    
    async function calculcateRoute() {
        if(originRef.current.value === '' || destinationRef.current.value === '') {
          return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        console.log(directionsService)
        const results = await directionsService.route({
          origin: originRef.current.value,
          destination :destinationRef.current.value,
          // eslint-disable-next-line no-undef
          travelMode: google.maps.TravelMode.DRIVING
        })
        console.log(results)
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text)
        setDuration(results.routes[0].legs[0].duration.text)
      }
      function clearRoute() {
        setDirectionsResponse(null)
        setDistance('')
        setDuration('')
        originRef.current.value = ''
        destinationRef.current.value = ''
      }

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
        <form className="">
            <div>
                <Autocomplete>
                    <input type='text' placeholder=' Enter Origin' ref={originRef}></input>
                </Autocomplete>
                <button type='submit' onClick={calculcateRoute}>Calculate Route</button>
            </div>
                <Autocomplete>
                    <input type='text' placeholder=' Enter Destination' ref={destinationRef}></input>
                </Autocomplete>
                <button onClick={clearRoute}>X</button>
                <p>Distance: {distance}</p>
                <p>Duration: {duration}</p>
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
                onLoad={(map) => setMap(map)}
            >
                {userLocation && (
                    <Marker position={userLocation} />
                )} 
                {directionResponse && <DirectionsRenderer directions={directionResponse}/> }
            </GoogleMap>
        </div>
        </div>
        </>
    )
}