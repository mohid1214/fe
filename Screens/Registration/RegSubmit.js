import React from 'react';
import {View} from 'react-native';
import {Button, Text} from '@rneui/base';
import {useState} from 'react';

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
  const logvalues = () => {
    let nameRegex = /^[a-zA-z]+$/;
    let yearRegex = /^[0-9]+$/;
    let regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    let spaceRegex = /\s/;

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
      passError
    ) {
      console.log('errors are present');
    } else {
      console.log('clear for submission');
    }
  };
  return (
    <View style={{marginHorizontal: 20}}>
      <Button
        title={'log details'}
        onPress={logvalues}
        buttonStyle={{borderRadius: 20, marginTop: 25}}
      />
    </View>
  );
};
