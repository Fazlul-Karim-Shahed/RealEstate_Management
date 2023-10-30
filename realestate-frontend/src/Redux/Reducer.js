import { CHECK_AUTH, DECODE_TOKEN, GET_ALL_USERS } from "./ActionTypes"

const initialState = {

    authenticated: false,
    decodedToken: null,
    allUsers: []

}



const Reducer = (state = initialState, action) => {

    if (action.type === CHECK_AUTH) {

        return {
            ...state,
            authenticated: action.value
        }
    }

    if (action.type === DECODE_TOKEN) {
        // console.log(action.value);
        return {
            ...state,
            decodedToken: action.value
        }
    }

    if (action.type === GET_ALL_USERS) {
        // console.log(action.value);
        return {
            ...state,
            allUsers: [...action.value]
        }
    }

    return state

}

export default Reducer