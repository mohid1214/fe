import React, {useState} from 'react';
import {
  Avatar,
  Text,
  Input,
  Button,
  Overlay,
  ListItem,
  useTheme,
} from '@rneui/themed';
import {View} from 'react-native';
import {RegHeading} from './RegHeading';
import {RegName} from './RegName';
import {RegCountry} from './RegCountry';
import {Birthday} from './Birthday';
import {RegEmail} from './RegEmil';
import {RegPass} from './RegPass';
import {RegSubmit} from './RegSubmit';

export const Registration = () => {
  const [firstName, setFirstName] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);

  const [lastName, setLastName] = useState('');
  const [lastNameError, setLastNameError] = useState(false);

  const [country, setCountry] = useState('Select Country');
  const [countryError, setCountryError] = useState(false);

  const [date, setDate] = useState('date');
  const [dateError, setDateError] = useState(false);

  const [month, setMonth] = useState('month');
  const [monthError, setMonthError] = useState(false);

  const [year, setYear] = useState('');
  const [yearError, setYearError] = useState(false);

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);

  const [pass, setPass] = useState('');
  const [passError, setPassError] = useState(false);

  

  return (
    <View style={{backgroundColor: '#E0F7FA', flex: 1}}>
      <RegHeading />
      <RegName
        setFirstName={setFirstName}
        setLastName={setLastName}
        firstNameError={firstNameError}
        lastNameError={lastNameError}
      />
      <RegCountry
        setCountry={setCountry}
        countryError={countryError}
        country={country}
      />
      <Birthday
        setDate={setDate}
        date={date}
        dateError={dateError}
        setMonth={setMonth}
        month={month}
        monthError={monthError}
        setYear={setYear}
        year={year}
        yearError={yearError}
      />

      <RegEmail setEmail={setEmail} emailError={emailError} />
      <RegPass setPass={setPass} passError={passError} />
      <RegSubmit
        firstName={firstName}
        lastName={lastName}
        country={country}
        date={date}
        month={month}
        year={year}
        email={email}
        pass={pass}
        setFirstNameError={setFirstNameError}
        setLastNameError ={setLastNameError}
        setCountryError={setCountryError}
        setDateError={setDateError}
        setMonthError={setMonthError}
        setYearError = {setYearError}
        setEmailError ={setEmailError}
        setPassError = {setPassError}
        firstNameError={firstNameError}
        lastNameError={lastNameError}
        countryError = {countryError}
        dateError ={dateError}
        monthError = {monthError}
        yearError = {yearError}
        emailError = {emailError}
        passError = {passError}
      />
    </View>
  );
};
