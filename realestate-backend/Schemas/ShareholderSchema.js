const { model, Schema } = require('mongoose')

const ShareholderSchema = model('Shareholder', Schema({

    projectName: { type: String, required: true },
    registrationId: { type: String, required: true },
    shareholderName: { type: String },
    fatherName: { type: String },
    motherName: { type: String },
    dob: { type: String },
    religion: { type: String },
    occupation: { type: String },
    nationality: { type: String },
    nidNumber: { type: String },
    tin: { type: String },
    mobile: { type: String },
    presentAddress: { type: String },
    permanentAddress: { type: String },
    tower: { type: String },
    unit: { type: String },
    flat: { type: String },
    amountOfLand: { type: String },
    nidFront: { data: Buffer, contentType: String, type: Object },
    nidBack: { data: Buffer, contentType: String, type: Object },
    photo: { data: Buffer, contentType: String, type: Object },
    attachment: { data: Buffer, contentType: String, type: Object },
    acceptedByAdmin: { type: Boolean, default: false, required: true },
    systemAccount: { type: Boolean, default: false, required: true }


}, { timestamps: true }))


module.exports.ShareholderSchema = ShareholderSchema