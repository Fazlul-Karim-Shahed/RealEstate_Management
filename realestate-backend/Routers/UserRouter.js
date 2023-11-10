const { signin } = require('../Controllers/UserController/signin')
const { signup } = require('../Controllers/UserController/signup')
const { accessPermissionCheck } = require('../Middlewares/accessPermissionCheck')
const { getPending } = require('../Controllers/UserController/getAllPending')


const router = require('express').Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.get('/pending', accessPermissionCheck('getPending'), getPending)

module.exports = router

