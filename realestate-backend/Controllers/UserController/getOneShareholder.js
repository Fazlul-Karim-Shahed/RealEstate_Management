
const _ = require('lodash')
const { ShareholderSchema } = require('../../Schemas/ShareholderSchema')

const getOneShareholder = async (req, res) => {


    ShareholderSchema.findOne({ _id: req.params.id }).then(data => {
        res.send({ message: 'Shareholder found', error: false, data: data })
    })
        .catch(err => {
            res.send({ message: 'Shareholder not found', error: true })
        })


}

module.exports.getOneShareholder = getOneShareholder

