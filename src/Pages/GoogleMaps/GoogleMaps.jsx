
import React, { useEffect, useState, useRef } from 'react';
import { GoogleMap, Marker, useLoadScript, Autocomplete, DirectionsRenderer } from '@react-google-maps/api';
import DistanceDropdown from '../../Components/Dropdowns/DistanceDropdown/DistanceDropdown';
import BreederPage from '../BreedersPage/BreedersPage';
import BreederMarkers from './Markers/BreederMarkers/BreederMarkers';
import DogAutoCompleteFilter from '../../Components/DogAutoCompleteFilter/DogAutoCompleteFilter';
import { dogsIndexRequest } from '../../utilities/dogs-api';

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

function Map({handleFilter}) {
    const [dogs, setDogs] = useState([])
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

    useEffect(()=>{
        async function getDogs(){
            const dogs = await dogsIndexRequest();
            setDogs(dogs)
        }
        getDogs();

    }, [])
    
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
    
    async function calculcateRoute(e) {
        e.preventDefault()
        if(originRef.current.value === '' || destinationRef.current.value === '') {
          return
        }
        // eslint-disable-next-line no-undef
        const directionsService = new google.maps.DirectionsService()
        const results = await directionsService.route({
          origin: originRef.current.value,
          destination :destinationRef.current.value,
          // eslint-disable-next-line no-undef
          travelMode: google.maps.TravelMode.DRIVING
        })
        setDirectionsResponse(results)
        setDistance(results.routes[0].legs[0].distance.text + 'les')
        setDuration(results.routes[0].legs[0].duration.text.slice(0,5) + 'utes')
      }
      function clearRoute(e) {
        e.preventDefault()
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
            <DogAutoCompleteFilter dogs={dogs} />
            <button className="btn btn-primary">Search</button>
        </form>
        <br />
        <br />
        <form className="">
            <div>
                <Autocomplete>
                    <input type='text' placeholder=' Origin' ref={originRef}></input>
                </Autocomplete>
                <button type='submit' onClick={calculcateRoute}>Calculate Route</button>
            </div>
                <Autocomplete>
                    <input type='text' placeholder=' Destination' ref={destinationRef}></input>
                </Autocomplete>
                <button onClick={clearRoute}>Clear Route</button>
                <p>Distance: {distance}</p>
                <p>Duration: {duration}</p>
        </form>
        <br />
        <br />
        <div className="row featurette">
            <div className="col-md-3">
            <BreederPage/>
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
                {directionResponse && 
                <DirectionsRenderer directions={directionResponse}/> }
            </GoogleMap>
        </div>
        </div>
        </>
    )
}