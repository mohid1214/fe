import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from './Screens/landingScreen';
import ShowDataScreen from './Screens/showdatascreen';
import FillFormScreen from './Screens/form';
import Login from './Screens/login';
import Changepassword from './Screens/changepass';
import {Button, Image, Text, View} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import axios from 'axios';
import tailwind from 'tailwindcss';
import styled from 'styled-components/native';

const StyledHeading = styled.View`
   background-color: blue;
   flex:1
`;

const App = () => {
  return (
    <StyledHeading className="bg-red-500">
      <Text className="text-green-500 flex-1">Tailwinds here</Text>
    </StyledHeading>
  );
};

export default App;

// const stack = createNativeStackNavigator();

/* <NavigationContainer>
<stack.Navigator initialRouteName="Landing screen">
  <stack.Screen name="Fill Form Screen" component={FillFormScreen} />
  <stack.Screen name="Landing screen" component={LandingScreen} />
  <stack.Screen name="Your Saved Data" component={ShowDataScreen} />
  <stack.Screen name="login" component={Login} />
  <stack.Screen name="change password" component={Changepassword} />
</stack.Navigator>
</NavigationContainer> */
