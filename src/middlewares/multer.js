const multer = require('multer');
// const util = require('util');
const path = require('path');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../../uploads/images'));
  },
  filename: (req, file, cb) => {
    // var cadena = file.mimetype.split('/'); //extraer la extencion
    cb(null, Date.now()+path.extname(file.originalname));
  },
});

let uploadFile = multer({
  storage: storage
})

module.exports = uploadFile;