import React from 'react';
import { StyleSheet, Text, View, Image, Alert, TextInput,Modal } from 'react-native';
import { Button } from 'react-native-elements';

const BusInfo = (props) => {
    var [ isPress, setIsPress ] = React.useState(false);
    var [ source, setSource] = React.useState('Current location');
    var [ destination, setDestination ] = React.useState({...props.destination});
    var [modalVisible, setModalVisible] = React.useState(false);
    var [fromToVisible, setFromToVisible] = React.useState(true);
    var timeoutHandle;

    React.useEffect(() => {
        setDestination(props.destination);
    }, [props.destination])
  

    const title = () => {
        if (isPress)
            return (<Text style={{color: 'black', fontWeight: 'bold'}}>Please, wait</Text>)
        else 
            return (<Text style={{color: '#0641A0', fontWeight: 'bold'}}>Notify the driver</Text>)
    }

    var LineBreak = (
            <View
                    style={{
                        borderBottomColor: 'lightgray',
                        borderBottomWidth: 1,
                        marginLeft: 10,
                        marginRight: 10
                    }}
            />
        )
    onDeleteBTN = () => {
        // TODO: show 
        setModalVisible(true)
        setFromToVisible(false)
    }

    return (
        <View style={styles.container}>
            <Modal 
                transparent={true}
                visible={modalVisible}
                onRequestClose = {() => {
                    setModalVisible(!modalVisible)
                    setFromToVisible(!fromToVisible)
                    console.log('modal closed')
                }}
            >
                <View style={styles.fromTo}>
                    <Text 
                        style={[styles.from, {fontSize: 18}]}
                    > 
                        {destination}
                    </Text>
                    { LineBreak }
                    
                    <View
                        style={styles.to}
                    >
                        <Text style={{fontWeight: 'bold', fontSize: 16}}>Arriving</Text>
                        <View style={ [styles.items, {marginLeft: 10}] } >
                            <Image source={require('../assets/bus.png')} />
                            <Text style={styles.number}>360</Text>
                            <Text style={styles.arrives}>Arrives in 6 minutes</Text>
                        </View>
                    </View>
                </View>
            </Modal>
            
            { fromToVisible && (
            <View style={styles.fromTo}>
                <TextInput 
                    editable={false}
                    placeholder="From"
                    style={styles.from}
                    onChangeText={source => {
                        setSource(source)
                        console.log(source)
                    }}
                    defaultValue={source}
                />
                { LineBreak }
                <TextInput
                    editable={false} 
                    placeholder="To"
                    style={styles.to}
                    onChangeText={destination => {
                        setDestination(destination)
                        console.log(destination)
                    }}
                    defaultValue={props.destination}
                />
            </View>
            )}
            
            { fromToVisible && (
            <View style={styles.busWrapper}>
                <View style={styles.items}>
                    <Image source={require('../assets/bus.png')} />
                    <Text style={styles.number}>360</Text>
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
                            if (isPress) {
                                console.log('alert');    
                                Alert.alert('Already notified');
                            } else {
                                timeoutHandle = setTimeout(()=>{
                                    Alert.alert(
                                        'The driver is notified',
                                        '',
                                        [
                                            {text: 'OK', onPress: onDeleteBTN},
                                        ],
                                    )
                                    console.log('5 secs passed')
                                    
                                    // Add your logic for the transition
                                }, 5000);
                                setIsPress(true);
                            }
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
            )}
        </View>
    );
}

export default BusInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    smallbus: {
        width: 20,
        height: 24,
        marginTop: 10,
        marginLeft: 10,
    },
    fromTo: {
        alignSelf: 'center',
        borderColor: 'lightgray',
        borderRadius: 10,
        borderWidth: 1,
        position: 'absolute',
        left: 15,
        right: 15,
        top: 50,
    },
    from: {
        paddingTop: 20, 
        paddingLeft: 10, 
        paddingBottom: 15, 
        backgroundColor: 'white', 
        borderTopRightRadius:20, 
        borderTopLeftRadius:20
    },
    to: {
        paddingTop: 15, 
        paddingLeft: 10, 
        paddingBottom: 20, 
        backgroundColor:"white", 
        borderBottomLeftRadius:20, 
        borderBottomRightRadius:20
    },
    busWrapper: {
        backgroundColor : 'white',
        position: 'absolute',
        bottom: 70,
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
