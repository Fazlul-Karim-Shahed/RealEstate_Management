const { model, Schema } = require('mongoose')

const ShareholderMoneyReceiptSchema = model('ShareholderMoneyReceipt', Schema({

    shareholderId: { type: Schema.Types.ObjectId, ref: 'Shareholder' },
    receivedDate: { type: String },
    receiptNo: { type: String },
    receivedAmount: { type: Number },
    paymentMethod: { type: String },
    cashPayerName: { type: String },
    checkPayerName: { type: String },
    checkNumber: { type: String },
    bankName: { type: String },
    bankPaymentType: { type: String },
    transactionId: { type: String },
    mfsName: { type: String },
    attachment: { data: Buffer, contentType: String, type: Object },


}, { timestamps: true }))


module.exports.ShareholderMoneyReceiptSchema = ShareholderMoneyReceiptSchema