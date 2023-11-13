
const _ = require('lodash')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { EmployeeSchema } = require('../../Schemas/EmployeeSchema');
const { ShareholderSchema } = require('../../Schemas/ShareholderSchema');
const { AdminSchema } = require('../../Schemas/AdminSchema');
const { checkEmail } = require('../checkEmail');


const signin = async (req, res) => {


    let data = await checkEmail(req.body.email)

    if (!data) {
        res.send({ message: 'User not found', error: true })
    }
    else {

        let checked = await bcrypt.compare(req.body.password, data.password)

        if (checked) {
            const token = jwt.sign({

                username: (data.role === 'admin') ? data.adminName : (data.role === 'employee') ? data.employeeName : data.shareholderName,

                email: data.email,
                role: data.role,
                _id: data._id

            }, process.env.SECRET_KEY, { expiresIn: '10h' })

            res.send({
                message: 'Signin compete', error: false, value: {
                    token: token
                }
            })

        }
        else {
            res.send({ message: 'Password not matched', error: true })
        }

    }

}

module.exports.signin = signin

