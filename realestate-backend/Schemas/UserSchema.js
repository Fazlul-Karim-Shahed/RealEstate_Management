const { model, Schema } = require('mongoose')

const UserSchema = model('User', Schema({

    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
        type: String,
        max: 1024,
        min: 6,
        required: true
    },
    role: {
        type: String,
        default: 'user',
        required: true,
        enum: ['user', 'admin', 'employee']
    },

    status: {
        type: String,
        default: 'general',
        required: true,
        enum: ['shareholder', 'investor', 'general']
    },

    acceptedShareholder: {
        type: Boolean,
        default: false,
        required: true,
    },

    acceptedInvestor: {
        type: Boolean,
        required: true,
        default: false
    },

    tempAdminTime: {
        type: String,
        required: true,
        default: new Date().toLocaleString()
    },

    accessPermission: {
        type: [{ permission: String, value: String, type: Object }],
        required: true,
        default: [{ permission: 'none', value: 'No permission' }],
    }


}, { timestamps: true }))


module.exports.UserSchema = UserSchema