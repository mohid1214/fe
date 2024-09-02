import React from 'react';
import {FlatList, TouchableHighlight, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Registration} from './Screens/Registration/Registration';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './Screens/Login/Longin';
import { Home } from './Screens/HomeScreen/Home';
const App = () => {

  const Stack = createNativeStackNavigator();
  return (
    
     <NavigationContainer>
      <Stack.Navigator initialRouteName='Register'>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen  name='Register' component={Registration}/> 
        <Stack.Screen name='Home' component={Home} />
      </Stack.Navigator>
     </NavigationContainer>
    
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayContainer: {
    width: 300,
  },
});
