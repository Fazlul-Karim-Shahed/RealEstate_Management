const { AdminSchema } = require("../Schemas/AdminSchema")
const { EmployeeSchema } = require("../Schemas/EmployeeSchema")
const { ShareholderSchema } = require("../Schemas/ShareholderSchema")



const checkEmail = async (email) => {

    let employeeMailCheck = await EmployeeSchema.findOne({ email: email })
    let shareholderMailCheck = await ShareholderSchema.findOne({ email: email })
    let adminMailCheck = await AdminSchema.findOne({ email: email })

    let data = (employeeMailCheck) ? employeeMailCheck : (shareholderMailCheck) ? shareholderMailCheck : (adminMailCheck) ? adminMailCheck : null

    return data
}


exports.checkEmail = checkEmail