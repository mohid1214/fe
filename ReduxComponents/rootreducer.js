import { combineReducers } from "redux";
import { firstNameReducer,lastNameReducer,CountryReducer,DateReducer,monthReducer,ReducerYear,EmailReducer,passwordReducer } from "./Reducers/firstnamereducer";
import { FirstNameErrorReducer,LastNameErrorReducer,CountryErrorReducer,DateErrorReducer,MonthErrorReducer,YearErrorReducer } from "./Reducers/ErrorReducer";
export default combineReducers({

    fname: firstNameReducer,
    lname: lastNameReducer,
    country: CountryReducer,
    date: DateReducer,
    month: monthReducer,
    year : ReducerYear,
    email: EmailReducer,
    password: passwordReducer,

    
    fnameerror : FirstNameErrorReducer,
    lnameerror : LastNameErrorReducer,
    Cerror : CountryErrorReducer,
    derror : DateErrorReducer,
    merror : MonthErrorReducer,
    yerror : YearErrorReducer

})

