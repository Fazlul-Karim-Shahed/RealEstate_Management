
const _ = require('lodash')
const { UserSchema } = require('../../Schemas/UserSchema')

const getAEmployeeSystemAccount = async (req, res) => {

    let employee = await UserSchema.findOne({ employeeId: req.params.employeeId })

    if (!employee) {
        res.send({ message: 'No employee found', error: true })
    }

    else {
        res.send({ message: 'Employee found', error: false, data: employee })
    }




}

module.exports.getAEmployeeSystemAccount = getAEmployeeSystemAccount

