import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

const BusInfo = (props) => {
    var [ isPress, setIsPress ] = React.useState(false);
    var [ source, setSource] = React.useState('Current location');
    var [ destination, setDestination ] = React.useState(null);

    const title = () => {
        if (isPress)
            return (<Text style={{color: 'black', fontWeight: 'bold'}}>Please, wait</Text>)
        else 
            return (<Text style={{color: '#0641A0', fontWeight: 'bold'}}>Notify the driver</Text>)
    }

    return (
        <View style={styles.container}>
            <View style={styles.fromTo}>
                <TextInput 
                    editable={false}
                    placeholder="From"
                    style={{paddingTop: 15, paddingLeft: 10, paddingBottom: 5, backgroundColor: 'white', borderTopRightRadius:20, borderTopLeftRadius:20}}
                    onChangeText={source => {
                        setSource(source)
                        console.log(source)
                    }}
                    defaultValue={source}
                />
                <View
                    style={{
                        borderBottomColor: 'lightgray',
                        borderBottomWidth: 1,
                        marginLeft: 10,
                        marginRight: 10
                    }}
                />
                <TextInput
                    editable={false} 
                    placeholder="To"
                    style={{paddingTop: 10, paddingLeft: 10, paddingBottom: 15, backgroundColor:"white", borderBottomLeftRadius:20, borderBottomRightRadius:20}}
                    onChangeText={destination => {
                        setDestination(destination)
                        console.log(destination)
                    }}
                    defaultValue={props.destination}
                />
            </View>
            <View style={styles.busWrapper}>
                <View style={styles.items}>
                    <Image source={require('../assets/bus.png')} />
                    <Text style={styles.number}>172</Text>
                    <Text style={styles.arrives}>Arrives in 6 minutes</Text>
                </View>
                <View style={styles.accessible}>
                    <Image source={require('../assets/accessible.png')}></Image>
                    <Text style={{color: 'green', fontWeight: 'bold', marginLeft: 5}}>accessible </Text>
                </View>
                
                <View style={styles.button}>
                    <Button 
                        title={title}
                        onPress={() =>  {
                            if (isPress) 
                                Alert.alert('Already notified');
                            console.log(isPress);
                            setIsPress(true);
                            console.log('alert');
                        } }
                        buttonStyle={{
                            backgroundColor: (isPress ? 'lightgray' : '#FFE600'),
                            height: 40,
                            width: 224,
                            alignSelf: 'center'
                        }}
                    />
                </View>
            </View>
        </View>
    );
}

export default BusInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    fromTo: {
        alignSelf: 'center',
        borderColor: 'lightgray',
        borderRadius: 10,
        borderWidth: 1,
        position: 'absolute',
        left: 15,
        right: 15,
        top: 20,
    },
    busWrapper: {
        backgroundColor : 'white',
        position: 'absolute',
        bottom: 30,
        left: 15,
        right: 15,
        paddingHorizontal: 20,
        paddingBottom: 50,
        borderColor: 'lightgray',
        borderRadius: 10,
        borderWidth: 1,
    },
    sectionTitle: {
        paddingTop: 10,
        fontSize: 24,
        fontWeight: 'bold',
    },
    items: {
        flexDirection: 'row',
        marginTop: 20,
    },
    accessible: {
        flexDirection: 'row',
        marginTop: 20,
        alignSelf: 'center',
    },
    number: {
        marginTop: -5,
        marginLeft: 15,
        fontWeight: 'bold',
        fontSize: 48
    },
    arrives: {
        marginTop: 20,
        marginLeft: 30,
        fontSize: 14,
        color: 'gray',
    },
    button: {
        marginTop: 20,
        marginBottom: -20,
    }
});
