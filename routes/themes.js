const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.themes.index)
router.get('/:id', ctrl.themes.show)

module.exports = router
