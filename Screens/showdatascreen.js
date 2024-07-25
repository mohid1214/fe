import axios from 'axios';
import React, {useState} from 'react';
import {Text, View, FlatList, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useSelector } from 'react-redux';

const ShowDataScreen = ({route}) => {

  const bestToken = useSelector((state)=>state.token)
  if(bestToken.data){
    console.log("it is not empty btw")
  }

  console.log(JSON.stringify(bestToken.token) + "  best token")
  const [name, setname] = useState('');
  const [eemail, seteemail] = useState('');
  const {email, token} = route.params;
  const [tokenstatus, settoeknstatus] = useState('');
  console.log('token :' + token);
  const navigation = useNavigation();

  const VerifyTokenAndGetUserDetails = async () => {
    let url = 'http://10.0.2.2:3000/login-user';
    const respone = await axios.post(url, {
      token: token.toString(),
    });
    if (respone.status === 200) {
      GetUserDetails();
      console.log('status 200');
      console.log('toke is verified');
    }
  };

  const GetUserDetails = async () => {
    let url = 'http://10.0.2.2:3000/user-data';
    try {
      const response = await axios.get(url, {
        params: {
          email: email.toString(),
        },
      });
      if (response.status === 200) {
        const {newUser} = response.data;

        // Destructure properties from newUser
        const {name, email} = newUser;
        setname(name);
        seteemail(email);
      }
    } catch (er) {
      console.log(er);
    }
  };

  const DeleteUser = async () => {
    let url = 'http://10.0.2.2:3000/delete';
    try {
      const response = await axios.delete(url, {
        params: {
          email: email.toString(),
          token: token.toString(),
        },
      });
      if (response.status === 201) {
        console.log('user not found');
        settoeknstatus('invalid or expired token,login again')
      }
      if (response.status === 200) {
        console.log('user found');
        navigation.navigate('Landing screen');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.mainview}>
      <View style={styles.mainheadingView}>
        <Text style={styles.mainheadingtext}>Your data from Database</Text>
      </View>

      <View style={styles.fetcheddataView}>
        <Text style={styles.fetcheddatatextheading}>Your Name </Text>
        <Text style={styles.fetcheddatatext}>{name} </Text>
      </View>
      <View style={styles.fetcheddataView}>
        <Text style={styles.fetcheddatatextheading}>Your Email :</Text>
        <Text style={styles.fetcheddatatext}>{eemail} </Text>
      </View>
      <Button
        title="Get Data With token"
        onPress={VerifyTokenAndGetUserDetails}
      />
      <View style={{margin: 50}}>
        <Button
          title="Delete your account"
          onPress={() => {
            DeleteUser();
          }}
        />
      </View>

      <View style={{margin: 50}}>
        <Button
          title="Change password"
          onPress={() => navigation.navigate('change password', {email, token})}
        />
      </View>

      <View>
        <Text style={styles.mainheadingtext}>{tokenstatus}</Text>
      </View>
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
  fetcheddataView: {
    borderWidth: 2,
    margin: 10,
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'lightblue',
    borderRadius: 10,
    borderColor: 'white',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: '30%',
  },
  fetcheddatatextheading: {
    fontSize: 20,
    fontWeight: '900',
    color: 'white',
  },
  fetcheddatatext: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
  },
});

export default ShowDataScreen;
