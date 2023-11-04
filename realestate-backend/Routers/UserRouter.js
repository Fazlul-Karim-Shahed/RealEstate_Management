const { signin } = require('../Controllers/UserController/signin')
const { signup } = require('../Controllers/UserController/signup')
const { getAllUser } = require('../Controllers/UserController/getAllUser')
const { adminCheck } = require('../Middlewares/adminCheck')
const { accessPermissionCheck } = require('../Middlewares/accessPermissionCheck')
const { getAllEmployee } = require('../Controllers/UserController/getAllEmployee')


const router = require('express').Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.get('/users', adminCheck, accessPermissionCheck('getAllUser'), getAllUser)
router.get('/employee', adminCheck, accessPermissionCheck('getAllEmployee'), getAllEmployee)

module.exports = router