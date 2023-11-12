
const _ = require('lodash')
const { EmployeeSchema } = require('../../Schemas/EmployeeSchema')
const bcrypt = require('bcrypt')
const { checkEmail } = require('../checkEmail')


const addEmployeeSystemAccount = async (req, res) => {

    let matchEmail = await checkEmail(req.body.email)

    if (matchEmail) {
        res.send({
            message: 'Email already exist', error: true
        })
    }
    else {

        let salt = await bcrypt.genSalt(10)
        let hashedPass = await bcrypt.hash(req.body.password, salt)

        EmployeeSchema.findOneAndUpdate({ _id: req.body.employeeId }, {
            email: req.body.email,
            password: hashedPass,
            role: 'employee',
            systemAccount: true
        }).then(data => {
            res.send({
                message: 'Employee added to system', error: false, data: data
            })
        }).catch(err => {
            res.send({ message: 'Something went wrong while updating employee to system', error: true })
        })

    }

   


}

module.exports.addEmployeeSystemAccount = addEmployeeSystemAccount

