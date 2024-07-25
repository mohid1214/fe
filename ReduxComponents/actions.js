import { standardtoken } from "./constants"


export const setToken = (token) =>({
    type: standardtoken,
    payload : token
});