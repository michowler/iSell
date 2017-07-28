import React, { Component } from 'react';
import {
  AppRegistry,  
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm.js';

export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>    
        <View style={styles.logoContainer}>
          <Image 
            style={styles.logo}
            source={require('../../img/ijual_logo.png')}
          />
          <Text style={styles.text}>iSell, the best app ever</Text>
        </View>
        <View style={styles.formContainer}>
          <LoginForm/>
          
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    height:100,
    width:230,
    paddingHorizontal: 20,
  },
  text:{
    color:'#FFFFF0'
  }
});

AppRegistry.registerComponent('iSell', () => iSell);