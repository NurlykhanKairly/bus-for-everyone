import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BusListScreen from "./BusListScreen";
import ProfileScreen from "./ProfileScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen 
        name="BusList" 
        component={BusListScreen} 
        options = {{
          title: 'Buses',
          headerStyle: {
            backgroundColor: '#2554C7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleStyle: { alignSelf: 'center' },
        }}
      />
      <Stack.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options = {{
          title: 'My profile',
          headerStyle: {
            backgroundColor: '#2554C7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleStyle: { alignSelf: 'center' },
        }
      }
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});