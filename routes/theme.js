const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.activities.index)

module.exports = router
