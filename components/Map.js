import React,{useState,useEffect} from 'react'
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, ListView } from 'react-native';
import *as Location from 'expo-location';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapSearch from "./MapSearch"
import MapViewDirections from 'react-native-maps-directions';

const Map = () => {
    const [region,setRegion] = useState(null)
    const [location,setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        map: {
        
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
          zIndex:1
        },
      });
    useEffect(() => {
    (async () => {
        setLocation({latitude: 37.547043, longitude: 126.990522});
    })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }
      
    const build = (waypoints) => {
        return (
            <MapViewDirections
                origin={origin}
                destination={destination}
                apikey={"AIzaSyC-VLuqTSdEQ7I3m_OjFU1RCMfZXKL5dOs"}
                waypoints={waypoints}
            
            />
        )
    } 

    return (
    <View  style={{marginTop: 30,flex:1,marginBottom:30,zIndex:4}}>
        
        <MapSearch region={region} setRegion={setRegion}/>
        {
        location &&  (
            
            
            <MapView style={styles.map} 
            initialRegion={{
                ...location,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                provider="google"
                region={{...region,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,}
            }
            >   
                {(region &&  location && <MapViewDirections
                    origin={location}
                    destination={region}
                    mode={"TRANSIT"}
                    strokeWidth={3}
                    strokeColor="#146BCA"
                    apikey={"AIzaSyC-VLuqTSdEQ7I3m_OjFU1RCMfZXKL5dOs"}
                />)}

                {
                    region &&(<Marker  coordinate={{latitude: region.latitude,longitude:region.longitude} }/>
                    
                    )}
                <Marker coordinate={location}
                    pinColor="black"
                >
                    <Callout>
                        <Text>I am here</Text>
                    </Callout>
                </Marker>
    
                
            </MapView>        
            )
        }
    </View>
        
    )
}


export default Map
