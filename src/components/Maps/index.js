import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
// import { Container } from './styles';
//AIzaSyBDwFo2OvQLo8Az5EEci5sJEgB7ZZ0Cd6k

function Maps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyBDwFo2OvQLo8Az5EEci5sJEgB7ZZ0Cd6k',
  });

  const position = {
    lat: -10.180000110800439,
    lng: -48.36172813250963,
  };

  return (
    <div>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{
            width: '826px',
            height: '465px',
          }}
          center={position}
          zoom={15}
        >
          <Marker position={position} />
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Maps;
