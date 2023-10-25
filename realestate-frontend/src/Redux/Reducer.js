import { TEST } from "./ActionTypes"

const initialState = {

    authenticated: false,
    decodedToken: {},

}



const Reducer = (state = initialState, action) => {

    if (action.types === TEST) {

        return {
            ...state,
        }
    }


    return state

}

export default Reducer