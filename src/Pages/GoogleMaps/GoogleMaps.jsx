import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '85%',
    height: '300px',
};

//todo Needs set to users lat and lng
const center = {
    lat: 41.8220656,
    lng: -88.440897,
};

export default function GoogleMaps() {
    return (
        <>
            <LoadScript googleMapsApiKey="AIzaSyBZA1bvlil8WeAP2dNymNjnn9w6uteA96s">
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