import { CHECK_AUTH, DECODE_TOKEN } from "./ActionTypes"

const initialState = {

    authenticated: false,
    decodedToken: null,

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

    return state

}

export default Reducer