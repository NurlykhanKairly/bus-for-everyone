import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BusListScreen from "./components/BusListScreen";
import ProfileScreen from "./components/ProfileScreen";
import FavouriteScreen from "./components/FavouriteScreen";
import Test from "./components/Test";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Favourite">
      <Stack.Screen 
        name="BusList" 
        component={BusListScreen} 
        options = {{
          title: 'Buses',
          headerStyle: {
            backgroundColor: '#146BCA',
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
            backgroundColor: '#146BCA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleStyle: { alignSelf: 'center' },
        }
      }
      />
      <Stack.Screen 
        name="Favourite" 
        component={FavouriteScreen} 
        options = {{
          title: 'Favourites',
          headerStyle: {
            backgroundColor: '#146BCA',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleStyle: { alignSelf: 'center' },
        }
      }
      />
      <Stack.Screen 
        name="Test" 
        component={Test} 
        options = {{
          title: 'Test',
          headerStyle: {
            backgroundColor: '#146BCA',
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