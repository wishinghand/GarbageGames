/**
 * Created by Joey on 9/10/2016.
 */

var express = require('express');
var mongoose = require('mongoose');
var body_parser = require('body-parser');
var path = require('path');
var setup_api = require('./backend/api');

var app = express();
var port = '3000';

var db_connection = mongoose.connection;

app.use(express.static(path.join(__dirname, 'build')));

app.use(body_parser.json());

db_connection.on('open', function () {
    console.log('Connection to MongoDB is successful.');
    app.use('/api', require('./backend/routes/index'));
    app.listen(port, function(){
        console.log('Node server is running on: localhost:' + port);
    });
});

setup_api(mongoose);


