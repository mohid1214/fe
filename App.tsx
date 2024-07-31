import React from 'react';
import {FlatList, TouchableHighlight, View} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {Registration} from './Screens/Registration/Registration';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1}}>
        <Registration />
      </View>
    </SafeAreaProvider>
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
