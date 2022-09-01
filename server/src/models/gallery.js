const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class gallery extends Model {}

gallery.init({
    nameImg: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull:{
                msg: "EL campo Nombre no puede ser nulo"
            }
        }
    },
    imgPath: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull:{
                msg: "EL campo no puese ser nulo"
            },
            len: {
                args: [3, 255],
                msg : "La url debe ser de 3 a 255 caracteres"
            }
        }
    }
},
{
    sequelize,
    modelName: 'gallery',
    timestamps: false
});

module.exports = gallery;