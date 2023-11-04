const { signin } = require('../Controllers/UserController/signin')
const { signup } = require('../Controllers/UserController/signup')
const { adminCheck } = require('../Middlewares/adminCheck')
const { accessPermissionCheck } = require('../Middlewares/accessPermissionCheck')
const { getAllEmployee } = require('../Controllers/UserController/getAllEmployee')
const { getAllShareholder } = require('../Controllers/UserController/getAllShareholder')


const router = require('express').Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.get('/shareholder', accessPermissionCheck('getAllShareholder'), getAllShareholder)
router.get('/employee', accessPermissionCheck('getAllEmployee'), getAllEmployee)

module.exports = router