import './GoogleMaps.css'
import {useState, useEffect, useMemo} from 'react'
import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import BreederPage from '../BreedersPage/BreedersPage'


export default function MapSetup() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE
    })

    if(!isLoaded) return <div>Loading...</div>
    return <Map />
}

function Map() {
    const [selectedDistance, setSelectedDistance] = useState(10)
    const [center, setCenter] = useState({ lat: 44, lng: -80 });
    const [userLocation, setUserLocation] = useState(null);
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
        <br />
        <br />
        <div className="row featurette">
            <div className="col-md-3">
            <BreederPage/>
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
            </div>
        
        <div className='col-md-9'>
        <GoogleMap zoom={10} center={userLocation} mapContainerClassName="map-container">
            <Marker position={center}/>
        </GoogleMap>
        </div>
        </div>
        </>
    )
}