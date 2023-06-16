import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Switch, TextInput, Button, Modal, Image, TouchableOpacity, FlatList, Keyboard , ActivityIndicator} from 'react-native';

import api_client from './src/config/api_client';

import Movies from './src/components/Movies';

export default function App() {

  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    const response = await api_client.get('r-api/?api=filmes')
    setFilmes(response.data)
    setLoading(false)
  }, [])

  function renderData() {
    if (!loading) {
      return (
        <View style={styles.container}>
          <FlatList data={filmes} keyExtractor={item => item.id.toString()} renderItem={({ item }) => {
            return <Movies data={item} />
          }} />
        </View >
      )
    } else {
      return (
        <View>
          <ActivityIndicator></ActivityIndicator>
        </View>
      )
    }
  }

  
  return (
    <>
      {renderData()}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});