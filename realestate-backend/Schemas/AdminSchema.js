const { model, Schema } = require('mongoose')

const AdminSchema = model('Admin', Schema({

    adminName: { type: String },
    // fatherName: { type: String },
    // motherName: { type: String },
    // dob: { type: String },
    // religion: { type: String },
    // nationality: { type: String },
    // nidNumber: { type: String },
    // mobile: { type: String },
    // presentAddress: { type: String },
    // permanentAddress: { type: String },
    // nidFront: { data: Buffer, contentType: String, type: Object },
    // nidBack: { data: Buffer, contentType: String, type: Object },
    // photo: { data: Buffer, contentType: String, type: Object },
    // attachment: { data: Buffer, contentType: String, type: Object },
    acceptedByAdmin: { type: Boolean, default: false, required: true },
    systemAccount: { type: Boolean, default: false, required: true },
    // New
    email: { type: String, unique: true },
    tempAdminTime: { type: String, required: true, default: new Date().toLocaleString() },
    password: { type: String, max: 1024, min: 6, },

    role: { type: String, default: 'user', required: true, enum: ['shareholder', 'investor', 'admin', 'employee', 'user'] },

    accessPermission: {
        type: [{ permission: String, value: String, type: Object }],
        required: true,
        default: [{ permission: 'none', value: 'No permission' }],
    }

}, { timestamps: true }))


module.exports.AdminSchema = AdminSchema