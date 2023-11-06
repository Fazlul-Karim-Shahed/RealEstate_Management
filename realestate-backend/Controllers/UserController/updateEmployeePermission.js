
const _ = require('lodash')
const { UserSchema } = require('../../Schemas/UserSchema')
const { EmployeeSchema } = require('../../Schemas/EmployeeSchema')
const bcrypt = require('bcrypt')


const updateEmployeePermission = async (req, res) => {


    let employee = await UserSchema.updateOne({ _id: req.params.employeeId }, { tempAdminTime: req.body.time, accessPermission: req.body.arr })


    res.send({ message: 'Permission updated', error: false, data: employee })

}

module.exports.updateEmployeePermission = updateEmployeePermission

