import axios from "axios"


export const getPending = () => {
    let data = axios.get(process.env.REACT_APP_BACKEND_URL + '/api/users/pending', {

        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
        }

    }).then(data => data.data)


    return data
}