const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.userAct.index)
router.get('/:id', ctrl.userAct.show)

module.exports = router