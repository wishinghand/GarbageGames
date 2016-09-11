/**
 * Created by Joey on 9/10/2016.
 */

var express = require('express');
var body_parser = require('body-parser');
var path = require('path');

var app = express();
var port = '3000';

app.use(express.static(path.join(__dirname, 'build')));

app.use(body_parser.json());

/*app.get('*', function(req, res) {
    res.sendFile('index.html');
});*/

app.listen(port, function(){
    console.log('Server is running on: localhost:' + port);
});

