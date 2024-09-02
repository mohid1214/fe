import React from 'react';
import {Text, Input} from '@rneui/base';
import {View} from 'react-native';
import { lastname } from '../../ReduxComponents/constants';

export const RegName = ({setFirstName, setLastName, firstNameError,lastNameError}) => {
  return (
    <View style={{marginTop: 15}}>
      <View>
        <Input
          placeholder="first name"
            errorMessage= {firstNameError?'* only characters are allowed' :null}
          onChangeText={(text)=>setFirstName(text)}
        />
      </View>

      <View>
        <Input
          placeholder="last name"
          errorMessage= {lastNameError?'* only characters are allowed' :null}
          onChangeText={(text)=>setLastName(text)}
        />
      </View>
    </View>
  );
};
