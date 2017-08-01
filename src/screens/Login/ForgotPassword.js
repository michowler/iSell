import React, { Component } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

const util = require('util');

export default class ForgotPassword extends React.Component {
  static navigationOptions = {
    title: 'ForgotPassword',
  };

  render() {
    const { params } = this.props.navigation;
    return (
    	<View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        
    		<TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="#FFF"
          returnKeyType="next"
          onSubmitEditing={() => this.passwordInput.focus}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Text>We'll send an email shortly.</Text>
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

const iSell = StackNavigator({
  ForgotPassword: { screen: ForgotPassword },
});

