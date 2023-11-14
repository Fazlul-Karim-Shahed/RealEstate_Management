
const _ = require('lodash')
const { EmployeeSchema } = require('../../Schemas/EmployeeSchema')
const { ShareholderSchema } = require('../../Schemas/ShareholderSchema')

const getPending = async (req, res) => {

    let pendingEmployee = await EmployeeSchema.find({ acceptedByAdmin: false })
    let pendingShareholder = await ShareholderSchema.find({ acceptedByAdmin: false })

    res.send({ message: 'All pending employee & shareholder', error: false, data: { pendingEmployee: pendingEmployee, pendingShareholder: pendingShareholder } })

}

module.exports.getPending = getPending

