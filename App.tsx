import React from 'react';
import {FlatList, TouchableHighlight, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {Registration} from './Screens/Registration/Registration';
import SignInButton from './Screens/Registration/GoogleLogin';

const App = () => {
  return (
    
      <View>
        <SignInButton />
      </View>
    
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
