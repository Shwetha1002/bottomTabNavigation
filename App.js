import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import { createAppContainer} from 'react-navigation'
import FaceBookScreen from './fb'
import InstagramScreen from './in';


export default class App extends React.Component {

  render(){
return(
<View>
<AppContainer/>
</View>

);

 }
}

const TabNavigator = createBottomTabNavigator({
  FaceBook : FaceBookScreen,
  Instagram : InstagramScreen
});

const AppContainer = createAppContainer(TabNavigator);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
