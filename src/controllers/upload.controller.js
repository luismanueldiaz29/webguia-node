const fs = require('fs'); 
const path = require('path');

exports.post = (req, res) => {
  const file = req.file;
  // console.log(file.path);
  if (!file) {
    const error = new Error('No File')
    res.status(400).json(error)
    return next(error)
  }
  res.status(200).json(file);
};

exports.postMult = (req, res) => {
  const files = req.files;
  console.log(files);
  if (!files) {
    const error = new Error('No File')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send({sttus:  'ok'});
};

exports.getFiles = (req, res) =>{
  const directoryPath = path.join(__dirname, '../../upload');
  
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: 'http://localhost:3000/api/upload/images/' + file,
      });
    });

    res.status(200).send(fileInfos);
  });
}

exports.download = (req, res) => {

  const fileName = req.params.name;
  const directoryPath = path.join(__dirname, '../../upload/images/');
  console.log(directoryPath);
  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
  
};