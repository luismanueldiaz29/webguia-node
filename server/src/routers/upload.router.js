const express = require('express');
const router = express.Router();
const multer = require('../middlewares/multer');
const controller = require('../controllers/upload.controller');

router.post('/', multer.single('file'), controller.post);
router.post('/mult', multer.array('files'), controller.postMult);
router.get('/', controller.getFiles);
router.get('/:name', controller.download);

module.exports = router;