import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyC-VLuqTSdEQ7I3m_OjFU1RCMfZXKL5dOs',
        language: 'en',
      }}
    />
  );
};

export default GooglePlacesInput;
