/**
 * Devall React Native App
 * https://github.com/devall/react-native-boilerplate
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';

import App from './src/App';
import { name as appName } from './app.json';

if (__DEV__) {
  console.disableYellowBox = true;
}

AppRegistry.registerComponent(appName, () => App);
