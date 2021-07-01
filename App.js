import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import StartEarTestScreen from './screens/StartEarTestScreen';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends Component {
  render(){
  return (
    <View> 
      <AppContainer/>
    </View>
  );
       }
   }

  var AppNavigator = createSwitchNavigator({
    WelcomeScreen : WelcomeScreen,
    StartEarTestScreen : StartEarTestScreen
  })

  const AppContainer = createAppContainer(AppNavigator)
  
  