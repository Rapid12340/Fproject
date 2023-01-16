import React from "react";
import type {Node} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { initializeApp } from 'firebase/app';


import Login from './screens/Login'
import AMenu from './screens/AMenu'
import Menu from './screens/Menu'


import Turn from './screens/Turn'




const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return( 
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name = "Login" component={Login}  options={{title: 'Crazy'}}/>
    <Stack.Screen name = "AMenu" component={AMenu}/>
    <Stack.Screen name = "Menu" component={Menu}/>
    <Stack.Screen name = "Turn" component={Turn}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
 
}

export default App;

