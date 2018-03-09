//require
var express = require('express');
var mongoose = require('mongoose');

//conexion bd
mongoose.connection.openUri('mongodb://localhost:27017/pelis', (err, res) => {
    if (err) throw err;
    console.log('base de datos online');
});



//variables
var app = express();

//rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'peticion realizada correctamente'
    });
});


//escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000 online');
});