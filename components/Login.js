import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  AsyncStorage,
  Platform,
  ActivityIndicator,
} from 'react-native';


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
    this.setState({ assetsLoaded: true });
  }


  render() {
      if (!this.state.assetsLoaded) {
        return (
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#74B43F"/>
          </View>
        );
      }
      return (
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={styles.wrapper}>
          <View style={styles.container}>
            <Text style={styles.header}>Authorization</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Enter e-mail"
              autoCapitalize="none"
              keyboardType="email-address"
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
          </View>
        </KeyboardAvoidingView>
      );
}
  login = () => {
    ///TODO
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
