const jwt = require('jsonwebtoken');
const config = require('../config/auth');

module.exports = (req, res, next) => {
    console.log('headers -> ',req.headers);
    const token = req.headers['auth'];

    let jwtPayload;

    try{
        jwtPayload = jwt.verify(token, config.keySecret);
        res.locals.jwtPayload = jwtPayload;
    }catch(e){
        return res.status(401).json({message: "Not autorized"});
    }

    const { id, username } = jwtPayload;

    const newToken = jwt.sign({ id, username}, config.keySecret, { expiresIn: config.expires })
    res.setHeader('token', newToken);

    next();
}