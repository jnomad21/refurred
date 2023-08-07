import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    margin: '12% auto',
    width: '90%',
    height: '300px',
};

//todo Needs set to users lat and lng
const center = {
    lat: 41.8220656,
    lng: -88.440897,
};

const googleKey = process.env.REACT_APP_GOOGLE

export default function GoogleMaps() {

    return (
        <>
            <LoadScript googleMapsApiKey={googleKey}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    {/* You can add markers, info windows and other components here */}
                </GoogleMap>
            </LoadScript>
        </>
    )
}