
const _ = require('lodash')
const { UserSchema } = require('../../Schemas/UserSchema')
const { EmployeeSchema } = require('../../Schemas/EmployeeSchema')
const bcrypt = require('bcrypt')


const addEmployeeSystemAccount = async (req, res) => {


    let data = await UserSchema.findOne({ email: req.body.email })

    if (data) {
        res.send({ message: 'User already exist', error: true })
    }
    else {

        data = _.pick(req.body, ['username', 'email', 'password', 'role', 'employeeId', 'status']);

        let salt = await bcrypt.genSalt(10)
        let hashedPass = await bcrypt.hash(data.password, salt)

        data = new UserSchema({
            username: data.username,
            email: data.email,
            password: hashedPass,
            role: data.role,
            employeeId: data.employeeId,
            status: data.status
        })

        data = data.save().then(data => {

            EmployeeSchema.findOneAndUpdate({ _id: data.employeeId }, { systemAccount: true }).then(data => {
                res.send({
                    message: 'Employee added to system', error: false, data: data
                })
            }).catch(err => {
                res.send({ message: 'Something went wrong while updating employee to system', error: true, value: err.message })
            })



        })
            .catch(err => {
                res.send({ message: 'Something went wrong while adding employee to system', error: true, value: err.message })
            })


    }

}

module.exports.addEmployeeSystemAccount = addEmployeeSystemAccount

