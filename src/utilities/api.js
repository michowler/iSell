import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';

export default class api extends Component {
	render(){
		return ( 
				var api = {
				getRovers() {
					var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers?api_key=DEMO_KEY';
					return fetch(url).then((res) => res.json());
				}
			};
		);
	}
}


AppRegistry.registerComponent('iSell', () => iSell);
module.exports = api;
