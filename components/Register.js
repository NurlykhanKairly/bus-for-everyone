import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    Platform,
    ActivityIndicator,
} from 'react-native';
import Constants from 'expo-constants';

import * as Notifications from 'expo-notifications';

import GLOBALS from '../Globals';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
            assetsLoaded: false,
        };
    }

    
    async registerForPushNotificationsAsync() {
        let token;
        if (Constants.isDevice) {
          const { status: existingStatus } = await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;
          if (existingStatus !== 'granted') {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }
          if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
          }
          token = (await Notifications.getExpoPushTokenAsync()).data;
          if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
              name: 'default',
              importance: Notifications.AndroidImportance.MAX,
              vibrationPattern: [0, 250, 250, 250],
              lightColor: '#FF231F7C',
            });
          }
          return token;
        } else {
          alert('Must use physical device for Push Notifications');
        }
      
        
      
        return token;
      }

      async componentDidMount() {
        this.setState({ assetsLoaded: true });
    }
      
    render() {
        if (!this.state.assetsLoaded) {
            return (
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#74B43F" />
                </View>
            );
        }
        return (
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.header}>Registration</Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter e-mail"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        onChangeText={email => this.setState({ email })}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter username"
                        autoCapitalize="none"
                        onChangeText={username => this.setState({ username })}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter password"
                        secureTextEntry
                        onChangeText={password => this.setState({ password })}
                        underlineColorAndroid="transparent"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Confirm password"
                        secureTextEntry
                        onChangeText={confirmPassword => this.setState({ confirmPassword })}
                        underlineColorAndroid="transparent"
                    />
                    <TouchableOpacity style={styles.btn} onPress={this.register}>
                        <Text style={styles.buttonText}>register</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop: 20, ...styles.btn}} onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.buttonText}>login</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        );
    }
    register = async () => {
        if (this.state.confirmPassword !== this.state.password) {
            alert("Something went wrong...");
            return;
        }
        let token = await this.registerForPushNotificationsAsync();
        console.log(token);
        fetch(GLOBALS.BASE_URL + '/auth1/registerPassenger/', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email : this.state.email,
              username : this.state.username,
              password : this.state.password,
              token : token
            }),
          })
            .then(res => {
              if (res.status === 200) {
                return true;
              } else {
                alert("Something went wrong...");
                return false;
              }
            })
            .then((success) => {
              if (success)
                this.props.navigation.navigate('Login');
            })
            .catch((err) => {
              alert(err);
            })
            .done();      
    };
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        paddingLeft: 40,
        paddingRight: 40,
    },
    header: {
        fontSize: 24,
        marginBottom: 60,
        color: '#000000',
    },
    textInput: {
        alignSelf: 'stretch',
        padding: 16,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#bdbdcf',
    },
    btn: {
        backgroundColor: '#74B43F',
        padding: 5,
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 25,
    },
});
