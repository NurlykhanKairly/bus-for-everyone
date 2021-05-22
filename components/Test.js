import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default class Test extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Text onPress={() => this.props.navigation.navigate("BusList")}>BusList</Text>
                    <Text onPress={() => this.props.navigation.navigate("Profile")}>Profile</Text>
                    <Text onPress={() => this.props.navigation.navigate("Favourite")}>Favourite</Text>
                </TouchableOpacity>
            </View>
        )
    }
}