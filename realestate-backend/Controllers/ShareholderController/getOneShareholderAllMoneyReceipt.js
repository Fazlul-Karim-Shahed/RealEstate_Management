
const _ = require('lodash')
const { ShareholderMoneyReceiptSchema } = require('../../Schemas/ShareholderMoneyReceiptSchema')

const getOneShareholderAllMoneyReceipt = async (req, res) => {

    let allMoneyReceipt = await ShareholderMoneyReceiptSchema.find({ shareholderId: req.params.shareholderId }).populate(['shareholderId'])

    if (allMoneyReceipt.length === 0) {

        res.send({ message: 'Money receipt not found', error: true })
    }

    else {
        res.send({ message: 'All money receipt', error: false, data: allMoneyReceipt })
    }

}


module.exports.getOneShareholderAllMoneyReceipt = getOneShareholderAllMoneyReceipt

