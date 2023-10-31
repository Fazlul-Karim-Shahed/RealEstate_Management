import axios from "axios"


export const adminAddProperties = (formData) => {

    let data = axios.post(process.env.REACT_APP_BACKEND_URL + '/api/properties/add', formData, {
        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME)
        }
    }).then(data => data.data)

    return data


}


export const getAllProperties = () => {

    let data = axios.get(process.env.REACT_APP_BACKEND_URL + '/api/properties/').then(data => data.data)

    return data


}

