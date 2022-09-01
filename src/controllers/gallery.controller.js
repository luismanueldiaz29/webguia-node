const site = require('../models/site');
const gallery = require('../models/gallery');

exports.get = (req, res) => {
    gallery.findAll({
        include: {
            model: site,
            as: "site"
        }
    }).then(gallery => {
        res.json(gallery);
    });
}

exports.getId = (req, res) => {
    gallery.findByPk(req.params.id).then(result => {
        res.json(result);
    })
}

exports.update = (req, res) => {
    gallery.update({
        nameImg: req.body.nameImg,
        imgPath: req.body.imgPath
    }, {
        where: {
            id: req.params.id
        }
    }).then(result => {
        res.status(201).json({result});
    }).catch(error => {
        res.status("400").json(error);
    })
}