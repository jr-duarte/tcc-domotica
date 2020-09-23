import React, { Component } from 'react';
import {
    createStackNavigator, createAppContainer
} from 'react-navigation'

import LoginScreen from './LoginScreen'
import SelectHomeScreen from './SelectHomeScreen'
import SensorsActuatorsScreen from './SensorsActuatorsScreen'
import VoiceTest from './VoiceTest'
import SplashScreen from './SplashScreen'
import resetPassWord from './resetPassWord'

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen
        },

        SelectHome: {
            screen: SelectHomeScreen
        },
        SensorsActuator: {
            screen: SensorsActuatorsScreen
        },
        VoiceTest: {
            screen: VoiceTest
        },
        SplashScreen: {
            screen: SplashScreen
        },
        ResetPassWord: {
            screen: resetPassWord
        },
    },

    {
        initialRouteName: 'Login'
    }
)

const AppContainer = createAppContainer(AppNavigator)

export default class HomeScreen extends Component {
    render() {
        return (
            <AppContainer />
        )
    }
}