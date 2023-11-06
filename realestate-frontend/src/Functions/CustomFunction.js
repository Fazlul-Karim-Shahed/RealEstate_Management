import { Permissions } from "./Permissions"




export const checkMatch = (permission, arr) => {

    let count = 0
    for (let i in arr) {
        if (arr[i].permission === permission) {
            count = count + 1
            break
        }
        else { continue }
    }

    if (count > 0) return true
    else return false

}


export const objModifyInArr = (array) => {

    let arr = Permissions.map(item => {

        return {
            ...item,
            checked: checkMatch(item.permission, array)
        }
    })

    return arr
}