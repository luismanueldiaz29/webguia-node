if(process.env.NODE_ENV === 'development'){
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const routers = require('./routers/index.router');
const sequelize = require('./database/sequelize');
const path = require('path');

//import models and relationship
require('./models/associations');
require('./models/user');

const app = express();

const PORT = process.env.PORT || 3000;

//middlewares
app.use('dev', morgan);
app.use(bodyParser.json());
app.use(cors());

//Declaro la ruta en donde estaran los archivos estaticos
app.use(express.static(path.join(__dirname,'../uploads/documents')));//Directorio para archivos staticos
app.use('/images',express.static(path.join(__dirname,'../uploads/images')));//Directorio de imagenes

//routers
routers(app);

//app listening
app.listen(PORT, () => {
    console.log(`App listening port on http://localhost:${PORT}/`);


    console.log(process.env.DB_USERNAME+" - "+process.env.DB_PASSWORD+" - "+process.env.DATABASE+" - "+process.env.DB_HOST)

    sequelize.sync({force: true}).then(() =>{
        console.log('connetion on database')
    }).catch(error => {
        console.log('error => '+error);
    });
});

/**
 * User.sync() - Esto crea la tabla si no existe (y no hace nada si ya existe)
 * User.sync({ force: true }) - Esto crea la tabla, soltándola primero si ya existía
 * User.sync({ alter: true }) - Esto verifica cuál es el estado actual de la tabla en la base de datos (qué columnas tiene, cuáles son sus tipos de datos, etc.), y luego realiza los cambios necesarios en la tabla para que coincida con el modelo.
**/