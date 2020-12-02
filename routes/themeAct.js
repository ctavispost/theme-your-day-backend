const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.themeAct.index)
router.get('/:id', ctrl.themeAct.show)

module.exports = router;