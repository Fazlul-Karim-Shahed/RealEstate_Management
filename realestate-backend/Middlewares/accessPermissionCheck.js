
const jwt = require('jsonwebtoken')
const { UserSchema } = require('../Schemas/UserSchema')

const accessPermissionCheck = permission => {

    return async (req, res, next) => {

        try {

            if (req.user.role === 'admin') {
                next()
            }

            else {

                let currentPermission = req.user.accessPermission  // [{}, {}]

                let count = 0

                for (let i in currentPermission) {

                    if (currentPermission[i].permission === permission) {
                        count = count + 1
                        break
                    }
                    else {
                        continue
                    }

                }


                if (count > 0) {

                    let tempAdminTime = req.user.tempAdminTime

                    if (new Date().toLocaleString() < new Date(tempAdminTime).toLocaleString()) {

                        next()

                    }
                    else {
                        res.send({ message: `You are not currently authorized to change decision. Authorization date expired on ${tempAdminTime}`, error: true });
                    }



                }

                else {
                    res.send({ message: `You are not currently authorized to change decision`, error: true });
                }


            }

        }
        catch (err) {
            res.send({ message: 'Something went wrong', error: true });
        }


    }

}

module.exports.accessPermissionCheck = accessPermissionCheck