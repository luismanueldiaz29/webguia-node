const express = require('express');
const router = express.Router();
const controller = require('../controllers/gallery.controller');

router.get('/', controller.get);
router.get('/:id', controller.getId);
router.put('/:id', controller.update)
// router.delete('/:id', controller.delete);

module.exports = router;