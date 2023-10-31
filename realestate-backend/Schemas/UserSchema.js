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
        enum: ['user', 'admin']
    }

}, { timestamps: true }))


module.exports.UserSchema = UserSchema