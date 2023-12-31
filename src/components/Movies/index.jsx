import React from "react";

import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'

export default function Movies({data}) {
  return (
    <View>
      <View style={styles.card}>
        <Text style={styles.titulo}>{data.nome}</Text>
        <Image source={{uri: data.foto}} style={styles.capa}/>

        <View style={styles.areaBotao}>
          <TouchableOpacity style={styles.botao} onPress={() => alert(data.nome)}>
            <Text style={styles.textoBotao}>LEIA MAIS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    backgroundColor: '#FFF',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    margin: 15,
    shadowRadius: 5,
    borderRadius: 5,
    elevation: 3
  },
  titulo: {
    fontSize: 18,
    padding: 15
  },
  capa: {
    height: 250,
    zIndex: 2
  },
  areaBotao: {
    alignItems: 'flex-end',
    marginTop: 40,
    zIndex: 9
  },
  botao: {
    width: 100,
    backgroundColor: '#09A6FF',
    opacity: 1,
    padding: 8,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  textoBotao: {
    textAlign: 'center',
    color: '#FFF'
  }
});