const { signin } = require('../Controllers/UserController/signin')
const { signup } = require('../Controllers/UserController/signup')
const { getAllUser } = require('../Controllers/UserController/getAllUser')
const { adminCheck } = require('../Middlewares/adminCheck')


const router = require('express').Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.get('/', adminCheck, getAllUser)

module.exports = router