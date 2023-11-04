const { model, Schema } = require('mongoose')

const UserSchema = model('User', Schema({

    registrationId: { type: String, required: true },
    shareholderName: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    dob: { type: String, required: true },
    religion: { type: String, required: true },
    occupation: { type: String, required: true },
    nationality: { type: String, required: true },
    nidNumber: { type: String, required: true },
    tin: { type: String, required: true },
    mobile: { type: String, required: true },
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    tower: { type: String, required: true },
    unit: { type: String, required: true },
    flat: { type: String, required: true },
    amountOfLand: { type: String, required: true },
    nidFront: { data: Buffer, contentType: String, type: Object },
    nidBack: { data: Buffer, contentType: String, type: Object }


}, { timestamps: true }))


module.exports.UserSchema = UserSchema