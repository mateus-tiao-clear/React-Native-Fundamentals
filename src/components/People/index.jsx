import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function People({data}) {
  return (
    <View style={styles.areaPeople}>
      <Text style={styles.textoPeople}>{data.nome}</Text>
      <Text style={styles.textoPeople}>{data.email}</Text>
      <Text style={styles.textoPeople}>{data.idade}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  areaPeople: {
    backgroundColor: '#222',
    marginTop: 15
  },
  textoPeople: {
    color: '#FFF',
    fontSize: 20
  }
});