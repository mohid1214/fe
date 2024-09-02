import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '@rneui/base';
import {useState} from 'react';
import axios from 'axios';
import {lastname} from '../../ReduxComponents/constants';

export const RegSubmit = ({
  firstName,
  lastName,
  country,
  date,
  month,
  year,
  email,
  pass,
  setFirstNameError,
  setLastNameError,
  setCountryError,
  setDateError,
  setMonthError,
  setYearError,
  setEmailError,
  setPassError,
  firstNameError,
  lastNameError,
  countryError,
  dateError,
  monthError,
  yearError,
  emailError,
  passError,
}) => {

  const [regMessage,setRegMessage] = useState('')

  const logvalues = () => {
    let nameRegex = /^[a-zA-z]+$/;
    let yearRegex = /^[0-9]+$/;
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    let spaceRegex = /\s/;
    console.log('here');
    if (nameRegex.test(firstName)) {
      setFirstNameError(false);
    } else {
      setFirstNameError(true);
    }

    if (nameRegex.test(lastName)) {
      setLastNameError(false);
    } else {
      setLastNameError(true);
    }

    if (country === 'Select Country') {
      setCountryError(true);
    } else {
      setCountryError(false);
    }

    if (date === 'date') {
      setDateError(true);
    } else {
      setDateError(false);
    }
    if (month === 'month') {
      setMonthError(true);
    } else {
      setMonthError(false);
    }

    if (!yearRegex.test(year) || !year || year > 2025 || year < 1924) {
      setYearError(true);
    } else {
      setYearError(false);
    }
    if (!regexEmail.test(email) || !email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    if (spaceRegex.test(pass) || !pass) {
      setPassError(true);
    } else {
      setPassError(false);
    }
    clearForSubmission();
  };

  const clearForSubmission = () => {
    if (
      firstNameError ||
      lastNameError ||
      countryError ||
      dateError ||
      monthError ||
      yearError ||
      emailError ||
      passError ||
      !firstName ||
      !lastname ||
      !email ||
      !pass ||
      !year
    ) {
      console.log('errors are present');
    } else {
      console.log('clear for submission');
      CreateUser();
    }
  };

  const CreateUser = async () => {
    let url = 'http://10.0.2.2:3000/users/createUsers';

    try {
      const result = await axios.post(url, {
        firstName,
        lastName,
        country,
        date,
        month,
        year,
        email,
        pass,
      });
      if(result.status === 200){
        setRegMessage("User created Successfuly")
      }
      if(result.status === 201){
        setRegMessage("User already exists")
      }
      if(result.status === 500){
        setRegMessage("error,try again")
      }
      console.log(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={{marginHorizontal: 20}}>
      <Text style = {{color:'red', fontSize:20}}>{regMessage}</Text>
      <Button
        title={'Register'}
        onPress={() => logvalues()}
        buttonStyle={{borderRadius: 20, marginTop: 25}}
      />
    </View>
  );
};
