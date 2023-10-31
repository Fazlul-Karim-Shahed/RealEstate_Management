

const router = require('express').Router()
const { addProperties } = require('../Controllers/PropertiesController/addProperties')
const { getAllProperties } = require('../Controllers/PropertiesController/getAllProperties')
const { adminCheck } = require('../Middlewares/adminCheck')


router.post('/add', addProperties)
router.put('/:propertiesId',)
router.delete('/:propertiesId',)
router.get('/', getAllProperties)
router.get('/:propertiesId',)



module.exports = router