import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class Splash extends Component {
	render() {
		return(
			<View style={styles.wrapper}>
				 <Text>Hello world!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'red',
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
})

