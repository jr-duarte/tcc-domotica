import React, { Component } from 'react';
import { View, SafeAreaView, Text,  StatusBar, } from 'react-native';
import LottieView from 'lottie-react-native'

export default class SplashScreen extends Component {
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
            <View style={{ flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: '#D7D8E5' }}>

                <StatusBar
                    barStyle="dark-content"
                    hidden={false}
                    backgroundColor="#3D45CE"
                />

                <LottieView source={require('../assets/splashScreen.json')} autoPlay loop />
                <Text style={{ marginTop: 210, color: "#FFFF", fontWeight: 'bold', fontSize: 45  }}>HomeTech</Text>
            </View>

        );
    }
}
