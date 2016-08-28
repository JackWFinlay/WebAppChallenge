// server.js
//===================================
// Dependencies
const express = require('express');
const path    = require('path');
const challenge = require('./routes/challenge');
// / Dependencies
//===================================


app = express();
app.listen(8080, function() {
    console.log('App listening on port 8080!');
});

app.use(express.static(path.join(__dirname, '/public')));
//app.use('/scripts', express.static(__dirname + '/node_modules/'));

// all of our routes will be prefixed with /api
app.use('/api/v1/', challenge);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
