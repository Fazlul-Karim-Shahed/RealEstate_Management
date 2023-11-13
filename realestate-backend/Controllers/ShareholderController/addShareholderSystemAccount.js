
const _ = require('lodash')
const { ShareholderSchema } = require('../../Schemas/ShareholderSchema')
const bcrypt = require('bcrypt')
const { checkEmail } = require('../checkEmail')


const addShareholderSystemAccount = async (req, res) => {

    let matchEmail = await checkEmail(req.body.email)

    if (matchEmail) {
        res.send({
            message: 'Email already exist', error: true
        })
    }
    else {

        let salt = await bcrypt.genSalt(10)
        let hashedPass = await bcrypt.hash(req.body.password, salt)

        let data = await ShareholderSchema.updateOne({ _id: req.body.shareholderId }, {
            email: req.body.email,
            password: hashedPass,
            role: 'shareholder',
            systemAccount: true
        })


        res.send({ message: 'Shareholder added to system', error: false, data: data })


        // .then(data => {

        // }).catch(err => {
        //     res.send({ message: 'Something went wrong while updating shareholder to system', error: true })
        // })

    }




}

module.exports.addShareholderSystemAccount = addShareholderSystemAccount

