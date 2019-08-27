import React, { Component } from 'react';
import {
    createStackNavigator, createAppContainer
} from 'react-navigation'

import LoginScreen from './LoginScreen'
import SelectHomeScreen from './SelectHomeScreen'
import SensorsActuatorsScreen from './SensorsActuatorsScreen'



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