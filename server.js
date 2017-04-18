var express = require('express');

// Create app

var app = express();
app.use(express.static('public'));


// Listen on port 3000

app.listen(3000, function (){
    console.log('Server is running on port 3000');
});