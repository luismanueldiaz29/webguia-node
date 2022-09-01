const express = require('express');
const router = express.Router();
const siteRouter = require('./site.router.js')
const uploadRouter = require('./upload.router');
const galleryRouter = require('./gallery.router');
const authRouter = require('./auth.router') 
const userRouter = require('./user.router');

//message at index
router.get('/', (req, res) => {
    res.send(`
    <br><br>
    <center>
        <h1>Wellcome to WebGuiaCesar</h1>
            <br><br>
        <b style="font-size: 182px;">😃👻</b>
        <br><br>
        <h3>Redirect to /api/*</h3>
    </center>
    `);
})

//router at aplication
module.exports = (app) => {
    app.use('/', router);
    app.use('/api/site', siteRouter);
    app.use('/api/gallery', galleryRouter);
    app.use('/api/upload', uploadRouter);
    app.use('/api/auth', authRouter);
    app.use('/api/user', userRouter);   
}