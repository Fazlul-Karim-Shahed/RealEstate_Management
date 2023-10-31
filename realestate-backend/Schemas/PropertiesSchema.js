const { model, Schema } = require('mongoose')

const PropertiesSchema = model('Properties', Schema({

    tittle: { type: String, required: true },
    content: { type: String, required: true },
    propertyType: { type: String, required: true },
    sellingType: { type: String, required: true },
    bathroom: { type: Number, required: true },
    kitchen: { type: Number, required: true },
    bhk: { type: String, required: true },
    bedroom: { type: Number, required: true },
    balcony: { type: Number, required: true },
    hall: { type: Number, required: true },
    floor: { type: String, required: true },
    price: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    totalFloor: { type: String, required: true },
    areaSize: { type: Number, required: true },
    address: { type: String, required: true },
    feature: { type: String, required: true },
    uid: { type: String, required: true },
    status: { type: String, required: true },
    isFeatured: { type: String, required: true },

    image1: { data: Buffer, contentType: String, type: Object },
    image2: { data: Buffer, contentType: String, type: Object },
    image3: { data: Buffer, contentType: String, type: Object },
    image4: { data: Buffer, contentType: String, type: Object },
    image5: { data: Buffer, contentType: String, type: Object },
    floorPlanImage: { data: Buffer, contentType: String, type: Object },
    basementFloorPlanImage: { data: Buffer, contentType: String, type: Object },
    groundFloorPlanImage: { data: Buffer, contentType: String, type: Object },


}, { timestamps: true }))


module.exports.PropertiesSchema = PropertiesSchema