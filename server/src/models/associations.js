const site = require('../models/site');
const gallery = require('../models/gallery');

site.hasMany(gallery, { as: "galleries"});

gallery.belongsTo(site, {as: "site"});