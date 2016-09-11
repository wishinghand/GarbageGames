/**
 * Created by Joey on 9/10/2016.
 */

var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var path = require('path');
var setup_api = require('./backend/api');
var morgan = require('morgan');

var app = express();
var port = '3000';

var db_connection = mongoose.connection;

app.use(express.static(path.join(__dirname, 'frontend')));

app.use(body_parser.urlencoded({extended: false}));
app.use(morgan('dev'));

db_connection.on('open', function () {
    console.log('Connection to MongoDB is successful.');
    app.use('/api', require('./backend/routes/index'));
    app.listen(port, function(){
        console.log('Node server is running on: localhost:' + port);
    });
});

app.get('/', function(req, res){
    res.sendFile('index.html');
});

setup_api(mongoose);


