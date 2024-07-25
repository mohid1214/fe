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
import RNFS from 'react-native-fs';
import axios from 'axios';

const stack = createNativeStackNavigator();

const App = () => {
  const [filename, setfilename] = useState('');
  const [filetype, setfiletype] = useState('');
  const [fileuri, setfileuri] = useState('');
  const [uploadurl, setuploadurl] = useState('');
  const [downloadurl,setdownloadurl] = useState('')

  const handleFileSelection = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: ['image/jpeg'], // Restrict to JPEG files
      });

      setfilename(res[0]?.name || '');
      setfiletype(res[0].type || '');
      setfileuri(res[0].uri);
    } catch (err) {
      console.log(err + 'this is error');
    }
  };

  const getPreSignedUrl = async () => {
    try {
      let url = 'http://10.0.2.2:3000/geturl';
      const response = await axios.get(url, {
        params: {
          filename,
          filetype,
        },
      });
      setuploadurl(response.data.url);
      setdownloadurl(response.data.s3Url)
      console.log(response.data.s3Url)
    } catch (e) {
      console.log(e);
    }
  };

  const uploadData = async () => {
    try {
      const file = await fetch(fileuri);
      const response = axios.put(uploadurl, file, {
        headers: {
          'Content-Type': filetype,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View>
      <Button title="Select file" onPress={handleFileSelection} />
      <Button title="Get Presigned Url" onPress={getPreSignedUrl} />
      <Button title="Upload file" onPress={uploadData} />
    </View>
  );
};

export default App;

/* <NavigationContainer>
<stack.Navigator initialRouteName="Landing screen">
  <stack.Screen name="Fill Form Screen" component={FillFormScreen} />
  <stack.Screen name="Landing screen" component={LandingScreen} />
  <stack.Screen name="Your Saved Data" component={ShowDataScreen} />
  <stack.Screen name="login" component={Login} />
  <stack.Screen name="change password" component={Changepassword} />
</stack.Navigator>
</NavigationContainer> */
