import { combineReducers } from "redux";
import authReducer from "./reducer";

export default combineReducers({
    token:authReducer
})

