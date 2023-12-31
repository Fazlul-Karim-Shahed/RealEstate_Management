
const jwt = require('jsonwebtoken')
const { UserSchema } = require('../Schemas/UserSchema')

const adminCheck = async (req, res, next) => {

    console.log(req.headers)
    try {

        const data = await jwt.verify(req.headers.authorization, process.env.SECRET_KEY)
        if (data) {
            const user = await UserSchema.findOne({ email: data.email })
            if (user) {
                if (user.role === 'admin') {
                    req.user = user
                    // res.send('Verified')
                    next()
                }
                else {
                    res.send({ message: 'Not admin', error: true })
                }
            }
            else {
                res.send({ message: 'User not found', error: true });
            }
        }
        else {
            req.send({ message: 'Not verified', error: true })
        }

    }
    catch (err) {
        res.send({ message: 'Something went wrong', error: true });
    }


}

module.exports.adminCheck = adminCheck