
const _ = require('lodash')
const { ShareholderSchema } = require('../../Schemas/ShareholderSchema')

const approveShareholder = async (req, res) => {

    let pendingShareholder = await ShareholderSchema.findOneAndUpdate({ _id: req.params.shareholderId }, { acceptedByAdmin: true })


    res.send({ message: 'Shareholder approved', error: false, data: pendingShareholder })

}

module.exports.approveShareholder = approveShareholder

