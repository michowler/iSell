/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import Api from './Api.js';

export default class iSell extends Component {

  render() {
    return (
        <Api/>
    );
  }
}

AppRegistry.registerComponent('iSell', () => iSell);
