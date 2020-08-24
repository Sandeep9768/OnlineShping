import React, { Component } from 'react'
import { Text, View } from 'react-native'
import RootNavigation from './src/views/RootNavigation'
import { Provider } from 'react-redux'
import { store } from './src/store'
import { YellowBox} from "react-native";

export default class App extends Component {
  render() {
    return (
    //  <Text>vfdjhvfdkjvfdj</Text>
     <Provider store={store} style={{backgroundColor:'transparent'}}>
      <RootNavigation style={{backgroundColor:'transparent'}}></RootNavigation>
    </Provider>
    // <AnimationScreen></AnimationScreen>
    // <Text>dfvdvfdv </Text>
    )
  }
}