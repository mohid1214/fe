import {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setToken} from '../ReduxComponents/actions';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {
  const dispatch = useDispatch();

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [view, setview] = useState(false);
  const [credentials, setcredentials] = useState(false);
  const [token, settokenn] = useState('');

  const navigation = useNavigation();

  const loginuser = async () => {
    let url = 'http://10.0.2.2:3000/login';

    const response = await axios.post(url, {
      email: email.toString(),
      password: password.toString(),
    });

    if (response.status === 201) {
      console.log('invalid credentials');
      console.log(response.data);
      setcredentials(false);
    }

    if (response.status === 200) {
      const newToken = response.data.token;
      settokenn(newToken.token);
      dispatch(setToken(newToken));
      console.log('credntials are correct');
      console.log(token);
      setcredentials(true);
      navigation.navigate('Your Saved Data', {
        email,
        token: newToken,
      });
    }
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.mainview}>
      <View style={styles.mainheadingView}>
        <Text style={styles.mainheadingtext}>Login</Text>
      </View>

      <View style={styles.textinputview}>
        <View>
          <TextInput
            placeholder="Enter Email"
            style={styles.textinput}
            onChangeText={text => setemail(text)}
          />
        </View>

        <View>
          <TextInput
            placeholder="Enter Password"
            style={styles.textinput}
            secureTextEntry={passwordVisible}
            onChangeText={text => setpassword(text)}
          />
          <TouchableOpacity
            onPress={togglePasswordVisibility}
            style={{position: 'absolute',right:60,top:40}}>
            <Icon
              name={passwordVisible ? 'eye-slash' : 'eye'}
              size={30}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{width: '80%', marginTop: 40}}>
        <Button
          title="Login"
          onPress={() => {
            setview(true);
            loginuser();
          }}
        />
      </View>
      {view ? (
        <View>
          {credentials ? (
            <Text>credentials found</Text>
          ) : (
            <Text>credentials not found</Text>
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
    marginTop: 30,
    color: 'white',
    fontSize: 25,
  },
  textinputview: {
    width: '100%',
    marginVertical: 25,
  },
});

export default Login;
