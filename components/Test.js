import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createIconSet } from '@expo/vector-icons';
import * as Font from 'expo-font';
import Icon from 'react-native-vector-icons/FontAwesome';


import Login from './Login';
import Register from './Register';
import Favourites from './Favourites';
import ProfileScreen from './ProfileScreen';
import Map from './Map';

const Tab = createBottomTabNavigator();

function MyTabBar({ state, descriptors, navigation }) {
    return (
        <View style={{ flexDirection: 'row', justifyContent: "space-around", alignItems: "center", alignContent: "center", height: 60, borderTopLeftRadius: 20, borderTopRightRadius: 10, backgroundColor: "white" }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const icon = (label === "Favourites" ? "bookmark" : label === "Map" ? "bus" : "user");

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };
                const paddingStyle = !isFocused ? { marginBottom: 10} : {};
                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        style={{ flex: 1, alignItems: "center", ...paddingStyle}}
                    >
                        <Icon name={icon} size={32} color={"#146BCA"} />
                        {isFocused && 
                        <View style={{    width: 10,
                            height: 10,
                            borderRadius: 10 / 2,
                            backgroundColor: "#146BCA",
                        }}/> 
                        }
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}



export default class Test extends Component {

    render() {
        return (
            <Tab.Navigator screenOptions={{
                headerShown: false
            }}
                tabBar={props => <MyTabBar {...props} />}
            >
                <Tab.Screen name="Favourites" component={Favourites} options={{
                    tabBarLabel: 'Favourites',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="bookmark" size={32} color={color} />
                    )
                }} />
                <Tab.Screen name="Map" component={Map} options={{
                    tabBarLabel: 'Map',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="bus" size={32} color={color} />
                    )
                }} />
                <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="user" size={32} color={color} />
                    )
                }} />
            </Tab.Navigator>
        )
    }
}
