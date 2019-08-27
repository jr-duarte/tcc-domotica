import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import{
  createStackNavigator, createAppContainer
} from 'react-navigation'


export default class Login extends Component{
render(){
  return (
    
    <View style={styles.container}>
      <StatusBar
      barStyle="dark-content"
      hidden={false}
      backgroundColor="#00BCD4"
      />

    <Image style={styles.logo} 
    source={require('./src/assets/logo.png')}/>

    <TextInput style={styles.input} 
    placeholder="Digite seu e-mail"/>

    <TextInput style={styles.input} 
    placeholder="Digite sua senha"/>

    <TouchableOpacity style={styles.button}>
    <Text style={style=styles.buttonText}>Logar</Text>
    </TouchableOpacity>
       
    </View>
  );
}
}

const AppNavigator = createStackNavigator (
  { 
    Login: {
      screen: Login
    }
  }
);

const AppContainer = createAppContainer (AppNavigator);


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:20,
  },

  input:{
    height:45,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  button:{
    height:45,
    backgroundColor: "#00BCD4",
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText:{
    color: '#FFF',
    fontWeight: 'bold',
  },

  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

})


