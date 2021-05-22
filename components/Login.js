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
import deviceStorage from './deviceStorage';
import GLOBALS from '../Globals';


export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      assetsLoaded: false,
    };
  }

  async componentDidMount() {
    const value = await deviceStorage.retrieveItem('token'); // returns promise, await resolve
    if (value !== null) {
      this.props.navigation.navigate('Home');
    }
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
          <Text style={styles.header}>Authorization</Text>
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
          <TouchableOpacity style={styles.btn} onPress={this.login}>
            <Text style={styles.buttonText}>login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{marginTop: 20, ...styles.btn}} onPress={() => this.props.navigation.navigate('Register')}>
            <Text style={styles.buttonText}>register</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
  login = () => {
    fetch(GLOBALS.BASE_URL + '/auth1/login/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username : this.state.username,
        password : this.state.password
      }),
    })
      .then(res => {
        if (res.status === 200) {
          deviceStorage.saveItem('token', res.text().token);
          return true;
        } else {
          alert("Something went wrong...");
          return false;
        }
      })
      .then((success) => {
        if (success)
          this.props.navigation.navigate('Home');
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
