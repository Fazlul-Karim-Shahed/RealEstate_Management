import axios from "axios"

export const adminAddEmployee = (formData) => {

    console.log(formData)

    let data = axios.post(process.env.REACT_APP_BACKEND_URL + '/api/employee/add', formData, {
        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME)
        }
    }).then(data => data.data)

    return data


}



export const getAllEmployee = async () => {

    let allEmployee = axios.get(process.env.REACT_APP_BACKEND_URL + '/api/employee/', {
        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
        }
    }).then(data => data.data)




    return allEmployee

}


export const addEmployeeSystemAccount = async (obj) => {

    let data = axios.post(process.env.REACT_APP_BACKEND_URL + '/api/employee/add-system', obj, {

        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
        }

    }).then(data => data.data)


    return data

}

export const getAEmployeeSystemAccount = async (id) => {

    let data = axios.get(process.env.REACT_APP_BACKEND_URL + '/api/employee/system-account/' + id, {

        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
        }

    }).then(data => data.data)


    return data

}


export const updateEmployeeAccessPermission = async (id, arr, time) => {

    let data = axios.put(process.env.REACT_APP_BACKEND_URL + '/api/employee/permission/' + id, { arr: arr, time: time }, {

        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
        }

    }).then(data => data.data)


    return data

}


export const approveEmployee = async (id) => {

    let data = axios.put(process.env.REACT_APP_BACKEND_URL + '/api/employee/approve/' + id, {}, {

        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
        }

    }).then(data => data.data)


    return data

}