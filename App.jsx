import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Switch, TextInput, Button, Modal, Image, TouchableOpacity, FlatList, Keyboard, ActivityIndicator } from 'react-native';
import Converter from './src/components/Converter';

export default function App() {
  return (
    <View style={styles.container}>
      <Converter moedaA='USD' moedaB='BRL'/>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});