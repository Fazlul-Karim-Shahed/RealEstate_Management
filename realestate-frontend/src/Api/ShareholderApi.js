import axios from "axios"

export const adminAddShareholder = (formData) => {

    console.log(formData)

    let data = axios.post(process.env.REACT_APP_BACKEND_URL + '/api/shareholder/add', formData, {
        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME)
        }
    }).then(data => data.data)

    return data


}


export const getAllShareholder = async () => {

    let allShareholder = axios.get(process.env.REACT_APP_BACKEND_URL + '/api/shareholder/', {
        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
        }
    }).then(data => data.data)


    return allShareholder

}

export const getOneShareholder = async (id) => {

    let allShareholder = axios.get(process.env.REACT_APP_BACKEND_URL + '/api/shareholder/' + id, {
        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
        }
    }).then(data => data.data)


    return allShareholder

}

export const approveShareholder = async (id) => {

    let data = axios.put(process.env.REACT_APP_BACKEND_URL + '/api/shareholder/approve/' + id, {}, {

        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
        }

    }).then(data => data.data)


    return data

}

export const addShareholderMoneyReceipt = async (id, formData) => {

    let data = axios.post(process.env.REACT_APP_BACKEND_URL + '/api/shareholder/add-money-receipt/' + id, formData, {

        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
        }

    }).then(data => data.data)


    return data

}


export const getOneShareholderAllMoneyReceipt = async (id) => {

    let allShareholder = axios.get(process.env.REACT_APP_BACKEND_URL + '/api/shareholder/all-money-receipt/' + id, {
        headers: {
            Authorization: localStorage.getItem(process.env.REACT_APP_LOCAL_TOKEN_NAME),
        }
    }).then(data => data.data)


    return allShareholder

}

