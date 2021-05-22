import React,{useState,useEffect} from 'react'
import MapView, { Callout, Marker } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions, ListView } from 'react-native';
import *as Location from 'expo-location';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import MapSearch from "../MapSearch/MapSearch"

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
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
        }

        let currentlocation = await Location.getCurrentPositionAsync({});
        setLocation({latitude: currentlocation.coords.latitude,longitude: currentlocation.coords.longitude});
    })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
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
