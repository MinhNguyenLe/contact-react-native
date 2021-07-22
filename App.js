/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavContainer from './src/navigations';

const App = () => {
  return <AppNavContainer></AppNavContainer>;
};

export default App;
