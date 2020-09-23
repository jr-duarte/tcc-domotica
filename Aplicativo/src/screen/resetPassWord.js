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
  ActivityIndicator,
  AsyncStorage,
} from 'react-native';

export default class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      isAuthenticated: false,
      dateUserBD: '',
      showIndicator: false,
      switchValue: true,

      splashScreen: false,
    };

  }



  getItensAsyncStorage = async () => {
    try {
      await AsyncStorage.getItem("@LoginHomeTech:email").then(
        value => this.setState({ email: value })
      )
      await AsyncStorage.getItem("@LoginHomeTech:password").then(
        value => this.setState({ password: value })
      )
    } catch (e) {
      console.log(e)
    }
  }
  setItensAsyncStorage = async () => {
    try {
      if (this.state.switchValue) {
        await AsyncStorage.setItem("@LoginHomeTech:email", this.state.email)
        await AsyncStorage.setItem("@LoginHomeTech:password", this.state.password)
      } else {
        this.deleteItensAsyncStorage()
      }
    } catch (e) {
      console.log(e)
    }
  }

  deleteItensAsyncStorage = async () => {
    try {
      await AsyncStorage.removeItem("@LoginHomeTech:email")
      await AsyncStorage.removeItem("@LoginHomeTech:password")
    } catch (e) {
      console.log(e)
    }
  }

  async resetPassWord() {
    if (this.state.email == '') {
      ToastAndroid.show('Por favor, informe o seu e-mail!', ToastAndroid.SHORT)
    } else {
      let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyD7nmJdPtM_lpwDiUZ68F0__yEUMth8WrE`, {
        requestType: "PASSWORD_RESET",
        email: this.state.email,
      }).catch(
        function (error) {
          ToastAndroid.show('Email inválido!', ToastAndroid.SHORT)
        }
      ).then(res => {
        if (res.data.kind) {
          ToastAndroid.show('Email enviado para a redefinção!', ToastAndroid.SHORT)
          this.props.navigation.push('Login')
        }
      }

      )


    }
  }
  static navigationOptions = {
    title: 'Redefinição de Senha',
    headerStyle: {
      backgroundColor: "#3D45CE"
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
    }
  }
  //static navigationOptions = {
  //header: null,
  //}

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#3D45CE"
        />

        <TextInput style={styles.input}
          placeholder="Digite seu e-mail"
          autoFocus={false} keyboardType='email-address'
          value={this.state.email}
          onChangeText={email => this.setState({ email })}
        />

        <TouchableOpacity style={styles.button}
          onPress={this.resetPassWord.bind(this)}>
          <Text style={{ fontWeight: 'bold', color: "#FFFF", marginRight: 5 }}>Enviar E-mail de Redefinição</Text>
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





