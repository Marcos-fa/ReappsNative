import React from 'react';
import { GooglePlacesAutocomplete, Alert } from 'react-native-google-places-autocomplete';
import {API_KEY} from '../../datos/MapaKey';

const GooglePlacesInput = (props) => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        props.notifyChange(details.geometry.location);
        //console.log(details.geometry.location);
      }}
      query={{
        key: API_KEY,
        language: 'es',
      }}
      //onFail={error => console.error(error)}
      onFail={error => alert("Es necesario api activar Api Key")}
    />
  );
};

export default GooglePlacesInput;