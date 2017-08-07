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
  StyleSheet,
  TextInput
} from 'react-native';
import Inputs from '../../components/component/TextInput';

export default class Data extends Component {
  getData() {
    return fetch('https://api.github.com/users/michowler')
         .then((response) => response.json())
         .then((responseJson) => {
          this.setState
           // alert(responseJson.name);           
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
           <TouchableHighlight onPress={this.getData}>           
        	    <Text style={styles.text}>Coding is fun</Text>
             </TouchableHighlight> 
           <Inputs/>
        </View>
        
    );
  }
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#FFA500',
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    }
});

AppRegistry.registerComponent('iSell', () => iSell);
