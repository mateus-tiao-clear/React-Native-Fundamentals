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

 import FontAwesome from 'react-native-vector-icons/FontAwesome';
 import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

 const Home = () => {
   const navigation = useNavigation()


   function navegaSobre(){
     navigation.navigate("Sobre")
   }

   return (
     <SafeAreaView style={styles.container}>
       <Text style={{textAlign: "center"}}>Tela Home</Text>
       <Button title="Ir para sobre" onPress={() => navegaSobre()}/>

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

 export default Home;
