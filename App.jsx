import React, {Component} from "react";
import { View, Text } from "react-native";

class App extends Component {
  render(){
    return(
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'center'}}>
        <View style={{backgroundColor: "yellow", height: 50, width: 50}} />
        <View style={{backgroundColor: "red", height: 50, width: 50}} />
        <View style={{backgroundColor: "green", height: 50, width: 50}} />
      </View>
    )
  }
}

export default App