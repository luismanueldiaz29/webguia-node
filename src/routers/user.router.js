const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller')
const checkJwt = require('../middlewares/jwt');
const {checkRole} = require('../middlewares/role');

router.get('/',controller.get);
router.get('/:id', controller.getId);
router.post('/', controller.post);
router.put('/:id', [checkJwt],controller.update)
router.delete('/:id', [checkJwt], controller.delete)

module.exports = router;