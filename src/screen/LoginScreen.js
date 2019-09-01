import React, { Component } from 'react';
import axios from 'axios';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
  ToastAndroid,
} from 'react-native';

export default class Login extends Component {

  state = {
    email: '',
    password: '',
    isAuthenticated: false
  }


  //async ola() {

  // const response = await axios.put(`https://apptcc-c7e29.firebaseio.com/user/ola.json?auth=cWsetWuViUzDMOctCzXwGgBpPBZTBo7uG9XajK2q`, {
  //  name: 'juniordedddcaxcxzc',
  //idade: 31321321
  // })

  // console.log(response)
  // console.log(response.data)
  //}

  async login() {
    const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7nmJdPtM_lpwDiUZ68F0__yEUMth8WrE`, {
      email: this.state.email,
      password: this.state.password,
      returnSecureToken: true
    })
      .then(res => {
        if (res.data.localId) {
          this.state.isAuthenticated = true
          console.log(res.data)
          this.props.navigation.replace('SelectHome')
          ToastAndroid.show('Sucesso', ToastAndroid.SHORT)
        }
      }, () => {
        this.state.isAuthenticated = false
      })
      .catch(err => console.log(err))
    if (!this.state.isAuthenticated) {
      ToastAndroid.show('Email ou Senha inválidos!', ToastAndroid.SHORT)
    }
  }

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
          placeholder="Digite seu e-mail"
          autoFocus={true} keyboardType='email-address'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />

        <TextInput style={styles.input}
          placeholder="Digite sua senha"
          autoFocus={true} secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({ password })}
        />

        <View style={{ flexDirection: 'row', padding: 20 }}>
          <Text style={{ fontWeight: 'bold', color: "#999FF7", marginRight: 5 }}>Lembrar Senha</Text>
          <Switch />


        </View>

        <TouchableOpacity style={styles.button}
          onPress={this.login.bind(this)}
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





