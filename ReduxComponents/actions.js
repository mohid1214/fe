import { firstname,lastname,country,date,month,year,email,password} from "./constants";
import {firstNameError,lastNameError,countryError,dateError,monthError,yearError,eamilError,passwordError} from './constants'


export const AsetFirstName = (Firstname) =>({
    type: firstname,
    payload : Firstname
});

export const AsetLastName = (Lastname) =>({
    type: lastname,
    payload: Lastname
})

export const Acountry = (coutry)=>({
    type: country,
    payload:coutry
})

export const Adate = (data)=>({
    type: date,
    payload:data
})

export const Amonth = (data)=>({
    type: month,
    payload:data
})

export const Ayear = (data)=>({
    type: year,
    payload: data
})

export const Aemail = (data)=>({
    type:email,
    payload:data
})

export const Apassword = (data) =>({
    type:password,
    payload:data
})






export const AfirstNameError = (error) =>({
    type:firstNameError,
    payload:error
})

export const AlastnameError = (error) =>({
    type:lastNameError,
    payload:error
})

export const AcountryError = (error)=>({
    type:countryError,
    payload:error
})

export const AdateError = (error)=>({
    type:dateError,
    payload:error
})

export const AmonthError = (error)=>({
    type:monthError,
    payload:error
})

export const AyearError = (error) =>({
    type:yearError,
    payload:error
})

export const AemailError = (error)=>({
    type:eamilError,
    payload:error
})

export const ApasswordError = (error) =>({
    type: passwordError,
    payload:error
})