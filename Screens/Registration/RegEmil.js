import React from 'react';
import {Text} from '@rneui/base';
import {View} from 'react-native';
import {Input} from '@rneui/themed';

export const RegEmail = ({setEmail,emailError}) => {
  return (
    <View style={{marginTop:10,marginHorizontal:10}}>
        {emailError&&<Text style={{color:'red'}}>*required</Text>}
      <Input placeholder="@email"  onChangeText={text => setEmail(text)}/>
    </View>
  );
};
