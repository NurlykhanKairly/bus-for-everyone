import React, {useState,useEffect}from 'react'
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
import *as Location from 'expo-location';
import { Input } from 'react-native-elements';


const MapSearch = ({region, setRegion}) => {
    
    const [errorMsg, setErrorMsg] = useState(null);
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
            }
    
            let currentlocation = await Location.getCurrentPositionAsync({});
            setRegion({latitude: currentlocation.coords.latitude,longitude: currentlocation.coords.longitude});
        })();
        }, []);
    
        let text = 'Waiting..';
        if (errorMsg) {
            text = errorMsg;
        } else if (region) {
            text = JSON.stringify(region);
        }
    return (<>
        { region && (
        <GooglePlacesAutocomplete
        placeholder="Search"
        fetchDetails={true}
        GooglePlacesSearchQuery={{
            rankby: "distance",

        }}
        onPress={(data, details = null)=>{
            console.log(data,details)
            setRegion({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng
                
            })
        }}
        query={{
            key:"AIzaSyC-VLuqTSdEQ7I3m_OjFU1RCMfZXKL5dOs",
            language: "en",
            components:"country:kr",
            
            radius:3000,
            location: `${region.latitude}, ${region.longitude}`
        }}
        enablePoweredByContainer={false}
        textInputProps={{
            InputComp: Input,
            rightIcon: { type: 'font-awesome', name: 'search' },
            errorStyle: { color: 'red' },
          }}
    
        styles={{
            container: {flex: 1,position:"absolute",width:"100%", zIndex:2, marginTop: 10, paddingHorizontal: 10},
            textInputContainer : {borderRadius: 5, borderRadius: 20},
            ListView: {backgroundColor: "grey"}
        }}></GooglePlacesAutocomplete>
        )}
   </> )
}

export default MapSearch
