import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class Inputs extends Component {

   state = {
      text: '',
      email: '',
      password: ''
   }

   // handleEmail = (text) => {
   //    this.setState({ email: text })
   // }

   // handlePassword = (text) => {
   //    this.setState({ password: text })
   // }

   handleText = (text) => {
      this.setState({ text: text })
   }

   // login = (email, pass) => {
   //    alert('email: ' + email + ' password: ' + pass)
   // }

   search = (text) => {
      alert( 'Searching: ' + text )
   }

   render(){
      return (
         <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Search"
               placeholderTextColor = "#9a73ef"
               autoCapitalize = "none"
               onChangeText = {this.handleText}/>               
          
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = { () => this.search(this.state.text)}>
               <Text style = {styles.submitButtonText}>
                  Search
               </Text>
            </TouchableOpacity>
         </View>
      )
   }
}

export default Inputs

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
  
   input: {
      margin: 15,
      width: 150,
      height: 40,
      textAlign: 'center',
      borderColor: '#7a42f4',
      borderWidth: 1
   },
  
   submitButton: {
      backgroundColor: '#7a42f4',
      padding: 10,
      margin: 15,
      height: 40,
   },
  
   submitButtonText:{
      color: 'white',
      textAlign: 'center'
   }
})
