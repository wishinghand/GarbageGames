/**
 * Created by Joey on 9/10/2016.
 */

var express = require('express');
var app = express();

app.use(express.static(path.join(__dirname, 'frontend/build')));
app.listen('3000', function(){
    
}
);

