const { model, Schema } = require('mongoose')

const EmployeeSchema = model('Employee', Schema({

    employeeName: { type: String },
    fatherName: { type: String },
    motherName: { type: String },
    dob: { type: String },
    religion: { type: String },
    nationality: { type: String },
    nidNumber: { type: String },
    mobile: { type: String },
    presentAddress: { type: String },
    permanentAddress: { type: String },
    nidFront: { data: Buffer, contentType: String, type: Object },
    nidBack: { data: Buffer, contentType: String, type: Object },
    photo: { data: Buffer, contentType: String, type: Object },
    attachment: { data: Buffer, contentType: String, type: Object },
    acceptedByAdmin: { type: Boolean, default: false, required: true },
    systemAccount: { type: Boolean, default: false, required: true }


}, { timestamps: true }))


module.exports.EmployeeSchema = EmployeeSchema