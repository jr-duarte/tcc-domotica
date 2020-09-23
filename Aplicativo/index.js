import { AppRegistry } from 'react-native';
import HomeScreen from './src/screen/HomeScreen';
//import VoiceTest from './src/VoiceTest';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => HomeScreen);
