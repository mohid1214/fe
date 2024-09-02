import React, {useState} from 'react';
import {Button, ListItem, Overlay, Text} from '@rneui/base';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {StyleSheet} from 'react-native';
import {date, month, year} from '../../ReduxComponents/constants';
import {ListItemContent} from '@rneui/base/dist/ListItem/ListItem.Content';
import {ListItemTitle} from '@rneui/base/dist/ListItem/ListItem.Title';
import { Input } from '@rneui/themed';

export const Birthday = ({setDate, date, dateError,setMonth,month,monthError,setYear,year,yearError}) => {
  const dates = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  const [isDate, setIsDate] = useState(false);


  const months = [1,2,3,4,5,6,7,8,9,10,11,12]
  const [isMonth,setIsMonth] =useState(false)

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
        width: '95%'
      }}>
      <View style={{marginHorizontal: 5, marginTop: 10, width: 100}}>
        {dateError && <Text style={{color: 'red'}}>* required</Text>}

        <Button onPress={() => setIsDate(true)} title={date.toString()} />
        <Overlay
          isVisible={isDate}
          onBackdropPress={() => setIsDate(false)}
          overlayStyle={{
            borderColor: 'transparent',
            backgroundColor: 'transparent',
            borderWidth: 0,
          }}>
          <FlatList
            style={{width: 200}}
            data={dates}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <ListItem
                onPress={() => {
                  setIsDate(false);
                  setDate(item);
                }}>
                <ListItem.Content>
                  <ListItem.Title>{item}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            )}
          />
        </Overlay>
      </View>

      <View style={{marginHorizontal: 5, marginTop: 10, width: 100}}>
        
            {monthError&&<Text style={{color:'red'}}>*required</Text>}
        <Button onPress={() => setIsMonth(true)} title={month.toString()} />
        <Overlay
          isVisible={isMonth}
          onBackdropPress={() => setIsMonth(false)}
          overlayStyle={{
            borderColor: 'transparent',
            backgroundColor: 'transparent',
            borderWidth: 0,
          }}>
          <FlatList
            style={{width: 200}}
            data={months}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <ListItem
                onPress={() => {
                  setIsMonth(false);
                  setMonth(item)
                }}>
                <ListItem.Content>
                  <ListItem.Title>{item}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            )}
          />
        </Overlay>
      </View>

      <View style={{marginHorizontal: 5, marginTop: 10, width: 100}}>
        {yearError&&<Text style={{color:'red'}}>*required</Text>}
        <Input 
        inputStyle={{textAlign:'center'}}
        placeholder='Year'
        onChangeText={(text)=>setYear(text)}
        maxLength={4}
        keyboardType='numeric'
        />
      </View>
    </View>
  );
};


