import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import DialogInput from 'react-native-dialog-input';

const ProfileList = () => {
    const [address, setAdress] = useState('Blah-blah-blah');
    const [dialogue, setDialogue] = useState(false);
    return (
        <>
            <View style = {styles.container}>
                <View style = {{flex: 1, flexDirection: 'row', marginVertical: 10}}>
                    <Entypo name="home" size={30} color="#146BCA" style = {{marginLeft: 20, marginTop: 5}}/>
                    <View style = {{marginLeft: 15, marginVertical: 5, justifyContent:'space-between'}}>
                        <Text style = {{fontSize: 20, fontWeight: 'bold', marginBottom: 10}}>Home</Text>
                        <Text>{address}</Text>
                    </View>
                    <TouchableOpacity onPress = {() => setDialogue(true)}>
                        <MaterialIcons name="edit" size={20} color="black" style = {{marginLeft: 160, marginTop: 5}}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {styles.container2}>
                <View style = {styles.row}>
                    <AntDesign name="star" size={24} color="#FFE600"/>
                    <Text style = {{marginLeft: 20}}>Address 1</Text>
                </View>
            </View>
            <View style = {styles.container2}>
                <View style = {styles.row}>
                    <AntDesign name="star" size={24} color="#FFE600"/>
                    <Text style = {{marginLeft: 20}}>Address 2</Text>
                </View>
            </View>
            <View style = {styles.container2}>
                <View style = {styles.row}>
                    <AntDesign name="star" size={24} color="#FFE600"/>
                    <Text style = {{marginLeft: 20}}>Address 3</Text>
                </View>
            </View>
            <View style = {styles.container2}>
                <View style = {styles.row}>
                    <AntDesign name="star" size={24} color="#FFE600"/>
                    <Text style = {{marginLeft: 20}}>Address 4</Text>
                </View>
            </View>
            <DialogInput isDialogVisible={dialogue}
                    title={"New home address"}
                    message={"Please type your new home address"}
                    hintInput ={"Address"}
                    submitInput={ (inputText) => {
                        setAdress(inputText);
                        setDialogue(false);
                    } }
                    closeDialog={ () => {setDialogue(false)}}>
            </DialogInput>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        borderColor: '#D1D0CE',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 30,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 15,
    },
    container2: {
        borderColor: '#D1D0CE',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginHorizontal: 15,
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 22,
        alignItems: 'center',
        marginHorizontal: 25,
        flex: 1
    },
});

export default ProfileList;
