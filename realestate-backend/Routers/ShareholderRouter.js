
const { accessPermissionCheck } = require('../Middlewares/accessPermissionCheck')
const { getAllShareholder } = require('../Controllers/ShareholderController/getAllShareholder')
const { addShareholder } = require('../Controllers/ShareholderController/addShareholder')
const { approveShareholder } = require('../Controllers/ShareholderController/approveShareholder')
const { getOneShareholder } = require('../Controllers/ShareholderController/getOneShareholder')
const { addShareholderMoneyReceipt } = require('../Controllers/ShareholderController/addShareholderMoneyReceipt')
const { getOneShareholderAllMoneyReceipt } = require('../Controllers/ShareholderController/getOneShareholderAllMoneyReceipt')


const router = require('express').Router()


router.put('/approve/:shareholderId', accessPermissionCheck('approveShareholder'), approveShareholder)
router.post('/add', accessPermissionCheck('addShareholder'), addShareholder)
router.get('/', accessPermissionCheck('getAllShareholder'), getAllShareholder)
router.get('/:id', accessPermissionCheck('getOneShareholder'), getOneShareholder)
router.post('/add-money-receipt/:shareholderId', accessPermissionCheck('addShareholderMoneyReceipt'), addShareholderMoneyReceipt)
router.get('/all-money-receipt/:shareholderId', accessPermissionCheck('getOneShareholderAllMoneyReceipt'), getOneShareholderAllMoneyReceipt)

module.exports = router

