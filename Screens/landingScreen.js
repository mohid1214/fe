import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const LandingScreen = ({navigation}) => {
  return (
    <View style={styles.flexOne}>
      <View style={styles.headingView}>
        <Text style={styles.heading}>This is Landing Screen</Text>
      </View>
      <View style={styles.subHeadingContainer}>
        <Text style={styles.subheading}>
          Tap the button below to add details
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Fill Form Screen', {
              transition: 'slide_from_right',
            })
          }>
          <Text style={styles.buttonText}>Press To Register</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('login', {
              transition: 'slide_from_right',
            })
          }>
          <Text style={styles.buttonText}>Press To Login</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text}>Share your data with other people</Text>
      </View>
      <Image
        style={styles.imagestyle}
        source={require('./Images/people-network-connection-hexagonal-background-web-marketing.png')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'orange',
  },
  headingView: {
    backgroundColor: 'red',
    width: '100%',
    alignItems: 'center',
  },
  heading: {
    fontWeight: '600',
    fontSize: 30,
    padding: 10,
    color: 'white',
  },
  subHeadingContainer: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    margin: 30,
  },
  subheading: {
    marginBottom: 20,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    color: 'black',
  },
  button: {
    backgroundColor: 'darkblue',
    width: '100%', // Adjust width as needed
    height: 50, // Set a specific height
    alignItems: 'center',
    justifyContent: 'center', // Center the text vertically
    borderRadius: 10,
    margin: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imagestyle: {
    width: '100%',
    height: '50%',
    marginBottom: 100,
  },
  text: {
    fontSize: 25,
    color: 'white',
    fontWeight: '500',
  },
});

export default LandingScreen;
