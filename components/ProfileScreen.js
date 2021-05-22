import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const ProfileList = () => {
    return (
        <>
            <View style = {styles.container}>
                <Image
                    style={styles.picture}
                    source={require('../images/personimage.jpg')}
                />
                <Text style = {{fontSize: 20, fontWeight: 'bold'}}>Name Surname</Text>
            </View>
            <View style = {styles.container2}>
                <View style = {styles.row}>
                    <Text style = {{fontSize: 18, fontWeight: 'bold'}}>Nickname</Text>
                    <Text style = {{fontSize: 18}}>nickname</Text>
                </View>
                <View style = {styles.row}>
                    <Text style = {{fontSize: 18, fontWeight: 'bold'}}>Phone number</Text>
                    <Text style = {{fontSize: 18}}>000-000-0000</Text>
                </View>
                <View style = {styles.row2}>
                    <Text style = {{fontSize: 18, fontWeight: 'bold'}}>E-mail</Text>
                    <Text style = {{fontSize: 18}}>email@gmail.com</Text>
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    container: {
        borderColor: '#D1D0CE',
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 15,
        paddingHorizontal: 10
    },
    container2: {
        borderColor: '#D1D0CE',
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 30,
        flexDirection: 'column',
        marginHorizontal: 15,
        paddingHorizontal: 10
    },
    picture: {
        height: 110,
        width: 110,
        margin: 10,
        marginRight: 50,
        borderRadius: 55
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 30,
        borderBottomWidth: 1,
        alignItems: 'center',
        marginHorizontal: 25,
        flex: 1
    },
    row2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 30,
        alignItems: 'center',
        marginHorizontal: 25,
        flex: 1
    },
});

export default ProfileList;