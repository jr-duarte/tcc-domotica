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
    isAuthenticated: false,
    dateUserBD: '',
  }

  async getDateUser(localId) {
    let response = await axios.get(`https://apptcc-c7e29.firebaseio.com/users/${localId}.json?auth=sFQlfC4m3JNUMEnBmO8TqT9IEqHl7EM9LD0wdRDf`, {
    })
      .catch(err => console.log(err))
      .then(res => {
        //this.setState({dateUserBD: JSON.stringify(res.data)})
       // console.log(this.state.dateUserBD)
        this.props.navigation.replace('SelectHome', res.data)
      })
  }

  async login() {
    let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7nmJdPtM_lpwDiUZ68F0__yEUMth8WrE`, {
      email: this.state.email,
      password: this.state.password,
      returnSecureToken: true
    })
      //.catch(err => console.log(err))
      .then(res => {
        if (res.data.localId) {
          this.setState({isAuthenticated: true})
          //console.log(res.data)
          this.getDateUser(res.data.localId)
          ToastAndroid.show('Sucesso', ToastAndroid.SHORT)
        }
      }, () => {
        this.setState({ isAuthenticated: false })
      })
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





