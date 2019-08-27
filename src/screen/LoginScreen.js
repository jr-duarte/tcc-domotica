import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
} from 'react-native';

export default class Login extends Component {

  static navigationOptions = {
    headerStyle: {
      backgroundColor: '#D7D8E5',
      borderColor: '#D7D8E5',
    },

    headerTintColor: '#FFF',
    headerTitleStyle: {
    }
  }


  render() {
    return (

      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#3D45CE"
        />

        <Image style={styles.logo}
          source={require('../assets/logo2.png')} />

        <TextInput style={styles.input}
          placeholder="Digite seu e-mail" />

        <TextInput style={styles.input}
          placeholder="Digite sua senha" />

        <View style={{ flexDirection: 'row', padding: 20 }}>
          <Text style={{ fontWeight: 'bold', color: "#999FF7", marginRight: 5 }}>Lembrar Senha</Text>
          <Switch />


        </View>

        <TouchableOpacity style={styles.button}
          onPress={() => this.props.navigation.replace('SelectHome')}
        >
          <Text style={style = styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#D7D8E5',
  },

  input: {
    height: 45,
    backgroundColor: '#FFF',
    alignSelf: 'stretch',
    borderColor: '#EEE',
    borderWidth: 1,
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  button: {
    height: 60,
    backgroundColor: "#999FF7",
    alignSelf: 'stretch',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    backgroundColor: "#999FF7",
  },

  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },

})


