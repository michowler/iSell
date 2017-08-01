/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

export default class Data extends Component {
  getData() {
    return fetch('https://api.github.com/users/michowler')
         .then((response) => response.json())
         .then((responseJson) => {
          this.setState
           alert(responseJson.name);
         })
         .catch((error) => {
           console.error(error);
         });
  }

  componentDidMount(){
    this.getData();
  }

  render() {

    return (
        <View style={styles.container}>
           <TouchableHighlight onPress={this._fetchStory}>
        	    <Text style={styles.text}>Coding is fun</Text>
           </TouchableHighlight> 
        </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF7F50',
  },
  text: {
    paddingTop: 200,
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    color:'#FFFFFF'
  }
});

AppRegistry.registerComponent('iSell', () => iSell);
