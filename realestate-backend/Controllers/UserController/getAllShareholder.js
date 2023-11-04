
const _ = require('lodash')
const { UserSchema } = require('../../Schemas/UserSchema')

const getAllShareholder = async (req, res) => {

    let user = await UserSchema.find({ role: 'user', acceptedByAdmin: false })

    if (user.length === 0) {
        res.send({ message: 'No user found', error: true })
    }


    else {
        res.send({ message: user.length + ' User found', error: false, data: user })
    }




}

module.exports.getAllShareholder = getAllShareholder

