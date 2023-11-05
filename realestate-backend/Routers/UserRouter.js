const { signin } = require('../Controllers/UserController/signin')
const { signup } = require('../Controllers/UserController/signup')
const { accessPermissionCheck } = require('../Middlewares/accessPermissionCheck')
const { getAllEmployee } = require('../Controllers/UserController/getAllEmployee')
const { getAllShareholder } = require('../Controllers/UserController/getAllShareholder')
const { addShareholder } = require('../Controllers/UserController/addShareholder')
const { addEmployee } = require('../Controllers/UserController/AddEmployee')
const { addEmployeeSystemAccount } = require('../Controllers/UserController/addEmployeeSystemAccount')
const { getAEmployeeSystemAccount } = require('../Controllers/UserController/getAEmployeeSystemAccount')
const { updateEmployeePermission } = require('../Controllers/UserController/updateEmployeePermission')


const router = require('express').Router()

router.post('/signin', signin)
router.post('/signup', signup)
router.post('/shareholder/add', accessPermissionCheck('addShareholder'), addShareholder)
router.get('/shareholder', accessPermissionCheck('getAllShareholder'), getAllShareholder)
router.get('/employee', accessPermissionCheck('getAllEmployee'), getAllEmployee)
router.post('/employee/add', accessPermissionCheck('addEmployee'), addEmployee)
router.post('/employee/add-system', accessPermissionCheck('addEmployeeSystemAccount'), addEmployeeSystemAccount)
router.get('/employee/system-account/:employeeId', accessPermissionCheck('getAEmployeeSystemAccount'), getAEmployeeSystemAccount)
router.put('/employee/permission/:employeeId', accessPermissionCheck('updateEmployeePermission'), updateEmployeePermission)

module.exports = router

