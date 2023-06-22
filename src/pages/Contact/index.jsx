import React from 'react';

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

import { useNavigation, StackActions } from '@react-navigation/native';

const Contact = () => {
 const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{textAlign: "center"}}>Contato</Text>
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

export default Contact;