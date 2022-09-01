const express = require('express');
const router = express.Router();
const controller = require('../controllers/site.controller');

/* /api/site/ */

router.get('/', controller.get);
router.get('/:id', controller.getId);
router.post('/', controller.post);
router.post('/gallery', controller.postSiteGallery);
router.patch('/:id', controller.update);
router.delete('/:id', controller.delete);

module.exports = router;