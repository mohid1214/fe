import {Text, View, StyleSheet, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';

const Changepassword = ({route}) => {
  const {email, token} = route.params;
  const [currentpass, setcurrentpass] = useState('');
  const [newpass, setnewpass] = useState('');

  const[passwordstatus,setpasswordstatus] = useState('')
  console.log("accepted token:" +token)

  const changepassword = async () => {
    const newemail = email;
    let url = 'http://10.0.2.2:3000/changepassword';
    try {
      const response = await axios.post(url, {
        email: email.toString(),
        currentpass: currentpass.toString(),
        newpass: newpass.toString(),
        token
      });
      if(response.status === 210){
        setpasswordstatus("token expired, login again")
        console.log(response.data)
      }
      if(response.status === 201){
        console.log("old pass word is incorrect")
        setpasswordstatus("current password is in correct")
      }
      if(response.status === 202){
        console.log("new password cantbe same as the old password")
        setpasswordstatus("new password cantbe same as the current password")
      }

      if(response.status === 200){
        setpasswordstatus("Password changed successfully,next time use new password to login")
      }
     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.mainview}>
      <View style={styles.mainheadingView}>
        <Text style={styles.mainheadingtext}>Change Password</Text>
      </View>

      <View style={styles.textinputview}>
        <TextInput
          style={styles.textinput}
          placeholder="Enter current password"
          onChangeText={text => setcurrentpass(text)}
        />
      </View>

      <View style={styles.textinputview}>
        <TextInput
          style={styles.textinput}
          placeholder="Enter new password"
          onChangeText={text => setnewpass(text)}
        />
      </View>

      <View style={styles.buttonstyleview}>
        <Button title="Update password with token" onPress={changepassword} />
      </View>
      <View>
        <Text style={styles.status}>{passwordstatus}</Text>
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
    marginTop: 60,
  },
  status:{
    fontSize:25,
    marginTop:25,
    fontWeight:'600',
    color:'white'
  }
});

export default Changepassword;
