
const _ = require('lodash')
const { EmployeeSchema } = require('../../Schemas/EmployeeSchema')

const getAllEmployee = async (req, res) => {

    let employee = await EmployeeSchema.find({ acceptedByAdmin: true })

    if (employee.length === 0) {
        res.send({ message: 'No employee found', error: true })
    }

    else {
        res.send({ message: employee.length + ' employee found', error: false, data: employee })
    }




}

module.exports.getAllEmployee = getAllEmployee

