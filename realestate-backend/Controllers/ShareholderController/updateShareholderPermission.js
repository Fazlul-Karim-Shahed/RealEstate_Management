
const _ = require('lodash')
const { ShareholderSchema } = require('../../Schemas/ShareholderSchema')
const bcrypt = require('bcrypt')


const updateShareholderPermission = async (req, res) => {


    let shareholder = await ShareholderSchema.updateOne({ _id: req.params.shareholderId }, { tempAdminTime: req.body.time, accessPermission: req.body.arr })


    res.send({ message: 'Permission updated', error: false, data: shareholder })

}

module.exports.updateShareholderPermission = updateShareholderPermission

