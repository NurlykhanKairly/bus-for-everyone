import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default class Test extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Text onPress={() => this.props.navigation.navigate("Register")}>Register</Text>
                    <Text onPress={() => this.props.navigation.navigate("Login")}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
