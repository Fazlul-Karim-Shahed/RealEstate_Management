import axios from "axios"

export const adminAddShareholder = (formData) => {

    console.log(formData)

    let data = axios.post(process.env.REACT_APP_BACKEND_URL + '/api/users/shareholder/add', formData, {
        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME)
        }
    }).then(data => data.data)

    return data


}


export const getAllShareholder = async () => {

    let allShareholder = axios.get(process.env.REACT_APP_BACKEND_URL + '/api/users/Shareholder', {
        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
        }
    }).then(data => data.data)


    return allShareholder

}


