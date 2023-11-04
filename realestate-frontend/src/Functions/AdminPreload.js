import axios from "axios"


export const getAllUsers = async () => {

    let allUsers = axios.get(process.env.REACT_APP_BACKEND_URL + '/api/users/users', {
        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
        }
    }).then(data => {
        if (data.data.error) {
            return []
        } else return data.data.data
    })




    return allUsers

}

export const getAllEmployee = async () => {

    let allEmployee = axios.get(process.env.REACT_APP_BACKEND_URL + '/api/users/employee', {
        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
        }
    }).then(data => {
        if (data.data.error) {
            return []
        } else return data.data.data
    })




    return allEmployee

}
