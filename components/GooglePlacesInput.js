import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Input } from 'react-native-elements';
import { render } from 'react-dom';

const GooglePlacesInput = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'

      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      GooglePlacesDetailsQuery={{
        fields: ['address_components', 'formatted_address']
      }}
      query={{
        key: 'AIzaSyC-VLuqTSdEQ7I3m_OjFU1RCMfZXKL5dOs',
        language: 'en',
        components: 'country:kr',
        types: ['address']
      }}
      styles={{
        textInputContainer: {
            borderColor: 'blue',
            backgroundColor: 'blue',
            borderWidth: 15,
            
            },
        textInput: {
            color: '#000',
            borderRadius: 10,
        },
    }}
    />
    );
};

export default GooglePlacesInput;