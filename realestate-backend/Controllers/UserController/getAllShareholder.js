
const _ = require('lodash')
const { ShareholderSchema } = require('../../Schemas/ShareholderSchema')

const getAllShareholder = async (req, res) => {

    let shareholder = await ShareholderSchema.find({ acceptedByAdmin: true })

    if (shareholder.length === 0) {
        res.send({ message: 'No shareholder found', error: true })
    }


    else {
        res.send({ message: shareholder.length + ' shareholder found', error: false, data: shareholder })
    }

}

module.exports.getAllShareholder = getAllShareholder

