const User = require('../models/user');

exports.checkRole = (roles) => {
    return async (req, res, next) => {
        const {id} = res.locals.jwtPayload;

        User.findByPk(id).then(
            user => {
                //    res.status(200).json({message: 'autorisado', user})
                const {role} = user;
                if(roles.includes(role)){
                    next();
                }else{
                    res.status(401).json({message: 'Not autorized'})
                }

            }
        ).catch(e => {
           res.status(401).json({message: "error pk"})
        });
    }
}