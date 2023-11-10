
const { accessPermissionCheck } = require('../Middlewares/accessPermissionCheck')
const { getAllEmployee } = require('../Controllers/EmployeeController/getAllEmployee')
const { addEmployee } = require('../Controllers/EmployeeController/AddEmployee')
const { addEmployeeSystemAccount } = require('../Controllers/EmployeeController/addEmployeeSystemAccount')
const { getAEmployeeSystemAccount } = require('../Controllers/EmployeeController/getAEmployeeSystemAccount')
const { updateEmployeePermission } = require('../Controllers/EmployeeController/updateEmployeePermission')
const { approveEmployee } = require('../Controllers/EmployeeController/approveEmployee')



const router = require('express').Router()

router.put('/approve/:employeeId', accessPermissionCheck('approveEmployee'), approveEmployee)
router.get('/', accessPermissionCheck('getAllEmployee'), getAllEmployee)
router.post('/add', accessPermissionCheck('addEmployee'), addEmployee)
router.post('/add-system', accessPermissionCheck('addEmployeeSystemAccount'), addEmployeeSystemAccount)
router.get('/system-account/:employeeId', accessPermissionCheck('getAEmployeeSystemAccount'), getAEmployeeSystemAccount)
router.put('/permission/:employeeId', accessPermissionCheck('updateEmployeePermission'), updateEmployeePermission)

module.exports = router

