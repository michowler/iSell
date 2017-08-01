import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  KeyboardAvoidingView
} from 'react-native';
import LoginForm from './LoginForm.js';
import { StackNavigator } from 'react-navigation';

const util = require('util');

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };

  render() {
    console.log("this.props.navigation = " + util.inspect(this.props.navigation, false, null))
    const { navigate } = this.props.navigation;
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
          <Button
            onPress={
              () => navigate("ForgotPassword", {})
            }
            style={styles.text}
            title='Forgot Password'
          />
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

const iSell = StackNavigator({
  Login: { screen: Login },
});



