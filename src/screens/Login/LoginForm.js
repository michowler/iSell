import React, { Component } from 'react';
import {
  AppRegistry,	
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Text
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
    	<View style={styles.container}>
      <StatusBar
        barStyle="light-content"
      />
    		<TextInput
          style={styles.input}
          placeholder="username or email"
          placeholderTextColor="#FFF"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="#FFF"
          returnKeyType="go"
          secureTextEntry
          ref={(input) => this.passwordInput = input}
        />
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
    	</View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  input: {
    height:40,
    marginBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.5)',
    color: '#E0FFFF',
    borderRadius:10,
    opacity: 0.7,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: '#FFF',
    paddingVertical:20,
    paddingTop:10,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: '#66CDAA',
    height:20,
  }

});

AppRegistry.registerComponent('iSell', () => iSell);