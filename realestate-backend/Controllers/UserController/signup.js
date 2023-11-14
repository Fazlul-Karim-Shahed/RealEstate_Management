
const _ = require('lodash')
const { AdminSchema } = require('../../Schemas/AdminSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const { checkEmail } = require('../checkEmail')


const signup = async (req, res) => {

    let data = await checkEmail(req.body.email)

    if (!data) {


        data = _.pick(req.body, ['email', 'password', 'adminName']);
        let salt = await bcrypt.genSalt(10)
        let hashedPass = await bcrypt.hash(data.password, salt)

        data = new AdminSchema({
            email: data.email,
            password: hashedPass,
            adminName: data.adminName
        })

        data = data.save().then(data => {

            const token = jwt.sign({

                username: data.adminName,
                email: data.email,
                role: data.role,
                _id: data._id

            }, process.env.SECRET_KEY, { expiresIn: '10h' })

            res.send({
                message: 'Admin Registration complete', error: false, value: {
                    token: token
                }
            })
        })
            .catch(err => {
                res.send({ message: 'Something went wrong while signup', error: true, value: err.message })
            })




    }
    else {

        res.send({ message: 'Email already exist', error: true })

    }

}

module.exports.signup = signup

