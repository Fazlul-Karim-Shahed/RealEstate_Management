
const _ = require('lodash')
const { PropertiesSchema } = require('../../Schemas/PropertiesSchema')

const getAllProperties = async (req, res) => {


    let properties = await PropertiesSchema.find()

    // console.log(properties)

    if (properties.length === 0) {
        res.send({ message: 'No properties found', error: true })
    }

    else {
        res.send({ message: properties.length + ' properties found', error: false, data: properties })
    }




}

module.exports.getAllProperties = getAllProperties

