/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import Data from './src/screens/Data/Data.js';

export default class Api extends Component {

  render() {
    return (
          <Data/>
    );
  }
}

AppRegistry.registerComponent('iSell', () => iSell);
