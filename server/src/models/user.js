const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class user extends Model {}
user.init({
    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo no puede ser nulo"
            },
            isAlpha: {
                args: true,
                msg: "El nombre solo puede contener letras"
            },
            len: {
                args: [3, 255],
                msg: "El nombre tiene que ser entre 3 y 255 caracteres"
            }
        },
    },
    
    email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: {
            args: true,
            msg: "El email ya existe"
        },
        validate: {
            isEmail: {
                args: true,
                msg: "El campo tiene que ser un correo valido"
            },
            notNull: {
                msg: "El campo email no puede ser nulo"
            },
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo password no puede ser nulo"
            },
            len: {
                args: [4],
                msg : "La contraceña debe tener como minimo 4 carateres"
            }
        }
    },

    // Si es 0 es usuario normal y si es 1 es administrador
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo rol no puede ser nulo"
            }
        } 
    }
}, {
    sequelize,
    modelName: "user",
});

module.exports = user;