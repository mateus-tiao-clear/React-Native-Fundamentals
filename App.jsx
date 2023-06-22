import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/config/routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  }
});

export default App;