import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from './src/screens/Login/Login.js';
import ForgotPassword from './src/screens/Login/ForgotPassword.js';

const Navigation = StackNavigator({
	Login: {screen: Login},
	ForgotPassword: {screen: ForgotPassword}
});

export default Navigation;

AppRegistry.registerComponent('iSell', () => iSell);