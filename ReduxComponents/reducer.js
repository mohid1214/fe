import {standardtoken} from './constants';

const initialState = {
  token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case standardtoken:
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer
