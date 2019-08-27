import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TextInput,
    TouchableOpacity,
    Image,
} from 'react-native';

import {
    createStackNavigator, createAppContainer
} from 'react-navigation'


class Login extends Component {

    static navigationOptions = {
        title: '',
        headerStyle: {
            backgroundColor: "#00BCD4"
        },
    }

    render() {
        return (

            <View style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#00BCD4"
                />

                <Image style={styles.logo}
                    source={require('./src/assets/logo.png')} />

                <TextInput style={styles.input}
                    placeholder="Digite seu e-mail" />

                <TextInput style={styles.input}
                    placeholder="Digite sua senha" />

                <TouchableOpacity style={styles.button}
                    onPress={() => this.props.navigation.push('SelectHomee')}
                >
                    <Text style={style = styles.buttonText}>Entrar</Text>
                </TouchableOpacity>


            </View>
        )
    }
}

class SelectHomee extends Component {

    static navigationOptions = {
        title: 'Escolha a Residência',
        headerStyle: {
            backgroundColor: "#00BCD4"
        },

        headerTintColor: '#FFF',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }


    render() {
        return (

            <View style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#00BCD4"
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={style = styles.buttonText}>Av. Marquês de São Vicente, 3001</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={style = styles.buttonText}>R. Nebraska, 443</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: Login
        },

        SelectHomee: {
            screen: SelectHomee
        },
    },

    {
        initialRouteName: 'Login'
    }
)

const AppContainer = createAppContainer(AppNavigator)


export default class SelectHome extends Component {
    render() {
        return (
            <AppContainer />
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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
        height: 45,
        backgroundColor: "#00BCD4",
        alignSelf: 'stretch',
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 50,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
    },

    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

})


