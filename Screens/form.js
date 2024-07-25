import React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useState, useEffect} from 'react';
import axios from 'axios';
import DateTimePicker from '@react-native-community/datetimepicker';
import Ionicon from 'react-native-vector-icons/Ionicons';

const FillFormScreen = ({navigation}) => {
  const [fetchedUsers, startfetchusers] = useState([]);
  const initalValue = new Date(2000, 0, 1);
  const [date, setdate] = useState(false);

  const [newdate, setnewdate] = useState('');
  const [name, setFirstName] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');

  const [view, showview] = useState(false);
  const [exists, setuserexists] = useState(false);

  const GetUsersFromDataBase = async () => {
    let url = 'http://10.0.2.2:3000/GetUsers';
    try {
      const response = await axios.get(url);
      startfetchusers(response.data);
      console.log('saved');
    } catch (err) {
      console.log(err);
    }
  };

  const SaveDataToDataBase = async () => {
    let url = 'http://10.0.2.2:3000/register';
    try {
      const response = await axios.post(url, {
        name: name.toString(),
        email: email.toString(),
        phone: phone.toString(),
        password: password.toString(),
      });
      if (response.status === 200) {
        setuserexists(false);
      }
      if (response.status === 201) {
        setuserexists(true);
      }
    } catch (err) {
      console.log('error' + err);
    }
  };



  return (
    <View style={styles.mainview}>
      <View style={styles.mainheadingView}>
        <Text style={styles.mainheadingtext}>Register</Text>
      </View>

      <View style={styles.textinputview}>
        <TextInput
          placeholder="Name"
          value={name}
          style={styles.textinput}
          onKeyPress={event => {
            const {key} = event.nativeEvent;
            if ((key >= 'a' && key <= 'z') || (key >= 'A' && key <= 'Z')) {
              const newfirstname = name + key;
              setFirstName(newfirstname);
            }
            if (key === 'Backspace') {
              const newfirstname = name.slice(0, -1);
              setFirstName(newfirstname);
            }
          }}
        />
      </View>

      <View style={styles.textinputview}>
        <TextInput
          placeholder="email"
          style={styles.textinput}
          value={email}
          onChangeText={text => setemail(text)}
        />
      </View>

      <View style={styles.textinputview}>
        <TextInput
          style={styles.textinput}
          placeholder="Phone Number"
          keyboardType="numeric"
          onChangeText={text => setphone(text)}
        />
      </View>

      <View style={styles.textinputview}>
        <TextInput
          style={styles.textinput}
          placeholder="password"
          onChangeText={text => setpassword(text)}
        />
      </View>

      <View style={styles.buttonstyleview}>
        <Button
          title="Submit Your Data"
          onPress={() => {
            SaveDataToDataBase();
            showview(true);
          }}
        />
      </View>


      {view ? (
        <View>
          {exists ? (
            <Text style={styles.mainheadingtext}>User Already Exists!</Text>
          ) : (
            <Text style={styles.mainheadingtext}>User Registered!</Text>
          )}
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  mainview: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  mainheadingView: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: 'red',
    height: 50,
    justifyContent: 'center',
  },
  mainheadingtext: {
    color: 'white',
    fontWeight: '600',
    fontSize: 30,
  },
  textinput: {
    borderBottomWidth: 2,
    width: '80%',
    marginLeft: 20,
    marginRight: 20,
  },
  textinputview: {
    width: '100%',
    marginVertical: 25,
  },
  buttonstyleview: {
    width: '75%',
    margin: 20,
  },
});

export default FillFormScreen;
