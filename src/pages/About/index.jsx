import React, { useLayoutEffect } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity, 
  Button
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { TabRouter, useNavigation, useRoute } from '@react-navigation/native';

const About = () => {

 return (
    <SafeAreaView style={styles.container}>
      <Text style={{textAlign: "center"}}>Tela Sobre</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  }
});

export default About;