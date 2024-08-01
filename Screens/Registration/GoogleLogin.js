import React, {useEffect} from 'react';
import {Button, View} from 'react-native';
import {
  GoogleSigninButton,
  GoogleSignin,
} from '@react-native-google-signin/google-signin';
import {Text} from '@rneui/base';

const SignInButton = () => {

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '493625205863-4g5q9c15a0h144shq06spi2kivii5k4l.apps.googleusercontent.com',
    });
  }, []);

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices({showPlayServicesUpdateDialog: true});
      const {userInfo} = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (e) {
      console.log('Google Sign-In Error:', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User cancelled the login');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign in progress');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play services not available or outdated');
      } else {
        console.log('Something went wrong:', error);
      }
    }
  };

  return (
    <View>
      <Text>Sign in with gogole</Text>
      <GoogleSigninButton
        style={{width: 312, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
};

export default SignInButton;
