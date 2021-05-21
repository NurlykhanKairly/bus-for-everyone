import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, ScrollView} from 'react-native';

const BusListScreen = ({navigation}) => {
    const [bus, setBus] = useState(null);
    const buslist = [
        {
            number: '1'
        },
        {
            number: '2'
        },
        {
            number: '3'
        },
        {
            number: '4'
        },
        {
            number: '5'
        },
        {
            number: '6'
        },
        {
            number: '7'
        },
        {
            number: '8'
        },
        {
            number: '9'
        },
        {
            number: '10'
        },
        {
            number: '11'
        },
        {
            number: '12'
        },
        {
            number: '13'
        },
        {
            number: '14'
        },
        {
            number: '15'
        },
    ]
    console.log(bus);
    return (
        <ScrollView >
            <FlatList
                keyExtractor = {Bus => Bus.name}
                data = {buslist} 
                renderItem = {({item}) => {
                    return (
                        <View style = {styles.containerless}>
                            <TouchableOpacity  onPress = {() => setBus(item.number)}>
                                <View style = {styles.row}>
                                    <Text style = {styles.bus}>{item.number} - blah blah blah blah blah </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        // Need a callback to previous screen
                    )
                }}
            />
        </ScrollView>
    
    );
};

const styles = StyleSheet.create({
    containerless: {
        backgroundColor: 'white'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10, 
        borderBottomWidth: 1,
        borderColor: '#D1D0CE',
        backgroundColor: 'white',
        alignItems: 'center',
        marginHorizontal: 25
    },
    bus: {
        fontSize: 18,
    }
});

export default BusListScreen;