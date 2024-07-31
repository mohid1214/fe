import React, {useState} from 'react';
import {Button, ListItem, Overlay, Text} from '@rneui/base';
import {FlatList, View} from 'react-native';

export const RegCountry = ({setCountry, countryError, country}) => {
  const items = [
    'Pakistan',
    'Australia',
    'USA',
    'India',
    'Vietnam',
    'Canada',
    'Germany',
    'UAE',
    'Iran',
    'Bangladaish',
    'SriLanka',
    'Bhutan',
    'Africa',
    'Newzeland',
    'Finland',
    'GreenLand',
    'IceLand',
  ];

  const [isOverlay, setOverlay] = useState(false);

  return (
    <View>
      <View style={{ marginLeft: 40}}>
        
        {countryError && <Text h6 style={{color:'red'}}> * select a country</Text>} 
        <Button
          buttonStyle={{width: '80%', borderRadius: 3}}
          title={country}
          onPress={() => setOverlay(true)}
        />
      </View>

      <View>
        <Overlay
          isVisible={isOverlay}
          onBackdropPress={() => setOverlay(false)}
          overlayStyle={{
            backgroundColor: 'transparent',
            borderColor: 'transparent',
          }}>
          <FlatList
            style={{width: 200}}
            data={items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <ListItem
                onPress={() => {
                  setOverlay(false);
                  setCountry(item);
                }}>
                <ListItem.Content>
                  <ListItem.Title>{item}</ListItem.Title>
                </ListItem.Content>
              </ListItem>
            )}
          />
        </Overlay>
      </View>
    </View>
  );
};
