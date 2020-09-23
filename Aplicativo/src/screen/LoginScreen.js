import React, { Component } from 'react';
import axios from 'axios';
import LottieView from 'lottie-react-native';
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

      splashScreen: true,
    };
    this.getItensAsyncStorage()
    this.timeOutSplashScreen()
  }

  timeOutSplashScreen(){
    setTimeout(() => {
      this.setState({ splashScreen: false })

    }, 3000);
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

  toggleSwitch = (value) => {
    this.setState({ switchValue: value })
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
    this.setState({ showIndicator: true })
    let response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD7nmJdPtM_lpwDiUZ68F0__yEUMth8WrE`, {
      email: this.state.email,
      password: this.state.password,
      returnSecureToken: true
    })
      //.catch(err => console.log(err))
      .then(res => {
        if (res.data.localId) {
          this.setState({ isAuthenticated: true })
          //console.log(res.data)
          this.getDateUser(res.data.localId)
          this.setItensAsyncStorage()
          ToastAndroid.show('Sucesso', ToastAndroid.SHORT)
        }
      }, () => {
        this.setState({ isAuthenticated: false })
      })
    if (!this.state.isAuthenticated) {
      this.setState({
        showIndicator: false,
        email: '',
        password: '',
      })
      ToastAndroid.show('Email ou Senha inválidos!', ToastAndroid.SHORT)
      this.deleteItensAsyncStorage()
    }
  }

  static navigationOptions = {
    header:null,
  }

  render() {
    if (this.state.splashScreen) {
      return(
        
      <View style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D7D8E5' }}>
        <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor="#3D45CE"
          />
        
        <LottieView source={require('../assets/splashScreen.json')} autoPlay loop />
        <Text style={{ marginTop: 210, color: "#FFF", fontWeight: 'bold', fontSize: 45 }}>HomeTech</Text>
      </View>
      )
    }else {
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
            autoFocus={false} keyboardType='email-address'
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />

          <TextInput style={styles.input}
            placeholder="Digite sua senha"
            autoFocus={false} secureTextEntry={true}
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />

          <View style={{ flexDirection: 'row', padding: 20 }}>
            <Text style={{ fontWeight: 'bold', color: "#999FF7", marginRight: 5 }}>Lembrar E-mail/Senha</Text>
            <Switch
              value={this.state.switchValue}
              onValueChange={this.toggleSwitch}
            />
          </View>

          <TouchableOpacity style={styles.button}
            onPress={this.login.bind(this)}>
            {this.state.showIndicator ?
              <LottieView source={require('../assets/lodingLogin.json')} autoPlay loop /> :
              <Text style={style = styles.buttonText}>Entrar</Text>}
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: '#D7D8E5'}}  onPress={() => this.props.navigation.push('ResetPassWord')}>
          <Text style={{fontWeight: 'bold', color: "#999FF7", marginTop: 5 } }>Esqueceu a senha?</Text>
          </TouchableOpacity>
  
        </View>
      );
    }
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





