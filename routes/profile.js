const router = require('express').Router()
const ctrl = require('../controllers')

router.get('/', ctrl.activities.index)
router.get('/:id', ctrl.activities.show)
//router.post('/', ctrl.activities.create)
//router.put('/:id', ctrl.activities.update)
router.delete('/:id', ctrl.activities.destroy)


module.exports = router