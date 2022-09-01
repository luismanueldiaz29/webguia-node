const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../config/auth');

exports.login = (req, res) => {

    const { username , password } = req.body;
    
    if(!(username && password)){
        res.status(400).json({ message : "El usuario y la contraceña son requeridos"});
    }
    user.findOne({
        // attributes:['id', 'name', 'role'],
        where: {
            email: username
        }
    }).then(
        user => {
            if(!user){
                res.status(400).json('No se encontro el usuario')
            }else{
                if(bcrypt.compareSync(password, user.password)){

                    const token = jwt.sign({id: user.id, username: user.email}, config.keySecret, {expiresIn: config.expires}) 
                    res.status(200).json({message: 'OK', id: user.id, role: user.role, token});

                }else{
                    res.status(401).json('Contraceña incorrecta')
                }
            }
        }
    ).catch(error => {
        res.status(400).json(error)
    })
}

