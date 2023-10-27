const { signin } = require('../Controllers/UserController/signin')
const { signup } = require('../Controllers/UserController/signup')
const { getAllUser } = require('../Controllers/UserController/getAllUser')


const router = require('express').Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.get('/', getAllUser)

module.exports = router