
const _ = require('lodash')
const { EmployeeSchema } = require('../../Schemas/EmployeeSchema')

const approveEmployee = async (req, res) => {


    let pendingEmployee = await EmployeeSchema.findOneAndUpdate({ _id: req.params.employeeId }, { acceptedByAdmin: true })


    res.send({ message: 'Employee approved', error: false, data: pendingEmployee })

}

module.exports.approveEmployee = approveEmployee

