import {
  firstNameError,
  lastNameError,
  countryError,
  dateError,
  monthError,
  yearError,
  eamilError,
  passwordError,
} from '../constants';

const InitialStateFirstNameError = {
  initialfirstnameerror: null,
};

const InitialStateLastNameError = {
  initiallastnameerror: null,
};

const InitialStateCountryError = {
  initialcountryerror: null,
};

const InitialStateDateError = {
  initialDateError: null,
};

const InitialStateMonthError = {
  initialMonthError: null,
};

const InitalStateYearError ={
    initialYearError : null
}

export const FirstNameErrorReducer = (
  state = InitialStateFirstNameError,
  action,
) => {
  switch (action.type) {
    case firstNameError: {
      return {
        ...state,
        initialfirstnameerror: action.payload,
      };
    }
    default:
      return state;
  }
};

export const LastNameErrorReducer = (
  state = InitialStateLastNameError,
  action,
) => {
  switch (action.type) {
    case lastNameError: {
      return {
        ...state,
        initiallastnameerror: action.payload,
      };
    }
    default:
      return state;
  }
};

export const CountryErrorReducer = (
  state = InitialStateCountryError,
  action,
) => {
  switch (action.type) {
    case countryError: {
      return {
        ...state,
        initialcountryerror: action.payload,
      };
    }
    default:
      return state;
  }
};

export const DateErrorReducer = (state = InitialStateDateError, action) => {
  switch (action.type) {
    case dateError: {
      return {
        ...state,
        initialDateError: action.payload,
      };
    }

    default:
      return state;
  }
};

export const MonthErrorReducer = (state = InitialStateMonthError, action) => {
  switch (action.type) {
    case monthError: {
      return {
        ...state,
        initialMonthError:action.payload
      }
    }
    default:
      return state;
  }
};

export const YearErrorReducer = (state = InitalStateYearError,action) =>{
    switch(action.type){
        case yearError:{
            return{
                ...state,
                initialYearError : action.payload
            }
        }
        default: return state
    }
}
