import {
  firstname,
  lastname,
  country,
  date,
  month,
  year,
  email,
  password,
} from '../constants';



const initialStateFN = {
  firstName: null,
};

const initialStateLN = {
  lastName: null,
};

const initialStateC = {
  courty: null,
};

const initialStateDate = {
  initialDate: null,
};

const initialStateMonth = {
  initialMonth: null,
};

const initialStateYear = {
  initialYear: null,
};

const initialStateEmail = {
  initialEmail: null,
};

const initialStatePassword = {
  intialPassword: null,
};

export const firstNameReducer = (state = initialStateFN, action) => {
  switch (action.type) {
    case firstname:
      return {
        ...state,
        firstName: action.payload,
      };
    default:
      return state;
  }
};

export const lastNameReducer = (state = initialStateLN, action) => {
  switch (action.type) {
    case lastname:
      return {
        ...state,
        lastName: action.payload,
      };
    default:
      return state;
  }
};

export const CountryReducer = (state = initialStateC, action) => {
  switch (action.type) {
    case country:
      return {
        ...state,
        courty: action.payload,
      };
    default:
      return state;
  }
};

export const DateReducer = (state = initialStateDate, action) => {
  switch (action.type) {
    case date: {
      return {
        ...state,
        initialDate: action.payload,
      };
    }
    default:
      return state;
  }
};

export const monthReducer = (state = initialStateMonth, action) => {
  switch (action.type) {
    case month: {
      return {
        ...state,
        initialMonth: action.payload,
      };
    }
    default:
      return state;
  }
};

export const ReducerYear = (state = initialStateYear, action) => {
  switch (action.type) {
    case year: {
      return {
        ...state,
        initialYear: action.payload,
      };
    }
    default:
      return state;
  }
};

export const EmailReducer = (state = initialStateEmail, action) => {
  switch (action.type) {
    case email: {
      return {
        ...state,
        initialEmail: action.payload,
      };
    }
    default:
      return state;
  }
};

export const passwordReducer = (state = initialStatePassword, action) => {
  switch (action.type) {
    case password: {
      return {
        ...state,
        intialPassword: action.payload,
      };
    }
    default:
      return state;
  }
};
