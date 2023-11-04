import { CHECK_AUTH, DECODE_TOKEN, GET_ALL_EMPLOYEE, GET_ALL_PROPERTIES, GET_ALL_SHAREHOLDER } from "./ActionTypes"

const initialState = {

    authenticated: false,
    decodedToken: null,
    allShareholder: [],
    allEmployee: [],
    allProperties: []

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

    if (action.type === GET_ALL_SHAREHOLDER) {

        return {
            ...state,
            allShareholder: [...action.value]
        }
    }

    if (action.type === GET_ALL_EMPLOYEE) {

        return {
            ...state,
            allEmployee: [...action.value]
        }
    }


    if (action.type === GET_ALL_PROPERTIES) {

        return {
            ...state,
            allProperties: [...action.value]
        }
    }

    return state

}

export default Reducer