/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
} from 'react-native';
import Login from './src/screens/Login/Login.js';

export default class iSell extends Component {
  render() {
    return (
        <Login/>
    );
  }
}

AppRegistry.registerComponent('iSell', () => iSell);
